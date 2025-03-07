using backend.Data;
using backend.Services;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors(options => {
    options.AddPolicy("AllowLocalhost", builder =>
        builder.WithOrigins("http://localhost:3000", "http://localhost:3001") // 允许的前端地址
               .AllowAnyHeader()
               .AllowAnyMethod()
               .AllowCredentials());
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<PropertyService>(); // 注册 PropertyService

// 注册 ApplicationDbContext
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));



var app = builder.Build();



app.UseSwagger();
app.UseSwaggerUI();
var url = "http://localhost:5000/swagger/index.html"; // 根据你的实际端口调整
Task.Delay(1000).ContinueWith(_ => OpenBrowser(url)); // 延迟以确保服务启动

app.UseCors("AllowLocalhost");  // 应用 CORS 策略


app.UseStaticFiles();  // start static file service
app.UseAuthorization();

app.MapControllers();

app.Run();


static void OpenBrowser(string url) {
    try {
        var psi = new ProcessStartInfo {
            FileName = url,
            UseShellExecute = true // 让 Windows 用默认浏览器打开
        };
        Process.Start(psi);
    } catch (Exception ex) {
        Console.WriteLine($"无法打开浏览器: {ex.Message}");
    }
}