import api from "./api";
import { UploadFile } from "antd/es/upload/interface";

// 获取所有房源
export const fetchProperties = async () => {
  const response = await api.get("/properties");
  return response;
};

// 获取单个房源
export const fetchPropertyById = async (id) => {
  const response = await api.get(`/properties/${id}`);
  return response;
};

// 创建房源
export const createProperty = async (property) => {
  const formData = new FormData();
  Object.entries(property).forEach(([key, value]) => {
    if (key === "files" && Array.isArray(value)) {
      value.forEach((file) => formData.append("files", file));
    } else {
      formData.append(key, value);
    }
  });

  await api.post("/properties", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
// changeStatus
export const updatePropertyStatus = async (id, status) => {
  await api.put(`/properties/${id}/status`, { status });
};

// 更新房源
export const updateProperty = async (id, property) => {
  await api.put(`/properties/${id}`, property);
};

// 删除房源
export const deleteProperty = async (id) => {
  await api.delete(`/properties/${id}`);
};
