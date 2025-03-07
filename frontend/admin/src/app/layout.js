"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { usePathname } from "next/navigation";
import "@ant-design/v5-patch-for-react-19";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  StrikethroughOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useRouter } from "next/navigation";
const { Header, Sider, Content } = Layout;

export default function RootLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const pathname = usePathname();
  const noLayoutPages = ["/login"]; // 这里添加不想使用 Layout 的页面路径
  const router = useRouter();
  const clickItem = function ({ key }) {
    router.push(`/${key}`);
  };
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          {noLayoutPages.includes(pathname) ? (
            <>{children}</>
          ) : (
            <Layout>
              <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <div className="h-50 text-white text-lg flex justify-center items-center">
                  OneRoof Admin
                </div>
                <Menu
                  theme="dark"
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  onClick={clickItem}
                  items={[
                    {
                      key: "manageHouse",
                      icon: <HomeOutlined />,
                      label: "Manage House",
                    },
                    {
                      key: "manageUser",
                      icon: <UserOutlined />,
                      label: "Manage User",
                    },
                    {
                      key: "transactionRecord",
                      icon: <StrikethroughOutlined />,
                      label: "Transaction Record",
                    },
                  ]}
                />
              </Sider>
              <Layout>
                <Header
                  style={{
                    padding: 0,
                    background: colorBgContainer,
                  }}
                >
                  <Button
                    type="text"
                    icon={
                      collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                    }
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                      fontSize: "16px",
                      width: 64,
                      height: 64,
                    }}
                  />
                </Header>
                <Content
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                  }}
                >
                  {children}
                </Content>
              </Layout>
            </Layout>
          )}
        </AntdRegistry>
      </body>
    </html>
  );
}
