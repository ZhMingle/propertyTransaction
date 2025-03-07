import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
export default function FileterDrop({
  opt,
  txt,
}: {
  opt: MenuProps["items"];
  txt: string;
}) {
  return (
    <Dropdown
      menu={{ items: opt }}
      trigger={["click"]}
      className="inline-block flex-1 text-center relative xs-s:min-w-0 after:w-2 after:h-16 after:bg-neutral after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2"
    >
      <div className="h-38 text-sm text-font lg:text-base inline-flex px-6 items-center justify-center cursor-pointer whitespace-nowrap lg:h-54 lg:px-10 2xl:px-16 w-full hover:bg-[#E2E3E6] xs-s:overflow-hidden">
        <a onClick={(e) => e.preventDefault()}>
          <Space>{txt}</Space>
          <DownOutlined className="ml-4" />
          <i className="icon ml-4 md:ml-6 !text-sm md:font-bold icon-arrow-down"></i>
        </a>
      </div>
    </Dropdown>
  );
}
