﻿namespace backend.DTOs {
    public class PropertyUpdateDto {
        public string Address { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Type { get; set; }
        public int BedroomCount { get; set; }
        public int BathroomCount { get; set; }
        public int ParkingCount { get; set; }
        public decimal BuildingArea { get; set; }
        public decimal TotalArea { get; set; }
    }
}
