using System;
using System.Collections.Generic;

namespace backend.Models {
	public class Property {
		public int Id { get; set; }  // ��ԴID
		public string Address { get; set; }  // ��ַ
		public string Description { get; set; }  // ����
		public decimal Price { get; set; }  // �۸�
		public string Type { get; set; }  // ��������
		public int BedroomCount { get; set; }  // ��������
		public int BathroomCount { get; set; }  // ����������
		public int ParkingCount { get; set; }  // ��λ����
		public decimal BuildingArea { get; set; }  // �������
		public PropertyStatus Status { get; set; } = PropertyStatus.Pending;
		public decimal TotalArea { get; set; }  // �����
		public DateTime CreatedAt { get; set; } = DateTime.UtcNow;  // ����ʱ��
		public List<PropertyImage> Images { get; set; } = new List<PropertyImage>();
	}

	public class PropertyImage {
		public int Id { get; set; }
		public int PropertyId { get; set; }
		public string ImageUrl { get; set; }
	}
}
