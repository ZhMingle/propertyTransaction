"use client";
import { useEffect, useState } from "react";
import { Button, Input, Image, Table, Popconfirm, Modal, Tag } from "antd";
import { fetchProperties, updatePropertyStatus } from "@/fetch/propertyService";

const ActionColumn = ({ record, refresh }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const confirm = async () => {
    await updatePropertyStatus(record.id, "Listed");
    refresh();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Popconfirm
        title="Pass the task"
        description="Are you sure to pass this property?"
        onConfirm={confirm}
        okText="Yes"
        cancelText="No"
      >
        <Button type="link">Pass</Button>
      </Popconfirm>
      <Button type="link" onClick={showModal}>
        Reject
      </Button>
      <Modal
        title="Rejection Reason"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Please provide a reason for rejecting this property.</p>
        <Input.TextArea rows={3} placeholder="Enter reason..." />
      </Modal>
    </>
  );
};

export default function CheckHouse() {
  const [data, setData] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0); // 用于触发刷新
  const refreshList = () => {
    setRefreshKey((prev) => prev + 1); // 触发刷新
  };
  const columns = [
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 100,
      render: (_, { status }) => {
        let color = "";
        if (status === "Pending") {
          color = "gold";
        } else if (status === "Rejected") {
          color = "red";
        } else if (status === "Listed") {
          color = "green";
        } else if (status === "Sold ") {
          color = "blue";
        } else if (status === "Delisted") {
          color = "default";
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },

    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 200,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 200,
    },
    {
      title: "Images",
      dataIndex: "images",
      key: "images",
      width: 340,
      render: (images) => (
        <Image.PreviewGroup>
          <div className="flex gap-4">
            {images.map((image) => (
              <Image
                className="!w-[100px]"
                key={image.id}
                src={image.imageUrl}
                alt="property"
              />
            ))}
          </div>
        </Image.PreviewGroup>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 80,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: 108,
    },
    {
      title: "Bedroom",
      dataIndex: "bedroomCount",
      key: "bedroomCount",
      width: 132,
    },
    {
      title: "Bathroom",
      dataIndex: "bathroomCount",
      key: "bathroomCount",
      width: 136,
    },
    {
      title: "Parking",
      dataIndex: "parkingCount",
      key: "parkingCount",
      width: 128,
    },
    {
      title: "Building Area",
      dataIndex: "buildingArea",
      key: "buildingArea",
      width: 128,
    },
    {
      title: "Total Area",
      dataIndex: "totalArea",
      key: "totalArea",
      width: 128,
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 160,
      render: (_, record) => (
        <ActionColumn record={record} refresh={refreshList} />
      ),
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProperties();
      setData(response);
    };
    fetchData();
  }, [refreshKey]);

  return (
    <div>
      <div className="flex w-[400px] gap-10 mb-20">
        <Input className="w-200" placeholder="Search..." />
        <Button type="primary">Search</Button>
      </div>
      <Table
        scroll={{
          x: 1500,
          y: 568,
        }}
        columns={columns}
        dataSource={data.map((item) => ({ ...item, key: item.id }))}
      />
    </div>
  );
}
