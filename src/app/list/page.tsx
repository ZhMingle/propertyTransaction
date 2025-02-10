"use client";
import { ConfigProvider, Pagination, Dropdown, Space } from "antd";
import ListItem from "@/components/ListItem";
import styles from "./list.module.css";
import { DownOutlined } from "@ant-design/icons";
import Image from "next/image";
import FileterDrop from "./FilterDropdown";
import { BEDS_OPT, PRICE_OPT, PROP_TYPE_OPT } from "@/const/listConst";
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export default function List() {
  return (
    <div>
      <div className="shadow-[0_4px_4px_rgba(0,0,0,0.05)] pt-20 pb-10 sm:pb-20">
        <div className="grid grid-rows-[auto,auto] lg:grid-rows-1 lg:grid-cols-[minmax(20%,30%),1fr] gap-y-10 gap-x-15 p1430:grid-cols-[minmax(20%,50%),minmax(20%,50%)] page-wrap">
          <div className="border flex-1 min-w-0 flex items-center bg-white rounded-sm">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-10"
            >
              <mask
                id="a"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <path d="M0 0h20v20H0V0z" fill="#fff"></path>
              </mask>
              <g
                mask="url(#a)"
                stroke="#000"
                stroke-width="1.406"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M10 19.414c-2.344-3.516-6.445-8.281-6.445-12.383A6.453 6.453 0 0 1 10 .586a6.453 6.453 0 0 1 6.445 6.445c0 4.102-4.101 8.867-6.445 12.383z"></path>
                <path d="M10 9.96a2.933 2.933 0 0 1-2.93-2.929A2.933 2.933 0 0 1 10 4.101a2.933 2.933 0 0 1 2.93 2.93A2.933 2.933 0 0 1 10 9.961z"></path>
              </g>
            </svg>
            <div className="flex-1 flex flex-wrap py-6 cursor-text px-6 min-w-0 sm:px-10 sm:py-10">
              <input
                type="text"
                className="m-4 flex-1 h-26 text-base min-w-18 text-black"
                placeholder="Type an address, suburb, or city"
              />
            </div>
          </div>
          <div className="border flex items-center rounded-sm">
            <FileterDrop opt={PRICE_OPT} txt="Price" />
            <FileterDrop opt={BEDS_OPT} txt="Beds" />
            <FileterDrop opt={BEDS_OPT} txt="Baths" />
            <FileterDrop opt={PROP_TYPE_OPT} txt="Property types" />

            <div className="inline-block flex-1 text-center relative xs-s:min-w-0 after:w-2 after:h-16 after:bg-neutral after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2">
              <Space>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="flex text-font"
                >
                  <Image
                    src="/filter.svg"
                    alt="filter"
                    width={16}
                    height={16}
                  />
                  &nbsp;More filter
                </a>
              </Space>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
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
    </div>
  );
}
