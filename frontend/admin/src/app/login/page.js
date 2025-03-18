"use client";
import { UserOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import { useRouter } from "next/navigation";
export default function login() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center ">
      <div className="w-[500px] bg-white rounded-sm px-20 py-30 flex flex-col gap-20">
        <h1 className="text-xl text-center">Log in</h1>
        <Input
          size="large"
          placeholder="Please input your account"
          prefix={<UserOutlined />}
        />
        <Input.Password size="large" placeholder="input password" />
        <Button
          type="primary"
          size="large"
          onClick={() => {
            router.push("/manageHouse");
          }}
        >
          Log in
        </Button>
      </div>
    </div>
  );
}
