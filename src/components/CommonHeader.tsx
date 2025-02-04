"use client";
import { Input } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Search } = Input;
import type { GetProps } from "antd";
import styles from "./CommonHeader.module.css";

type SearchProps = GetProps<typeof Input.Search>;
interface MyComponentProps {
  className?: string; // 声明 className 为可选的字符串类型
}
function goHome(e: React.MouseEvent<HTMLAnchorElement>, router: any) {
  e.preventDefault();
  router.push("/");
}
export default function BB({ className }: MyComponentProps) {
  const router = useRouter();
  return (
    <header className={styles.headerContainer}>
      <div className={`${styles.logo} cursor-pointer`}>
        <a
          href="/"
          onClick={(e) => {
            goHome(e, router);
          }}
        >
          <img
            src="https://assets.oneroof.co.nz/rebuild/aws/20250131091306/_next/static/media/logo-desktop.40f85b66.svg"
            className="h-[77px]"
          />
        </a>
      </div>
      <nav className="px-10 flex items-center justify-between whitespace-nowrap gap-x-20 md:gap-x-30 lg:gap-x-64 sm:px-0 sm:justify-start">
        <div className="cursor-pointer hover:text-[#53609b]">
          Find a property&nbsp;
          <DownOutlined />
        </div>
        <div className="cursor-pointer hover:text-[#53609b]">Estimates</div>
        <div className="cursor-pointer hover:text-[#53609b]">News</div>
        <div className="cursor-pointer hover:text-[#53609b]">
          Tools &nbsp;
          <DownOutlined />
        </div>
      </nav>
      <div
        className={`${styles.search} flex items-center cursor-pointer text-primary gap-x-20 text-[16px]`}
      >
        <SearchOutlined />
        <span className="relative flex items-center pr-20 lg:pr-30 after:w-1 after:h-20 after:bg-neutral-3 after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2">
          Search properties
        </span>

        <div className="overflow-hidden flex-shrink-0 rounded-full !w-32 !h-32 lg:!w-48 lg:!h-48">
          <img
            className="w-full h-full block object-cover object-[center_top] rounded-half"
            src="https://lh3.googleusercontent.com/a/ACg8ocKtSAhocIDuAa2OdvXNSV6KwZ6-A7HuhyI6Tfp8-D1ZUsLFtQ=s96-c"
          />
        </div>
      </div>
    </header>
  );
}
