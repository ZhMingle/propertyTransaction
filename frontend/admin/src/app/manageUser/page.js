"use client";

import { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, message, Popconfirm } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const fakeUsers = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    setUsers(fakeUsers);
  }, []);

  const handleAddUser = () => {
    form.validateFields().then((values) => {
      const newUser = { id: Date.now(), ...values };
      setUsers([...users, newUser]);
      message.success("User added successfully!");
      setIsModalOpen(false);
      form.resetFields();
    });
  };

  const handleEditUser = () => {
    form.validateFields().then((values) => {
      setUsers(
        users.map((user) =>
          user.id === editingUser.id ? { ...user, ...values } : user
        )
      );
      message.success("User updated successfully!");
      setIsModalOpen(false);
      setEditingUser(null);
      form.resetFields();
    });
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    message.success("User deleted successfully!");
  };

  const openModal = (user) => {
    setEditingUser(user || null);
    setIsModalOpen(true);
    form.setFieldsValue(user || { name: "", email: "" });
  };

  return (
    <div className="p-5">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-semibold">User Management</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => openModal()}
        >
          Add User
        </Button>
      </div>

      <Table
        dataSource={users}
        rowKey="id"
        columns={[
          { title: "ID", dataIndex: "id", key: "id" },
          { title: "Name", dataIndex: "name", key: "name" },
          { title: "Email", dataIndex: "email", key: "email" },
          {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
              <div className="flex gap-2">
                <Button onClick={() => openModal(record)}>Edit</Button>
                <Popconfirm
                  title="Are you sure?"
                  onConfirm={() => handleDeleteUser(record.id)}
                >
                  <Button danger>Delete</Button>
                </Popconfirm>
              </div>
            ),
          },
        ]}
      />

      <Modal
        title={editingUser ? "Edit User" : "Add User"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={editingUser ? handleEditUser : handleAddUser}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please enter email" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
