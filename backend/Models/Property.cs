using System;
using System.Collections.Generic;

namespace backend.Models {
	public class Property {
		public int Id { get; set; }  // 房源ID
		public string Address { get; set; }  // 地址
		public string Description { get; set; }  // 描述
		public decimal Price { get; set; }  // 价格
		public string Type { get; set; }  // 房屋类型
		public int BedroomCount { get; set; }  // 卧室数量
		public int BathroomCount { get; set; }  // 卫生间数量
		public int ParkingCount { get; set; }  // 车位数量
		public decimal BuildingArea { get; set; }  // 建筑面积
		public PropertyStatus Status { get; set; } = PropertyStatus.Pending;
		public decimal TotalArea { get; set; }  // 总面积
		public DateTime CreatedAt { get; set; } = DateTime.UtcNow;  // 创建时间
		public List<PropertyImage> Images { get; set; } = new List<PropertyImage>();
	}

	public class PropertyImage {
		public int Id { get; set; }
		public int PropertyId { get; set; }
		public string ImageUrl { get; set; }
	}
}
