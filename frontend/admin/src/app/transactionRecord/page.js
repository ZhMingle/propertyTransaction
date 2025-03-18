"use client";

import { useEffect, useState } from "react";
import { Table, Tag, Space } from "antd";
import dayjs from "dayjs";

const fakeTransactions = [
  {
    id: "TXN12345",
    user: "Alice",
    amount: 500,
    status: "Completed",
    timestamp: 1710480000000,
  },
  {
    id: "TXN12346",
    user: "Bob",
    amount: 200,
    status: "Pending",
    timestamp: 1710566400000,
  },
  {
    id: "TXN12347",
    user: "Charlie",
    amount: 1500,
    status: "Failed",
    timestamp: 1710652800000,
  },
];

const statusColors = {
  Completed: "green",
  Pending: "orange",
  Failed: "red",
};

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // 这里可以替换成 API 请求
    setTransactions(fakeTransactions);
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-4">Transaction Records</h1>

      <Table
        dataSource={transactions}
        rowKey="id"
        columns={[
          { title: "Transaction ID", dataIndex: "id", key: "id" },
          { title: "User", dataIndex: "user", key: "user" },
          {
            title: "Amount ($)",
            dataIndex: "amount",
            key: "amount",
            sorter: (a, b) => a.amount - b.amount,
          },
          {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => (
              <Tag color={statusColors[status]}>{status}</Tag>
            ),
          },
          {
            title: "Timestamp",
            dataIndex: "timestamp",
            key: "timestamp",
            render: (timestamp) =>
              dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss"),
          },
        ]}
      />
    </div>
  );
}
