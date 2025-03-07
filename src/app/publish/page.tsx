"use client";
import { useState, useRef, useEffect } from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  Button,
  message,
  AutoComplete,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import {
  Property,
  createProperty,
  updateProperty,
} from "@/fetch/propertyService";
import { convertToFormData } from "@/utils";
import useMessage from "@/hooks/MessageHook";

interface PropertyFormValues {
  address: string;
  description?: string;
  type: "apartment" | "house" | "townhouse";
  bedrooms: number;
  bathrooms: number;
  parking: number;
  buildingArea?: number;
  totalArea?: number;
}
const GOOGLE_API_KEY = "AIzaSyDyBcb6eGOQnDN3-ke3-I2AKKQqHXc4_Vk"; // 替换成你的 API Key

interface PropertyFormProps {
  initialValues?: Property;
  onSuccess?: () => void;
}
const PropertyForm: React.FC<PropertyFormProps> = ({
  initialValues,
  onSuccess,
}) => {
  const [form] = Form.useForm<PropertyFormValues>();
  const [imageList, setImageList] = useState<any[]>([]);
  const { Success, contextHolder } = useMessage();

  // 图片上传处理
  const handleUploadChange = ({ fileList }) => {
    setImageList(fileList);
  };

  // 提交表单
  const onFinish = async (values: PropertyFormValues) => {
    let formData: any = {
      ...values,
      Images: imageList.map((file) => file.originFileObj as File),
    };
    formData = convertToFormData(formData);

    try {
      if (initialValues) {
        await updateProperty(initialValues.id!, formData);
      } else {
        const res = await createProperty(formData);
        if (res.status === 200) {
          form.resetFields();
          setImageList([]);
          Success("Property created successfully");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  const [options, setOptions] = useState<{ value: string }[]>([]);

  useEffect(() => {
    // 在组件挂载时加载 Google Maps Script
    const loadGoogleMapsScript = () => {
      if ((window as any).google) return; // 如果已经加载 Google Maps 就不再加载
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
      script.async = true;
      document.body.appendChild(script);
    };

    loadGoogleMapsScript();
  }, []);

  const handleSearch = (value: string) => {
    if (!value) {
      setOptions([]);
      return;
    }

    // 使用 Google Places Autocomplete 服务获取地址建议
    const autocompleteService = new google.maps.places.AutocompleteService();
    autocompleteService.getPlacePredictions(
      { input: value, types: ["geocode"] },
      (predictions, status) => {
        if (
          status === google.maps.places.PlacesServiceStatus.OK &&
          predictions
        ) {
          setOptions(
            predictions.map((prediction) => ({
              value: prediction.description,
            }))
          );
        } else {
          setOptions([]);
        }
      }
    );
  };
  function tt() {
    form.resetFields();
  }
  return (
    <div className="w-[80vw] p-20 mx-auto p-6 bg-white shadow-lg">
      {contextHolder}
      <h2 className="text-xl font-bold mb-4">Upload Property</h2>
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          label="Address"
          name="Address"
          rules={[{ required: true, message: "Please enter the address" }]}
        >
          <AutoComplete
            options={options}
            onSearch={handleSearch}
            style={{ width: "100%" }}
          >
            <Input placeholder="Enter address" />
          </AutoComplete>
        </Form.Item>

        <Form.Item label="Description" name="Description">
          <Input.TextArea rows={3} />
        </Form.Item>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Form.Item label="Price" name="Price">
            <Input addonAfter="million" />
          </Form.Item>

          <Form.Item
            label="Property Type"
            name="Type"
            rules={[
              { required: true, message: "Please select the property type" },
            ]}
          >
            <Select>
              <Select.Option value="apartment">Apartment</Select.Option>
              <Select.Option value="house">House</Select.Option>
              <Select.Option value="townhouse">Townhouse</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          <Form.Item
            label="BedroomCount"
            name="BedroomCount"
            rules={[
              {
                required: true,
                message: "Please enter the BedroomCount",
              },
            ]}
          >
            <InputNumber min={1} />
          </Form.Item>

          <Form.Item
            label="BathroomCount"
            name="BathroomCount"
            rules={[
              {
                required: true,
                message: "Please enter the number of BathroomCount",
              },
            ]}
          >
            <InputNumber min={1} />
          </Form.Item>

          <Form.Item
            label="ParkingCount"
            name="ParkingCount"
            rules={[
              {
                required: true,
                message: "Please enter the ParkingCount",
              },
            ]}
          >
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item label="Building Area (㎡)" name="BuildingArea">
            <InputNumber min={1} />
          </Form.Item>

          <Form.Item label="Total Area (㎡)" name="TotalArea">
            <InputNumber min={1} />
          </Form.Item>
        </div>

        <Form.Item label="Property Images">
          <Upload
            listType="picture-card"
            fileList={imageList}
            beforeUpload={() => false} // 不直接上传
            onChange={handleUploadChange}
            multiple
          >
            {imageList.length >= 5 ? null : (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default PropertyForm;
