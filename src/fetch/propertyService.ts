import api from "./api";
import { UploadFile } from "antd/es/upload/interface";
export interface Property {
  id?: number;
  address: string;
  description: string;
  price: number;
  type: string;
  bedroomCount: number;
  bathroomCount: number;
  parkingCount: number;
  buildingArea: number;
  totalArea: number;
  files?: UploadFile[];
}

// 获取所有房源
export const fetchProperties = async (): Promise<Property[]> => {
  const response = await api.get("/properties");
  return response.data;
};

// 获取单个房源
export const fetchPropertyById = async (id: number): Promise<Property> => {
  const response = await api.get(`/properties/${id}`);
  return response.data;
};

// 创建房源
export const createProperty = async (property) => {
  return await api.post("/properties", property, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// 更新房源
export const updateProperty = async (
  id: number,
  property: Partial<Property>
) => {
  await api.put(`/properties/${id}`, property);
};

// 删除房源
export const deleteProperty = async (id: number) => {
  await api.delete(`/properties/${id}`);
};
