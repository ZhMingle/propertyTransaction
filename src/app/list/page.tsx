"use client";
import { ConfigProvider, Pagination } from "antd";

import ListItem from "@/components/ListItem";
import styles from "./list.module.css";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
export default function List() {
  return (
    <div className={styles.contentContainer}>
      <div className="grid grid-rows-[auto,auto] lg:grid-rows-1 lg:grid-cols-[minmax(20%,30%),1fr] gap-y-10 gap-x-15 p1430:grid-cols-[minmax(20%,50%),minmax(20%,50%)] page-wrap">
        <div className="border">
          <input type="text" />
        </div>
        <div className="border"></div>
      </div>
      <div className={styles.listContainer}>
        {new Array(9).fill(0).map((i, j) => {
          return <ListItem key={j} />;
        })}
      </div>
      <div className={styles.customPagination}>
        <ConfigProvider
          theme={{
            components: {
              Pagination: {
                itemActiveBg: "#ffe60f",
              },
            },
          }}
        >
          <Pagination defaultCurrent={1} total={50} align="end" />
        </ConfigProvider>
      </div>
    </div>
  );
}
