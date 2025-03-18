using System.Text.Json.Serialization;

public class AuthRequest {
    [JsonPropertyName("walletAddress")]
    public string WalletAddress { get; set; }
}

public class LoginRequest {
    [JsonPropertyName("walletAddress")]
    public string WalletAddress { get; set; }

    [JsonPropertyName("signature")]
    public string Signature { get; set; }
}
