using Microsoft.AspNetCore.Mvc;
using backend.DTOs;
using backend.Models;
using backend.Services;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using backend.DTOs;
using backend.Services;

[Route("api/properties")]
[ApiController]
public class PropertyController : ControllerBase {
    private readonly PropertyService _propertyService;
    private readonly IWebHostEnvironment _webHostEnvironment;

    public PropertyController(PropertyService propertyService, IWebHostEnvironment webHostEnvironment) {
        _propertyService = propertyService;
        _webHostEnvironment = webHostEnvironment;
    }

    // ��ȡ���з�Դ
    [HttpGet]
    public async Task<IActionResult> GetProperties() {
        var properties = await _propertyService.GetAllPropertiesAsync();
        return Ok(properties);
    }

    // ��ȡ������Դ
    [HttpGet("{id}")]
    public async Task<IActionResult> GetProperty(int id) {
        var property = await _propertyService.GetPropertyByIdAsync(id);
        if (property == null) return NotFound();
        return Ok(property);
    }

    // �ϴ���Դ
    [HttpPost]
    [Consumes("multipart/form-data")]
    public async Task<IActionResult> UploadProperty([FromForm] PropertyUploadDto propertyDto) {
        var property = new Property {
            Address = propertyDto.Address,
            Description = propertyDto.Description,
            Price = propertyDto.Price,
            Type = propertyDto.Type,
            BedroomCount = propertyDto.BedroomCount,
            BathroomCount = propertyDto.BathroomCount,
            ParkingCount = propertyDto.ParkingCount,
            BuildingArea = propertyDto.BuildingArea,
            TotalArea = propertyDto.TotalArea
        };

        property = await _propertyService.CreatePropertyAsync(property);

        if (property == null) {
            return BadRequest("Failed to create Property");
        }
        if (propertyDto.Images == null || propertyDto.Images.Count == 0) {
            return BadRequest("Images �ֶ��Ҳ�����Ϊ��111");
        }
        // ��������ͼƬ
        if (propertyDto.Images != null && propertyDto.Images.Count > 0) {
            var propertyImages = new List<PropertyImage>();

            foreach (var image in propertyDto.Images) {
                var fileName = $"{Guid.NewGuid()}_{image.FileName}"; // ����Ψһ�ļ���
                var filePath = Path.Combine("wwwroot", "uploads", fileName); // �洢·��

                // ȷ���ļ��д���
                if (!Directory.Exists(Path.Combine("wwwroot", "uploads"))) {
                    Directory.CreateDirectory(Path.Combine("wwwroot", "uploads"));
                }

                // �����ļ�
                using (var stream = new FileStream(filePath, FileMode.Create)) {
                    await image.CopyToAsync(stream);
                }

                // ����PropertyImage������������
                var propertyImage = new PropertyImage {
                    ImageUrl = $"{GetBaseUrl()}/uploads/{fileName}",  // ͼƬ�����·��
                    PropertyId = property.Id  // ��������ǰ��Դ
                };

                propertyImages.Add(propertyImage);
            }

            // ��ͼƬ�б�ֵ�� property.Images
            property.Images.AddRange(propertyImages);

            // ʹ�� property.Id �� property �������ݿ�
            await _propertyService.UpdatePropertyAsync(property.Id, property);
        }
        return Ok(property);
    }
    private string GetBaseUrl() {
        return $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host}";  // ��ȡ������URLǰ׺
    }

    // �޸�״̬
    [HttpPut("{id}/status")]
    public async Task<IActionResult> UpdatePropertyStatus(int id, [FromBody] PropertyStatusUpdateDto updateDto) {
        var updatedProperty = await _propertyService.UpdatePropertyStatusAsync(id, updateDto.Status);

        if (updatedProperty == null) return NotFound();
        return Ok(updatedProperty);
    }


    // ���·�Դ
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateProperty(int id, [FromBody] PropertyUpdateDto updateDto) {
        var updatedProperty = await _propertyService.UpdatePropertyAsync(id, new Property {
            Address = updateDto.Address,
            Description = updateDto.Description,
            Price = updateDto.Price,
            Type = updateDto.Type,
            BedroomCount = updateDto.BedroomCount,
            BathroomCount = updateDto.BathroomCount,
            ParkingCount = updateDto.ParkingCount,
            BuildingArea = updateDto.BuildingArea,
            TotalArea = updateDto.TotalArea
        });

        if (updatedProperty == null) return NotFound();
        return Ok(updatedProperty);
    }

    // ɾ����Դ
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProperty(int id) {
        var deleted = await _propertyService.DeletePropertyAsync(id);
        return deleted ? NoContent() : NotFound();
    }
}
