"use client";
import { useState } from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  Button,
  message,
} from "antd";
import { UploadFile } from "antd/es/upload/interface";
import { PlusOutlined } from "@ant-design/icons";

interface PropertyFormValues {
  address: string;
  title: string;
  description?: string;
  type: "apartment" | "house" | "townhouse";
  bedrooms: number;
  bathrooms: number;
  parking: number;
  buildingArea?: number;
  totalArea?: number;
}

export default function UploadProperty() {
  const [form] = Form.useForm<PropertyFormValues>();
  const [imageList, setImageList] = useState<UploadFile[]>([]);

  // 图片上传处理
  const handleUploadChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setImageList(fileList);
  };

  // 提交表单
  const onFinish = async (values: PropertyFormValues) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, (values as any)[key]);
    });

    // 处理图片上传
    imageList.forEach((file) => {
      if (file.originFileObj) {
        formData.append("images", file.originFileObj);
      }
    });

    try {
      const response = await fetch("/api/properties", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        message.success("房源上传成功！");
        form.resetFields();
        setImageList([]);
      } else {
        message.error("上传失败，请稍后再试！");
      }
    } catch (error) {
      console.error("上传错误:", error);
      message.error("网络错误，上传失败！");
    }
  };

  return (
    <div className="w-[80vw] p-20 mx-auto p-6 bg-white shadow-lg">
      <h2 className="text-xl font-bold mb-4">上传房源</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="地址"
          name="address"
          rules={[{ required: true, message: "请输入地址" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="标题"
          name="title"
          rules={[{ required: true, message: "请输入标题" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="描述" name="description">
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item
          label="房屋类型"
          name="type"
          rules={[{ required: true, message: "请选择房屋类型" }]}
        >
          <Select>
            <Select.Option value="apartment">公寓</Select.Option>
            <Select.Option value="house">独栋</Select.Option>
            <Select.Option value="townhouse">联排别墅</Select.Option>
          </Select>
        </Form.Item>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          <Form.Item
            label="卧室数"
            name="bedrooms"
            rules={[{ required: true, message: "请输入卧室数" }]}
          >
            <InputNumber min={1} />
          </Form.Item>

          <Form.Item
            label="卫生间数"
            name="bathrooms"
            rules={[{ required: true, message: "请输入卫生间数" }]}
          >
            <InputNumber min={1} />
          </Form.Item>

          <Form.Item
            label="车位数"
            name="parking"
            rules={[{ required: true, message: "请输入车位数" }]}
          >
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item label="建筑面积 (㎡)" name="buildingArea">
            <InputNumber min={1} />
          </Form.Item>

          <Form.Item label="总面积 (㎡)" name="totalArea">
            <InputNumber min={1} />
          </Form.Item>
        </div>
        <Form.Item label="房源图片">
          <Upload
            listType="picture-card"
            fileList={imageList}
            beforeUpload={() => false} // 不直接上传
            onChange={handleUploadChange}
          >
            {imageList.length >= 5 ? null : (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>上传</div>
              </div>
            )}
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
