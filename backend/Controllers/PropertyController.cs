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

    // 获取所有房源
    [HttpGet]
    public async Task<IActionResult> GetProperties() {
        var properties = await _propertyService.GetAllPropertiesAsync();
        return Ok(properties);
    }

    // 获取单个房源
    [HttpGet("{id}")]
    public async Task<IActionResult> GetProperty(int id) {
        var property = await _propertyService.GetPropertyByIdAsync(id);
        if (property == null) return NotFound();
        return Ok(property);
    }

    // 上传房源
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
            return BadRequest("Images 字段找不到或为空111");
        }
        // 处理并保存图片
        if (propertyDto.Images != null && propertyDto.Images.Count > 0) {
            var propertyImages = new List<PropertyImage>();

            foreach (var image in propertyDto.Images) {
                var fileName = $"{Guid.NewGuid()}_{image.FileName}"; // 生成唯一文件名
                var filePath = Path.Combine("wwwroot", "uploads", fileName); // 存储路径

                // 确保文件夹存在
                if (!Directory.Exists(Path.Combine("wwwroot", "uploads"))) {
                    Directory.CreateDirectory(Path.Combine("wwwroot", "uploads"));
                }

                // 保存文件
                using (var stream = new FileStream(filePath, FileMode.Create)) {
                    await image.CopyToAsync(stream);
                }

                // 创建PropertyImage对象并设置属性
                var propertyImage = new PropertyImage {
                    ImageUrl = $"{GetBaseUrl()}/uploads/{fileName}",  // 图片的相对路径
                    PropertyId = property.Id  // 关联到当前房源
                };

                propertyImages.Add(propertyImage);
            }

            // 将图片列表赋值给 property.Images
            property.Images.AddRange(propertyImages);

            // 使用 property.Id 和 property 更新数据库
            await _propertyService.UpdatePropertyAsync(property.Id, property);
        }
        return Ok(property);
    }
    private string GetBaseUrl() {
        return $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host}";  // 获取完整的URL前缀
    }

    // 修改状态
    [HttpPut("{id}/status")]
    public async Task<IActionResult> UpdatePropertyStatus(int id, [FromBody] PropertyStatusUpdateDto updateDto) {
        var updatedProperty = await _propertyService.UpdatePropertyStatusAsync(id, updateDto.Status);

        if (updatedProperty == null) return NotFound();
        return Ok(updatedProperty);
    }


    // 更新房源
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

    // 删除房源
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProperty(int id) {
        var deleted = await _propertyService.DeletePropertyAsync(id);
        return deleted ? NoContent() : NotFound();
    }
}
