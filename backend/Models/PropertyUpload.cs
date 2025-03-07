using System;
public enum PropertyStatus {
    Pending,
    Reject,
    Listed,
    Sold,
    Delisted
}

public class PropertyUploadRequest {
    public string Address { get; set; }  // 地址
    public string Description { get; set; }  // 描述
    public decimal Price { get; set; }  // 价格
    public string Type { get; set; }  // 类型
    public int BedroomCount { get; set; }  // 卧室数量
    public int BathroomCount { get; set; }  // 卫生间数量
    public int ParkingCount { get; set; }  // 停车数量
    public decimal BuildingArea { get; set; }  // 建筑面积
    public decimal TotalArea { get; set; }  // 总面积
    public List<IFormFile> Images { get; set; }  // 多张图片文件
    public PropertyStatus Status { get; set; } = PropertyStatus.Pending;
}

