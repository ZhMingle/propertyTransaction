using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Nethereum.Signer;
using System;
using System.Collections.Concurrent;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

[Route("api/auth")]
[ApiController]
public class AuthController : ControllerBase {
    private static ConcurrentDictionary<string, string> _nonceStore = new ConcurrentDictionary<string, string>();
    private readonly IConfiguration _configuration;

    public AuthController(IConfiguration configuration) {
        _configuration = configuration;
    }

    // 1️⃣ 生成随机 nonce（前端请求 nonce）
    [HttpPost("nonce")]
    public IActionResult GetNonce([FromBody] AuthRequest request) {
        if (string.IsNullOrEmpty(request.WalletAddress))
            return BadRequest(new { error = "Wallet address is required" });

        string nonce = Guid.NewGuid().ToString();
        _nonceStore[request.WalletAddress] = nonce;
        return Ok(new { nonce });
    }

    // 2️⃣ 校验 MetaMask 签名（前端发送签名，后端验证）
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest request) {
        if (string.IsNullOrEmpty(request.WalletAddress) || string.IsNullOrEmpty(request.Signature))
            return BadRequest(new { error = "Wallet address and signature are required" });

        if (!_nonceStore.ContainsKey(request.WalletAddress))
            return Unauthorized(new { error = "Invalid login request" });

        string nonce = _nonceStore[request.WalletAddress];

        var signer = new EthereumMessageSigner();
        string recoveredAddress = signer.EncodeUTF8AndEcRecover(nonce, request.Signature);

        if (!recoveredAddress.Equals(request.WalletAddress, StringComparison.OrdinalIgnoreCase))
            return Unauthorized(new { error = "Signature verification failed" });

        // 3️⃣ 生成 JWT Token
        string token = GenerateJwtToken(request.WalletAddress);
        return Ok(new { token });
    }

    private string GenerateJwtToken(string walletAddress) {
        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, walletAddress),
            new Claim(ClaimTypes.Role, "User")
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Secret"]));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            _configuration["Jwt:Issuer"],
            _configuration["Jwt:Audience"],
            claims,
            expires: DateTime.UtcNow.AddHours(2),
            signingCredentials: creds
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
