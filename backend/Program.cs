using backend.Data;
using backend.Services;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddCors(options => {
    options.AddPolicy("AllowLocalhost", builder =>
        builder.WithOrigins("http://localhost:3000", "http://localhost:3001") // �����ǰ�˵�ַ
               .AllowAnyHeader()
               .AllowAnyMethod()
               .AllowCredentials());
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<PropertyService>(); // ע�� PropertyService

// ע�� ApplicationDbContext
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));



var app = builder.Build();



app.UseSwagger();
app.UseSwaggerUI();
var url = "http://localhost:5000/swagger/index.html"; // �������ʵ�ʶ˿ڵ���
Task.Delay(1000).ContinueWith(_ => OpenBrowser(url)); // �ӳ���ȷ����������

app.UseCors("AllowLocalhost");  // Ӧ�� CORS ����


app.UseStaticFiles();  // start static file service
app.UseAuthorization();

app.MapControllers();

app.Run();


static void OpenBrowser(string url) {
    try {
        var psi = new ProcessStartInfo {
            FileName = url,
            UseShellExecute = true // �� Windows ��Ĭ���������
        };
        Process.Start(psi);
    } catch (Exception ex) {
        Console.WriteLine($"�޷��������: {ex.Message}");
    }
}