using Microsoft.AspNetCore.Mvc;

namespace backend.DTOs {
    public class PropertyUploadDto {
        public string Address { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Type { get; set; }
        public int BedroomCount { get; set; }
        public int BathroomCount { get; set; }
        public int ParkingCount { get; set; }
        public decimal BuildingArea { get; set; }
        public decimal TotalArea { get; set; }
        [FromForm]
        public List<IFormFile> Images { get; set; }  // 多张图片文件
    }
}
