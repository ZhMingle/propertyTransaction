"use client";
import { Input } from "antd";
const { Search } = Input;
import type { GetProps } from "antd";
import styles from "./CommonHeader.module.css";

type SearchProps = GetProps<typeof Input.Search>;
interface MyComponentProps {
  className?: string; // 声明 className 为可选的字符串类型
}
const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

export default function BB({ className }: MyComponentProps) {
  return (
    <header className={styles.headerContainer}>
      <div className="cursor-pointer">
        <img
          src="//img.alicdn.com/imgextra/i2/O1CN01BlAXLA1VkzE3nyBH6_!!6000000002692-2-tps-480-144.png_240x10000.jpg_.webp"
          className="h-[77px]"
        />
      </div>
      <div className="min-w-[600px]">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </div>
      <div className={styles.avatar}>
        <div className={styles.avatarWraper}>
          <img />
        </div>
        <span>mingle</span>
      </div>
    </header>
  );
}
