"use client";
import { DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="relative px-container-pd min-w-0 sm:min-h-[550px] sm:flex sm:flex-col sm:items-center sm:justify-center min-h-[550px]">
      <img
        src="https://assets.oneroof.co.nz/rebuild/aws/20250131091306/_next/static/media/residential2.f6730ba0.webp"
        className="w-full h-full object-cover object-bottom pointer-events-none absolute left-0 top-0 -z-[1] sm:object-bottom"
      />
      <div className="w-[900px] max-w-full mx-auto h-full flex-1 min-h-0 flex flex-col before:h-30 sm:before:h-auto after:flex-1 sm:before:flex-1 text-white">
        <h1 className="text-2xl text-center font-bold sm:text-5xl">
          Start your property search
        </h1>
        <div className="relative mt-16 text-font sm:mt-40 flex">
          <div className="flex flex-1 flex-col relative sm:flex-row min-h-[66px]">
            <div className="bg-white sm:bg-neutral-2 pl-10 sm:pl-0 cursor-pointer h-full flex items-center sm:w-134 justify-center gap-x-4 border !border-r-0 text-primary sm:text-font rounded-tl-sm sm:rounded-l-sm">
              <span>Buy</span>
              <DownOutlined />
            </div>
            <div className="border flex-1 min-w-0 flex items-center bg-white rounded-t-sm sm:rounded-sm border-r-0  border-l-0 sm:!rounded-r-none !rounded-l-none">
              <div className="flex flex-1">
                <input
                  type="text"
                  className="m-4 flex-1 h-26 text-base min-w-[18px] text-black"
                />
                <button className="px-10 sm:px-20 relative flex items-center before:w-2 before:h-22 before:bg-neutral before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-primary w-26 h-26 sm:w-30 sm:h-30"
                  >
                    <path d="M19.688 5.636c-2.257 0-4.155 1.618-4.593 3.75H2.812a.938.938 0 0 0 0 1.875h12.283c.438 2.133 2.336 3.75 4.592 3.75 2.257 0 4.155-1.617 4.593-3.75h2.907a.938.938 0 0 0 0-1.875H24.28c-.438-2.132-2.336-3.75-4.593-3.75zm0 1.875a2.798 2.798 0 0 1 2.812 2.813 2.798 2.798 0 0 1-2.813 2.812 2.798 2.798 0 0 1-2.812-2.812 2.798 2.798 0 0 1 2.813-2.813zM10.313 15.011c-2.257 0-4.155 1.618-4.593 3.75H2.813a.937.937 0 1 0 0 1.875H5.72c.438 2.133 2.336 3.75 4.593 3.75 2.256 0 4.154-1.617 4.592-3.75h12.283a.938.938 0 0 0 0-1.875H14.905c-.438-2.132-2.336-3.75-4.592-3.75zm0 1.875a2.798 2.798 0 0 1 2.812 2.813 2.798 2.798 0 0 1-2.813 2.812A2.798 2.798 0 0 1 7.5 19.7a2.798 2.798 0 0 1 2.813-2.813z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-auto h-auto px-10 py-14 bg-white sm:border-y sm:py-10 absolute top-full left-0 sm:static rounded-b-sm sm:rounded-bl-none sm:rounded-r-sm">
            <button
              type="button"
              className="block button-orange w-full h-48 sm:w-114 sm:h-full"
              aria-label="search"
              onClick={() => {
                router.push("/list");
              }}
            >
              <span className="text-base sm:text-lg">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
