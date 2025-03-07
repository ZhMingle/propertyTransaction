"use client";
import Image from "next/image";
import { DownOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import DetailDialog from "./DetailDialog";
import { DialogActions } from "@/types/dialog";
export default function Detail() {
  const [hasFolded, setHasFolded] = useState(true);
  const contentRef = useRef(null);
  const dialogRef = useRef<DialogActions | null>(null);
  const viewImg = () => {
    console.log(9999);

    dialogRef.current?.openDialog();
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:h-[30vmin] xl:h-[50vmin] md:max-h-500 lg:min-h-[300px] md:grid-cols-[62.5%,1fr]">
        <div
          className="aspect-video min-h-0 relative md:aspect-auto cursor-pointer overflow-hidden"
          onClick={viewImg}
        >
          <img
            className="w-full h-full aspect-auto object-cover hidden md:block hover:scale-110 transition-transform duration-500"
            src="https://s.oneroof.co.nz/image/8d/c6/8dc659da71bc65183839efd18ce3852d.jpg?x-oss-process=image/quality,q_80/resize,w_1920/format,webp"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-rows-[1fr,1fr] gap-4 min-h-0">
          <div className="aspect-video w-full h-full md:aspect-auto min-h-0 relative cursor-pointer overflow-hidden">
            <img
              className="block w-full h-full aspect-auto object-cover hover:scale-110 transition-transform duration-500"
              src="https://s.oneroof.co.nz/image/55/61/55617a1b9b3b7bac185f9320aecb684a.jpg?x-oss-process=image/quality,q_80/resize,w_640/format,webp"
            />
            <div className="absolute inset-x-0 inset-y-0 bg-black bg-opacity-50 flex pointer-events-none">
              <div className="text-white m-auto">
                <div className="flex flex-col items-center">
                  <Image
                    src="/floorplan.svg"
                    alt="floorplan"
                    width={24}
                    height={24}
                  />
                  <div className="text-white text-xs sm:text-sm">Floorplan</div>
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-video w-full h-full md:aspect-auto min-h-0 relative cursor-pointer overflow-hidden">
            <img
              className="block w-full h-full aspect-auto object-cover hover:scale-110 transition-transform duration-500"
              src="https://s.oneroof.co.nz/image/32/c9/32c9287cc5f22a261414abd260c4f0cf.jpg?x-oss-process=image/quality,q_80/resize,w_640/format,webp"
            />
            <div className="absolute inset-x-0 inset-y-0 bg-black bg-opacity-50 flex pointer-events-none"></div>
          </div>
          <div className="aspect-video w-full h-full md:aspect-auto min-h-0 relative cursor-pointer overflow-hidden">
            <img
              className="block w-full h-full aspect-auto object-cover hover:scale-110 transition-transform duration-500"
              src="https://s.oneroof.co.nz/image/ab/2c/ab2caff6d0145803cd052b00a60e21e9.jpg?x-oss-process=image/quality,q_80/resize,w_640/format,webp"
            />
            <div className="absolute inset-x-0 inset-y-0 bg-black bg-opacity-50 flex pointer-events-none"></div>
          </div>
          <div className="aspect-video w-full h-full md:aspect-auto min-h-0 relative cursor-pointer overflow-hidden">
            <img
              className="block w-full h-full aspect-auto object-cover hover:scale-110 transition-transform duration-500"
              src="https://s.oneroof.co.nz/image/6e/66/6e66d576ce114796dc720c41fce1bfc5.jpg?x-oss-process=image/quality,q_80/resize,w_640/format,webp"
            />
            <div className="absolute inset-x-0 inset-y-0 bg-black bg-opacity-50 flex pointer-events-none">
              <div className="text-white m-auto">
                <div className="flex flex-col items-center">
                  <div className="text-white text-1xl sm:text-3xl">+29</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-wrap mb-40">
        <section className="mt-32 grid grid-cols-1 gap-x-32 gap-y-20 md:grid-cols-[1fr,40%]">
          <aside className="min-w-0 space-y-20 md:space-y-36">
            <div>
              <h1 className="text-font text-3xl font-bold not-italic text-black">
                290A Whitney Street, Blockhouse Bay, Auckland City
              </h1>
              <div className="text-font text-2xl mt-8 text-black">
                Auction, 15 Feb 2025 14:00
              </div>
              <div className="flex mt-8 space-x-16 sm:space-x-24">
                <div className="flex items-center text-neutral-5">
                  <Image
                    src="/detail_icon/bed.svg"
                    alt="bed"
                    width={24}
                    height={24}
                  />
                  <span className="ml-8">3</span>
                </div>
                <div className="flex items-center text-neutral-5">
                  <Image
                    src="/detail_icon/bath.svg"
                    alt="bath"
                    width={24}
                    height={24}
                  />
                  <span className="ml-8">1</span>
                </div>
                <div className="flex items-center text-neutral-5">
                  <Image
                    src="/detail_icon/car.svg"
                    alt="car"
                    width={24}
                    height={24}
                  />
                  <span className="ml-8">2</span>
                </div>
                <div className="flex items-center text-neutral-5">
                  <Image
                    src="/detail_icon/constructure_area.svg"
                    alt="bed"
                    width={22}
                    height={22}
                  />
                  <span className="ml-8">187m²</span>
                </div>
                <div className="flex items-center text-neutral-5">
                  <Image
                    src="/detail_icon/total_area.svg"
                    alt="bed"
                    width={24}
                    height={24}
                  />
                  <span className="ml-8">494m²</span>
                </div>
              </div>
              <div className="text-black text-xl mt-24">Soothe Your Soul</div>
              <div
                ref={contentRef}
                style={{
                  height: hasFolded
                    ? "200px"
                    : contentRef.current?.scrollHeight + "px",
                }}
                className="overflow-hidden transition-[height] relative mt-8"
              >
                <div>
                  <div className="childs-[p+p]:mt-10 childs-[a]:text-primary child-[ul]:list-disc child-[ol]:list-item">
                    <p>
                      A private place of relaxation nestled behind the picket
                      fence! Calling all buyers who appreciate the art deco
                      style; this charming, character-filled property will make
                      coming home every evening an absolute pleasure.
                    </p>
                    <p></p>
                    <p>
                      Tastefully presented with three bedrooms plus study, and a
                      super-sized lounge with sheltered deck that offers
                      all-year-round entertainment options. The property has a
                      northerly aspect - so perfectly-positioned for all day sun
                      - and a special place of privacy - the garden -
                      resplendent with veggies and fruit trees ready for
                      harvest!
                    </p>
                    <p></p>
                    <p>
                      Brilliantly located for the best school zones in this
                      neighbourhood - Blockhouse Bay Primary and Lynfield
                      College - and close to the shopping amenities of Lynfield
                      and Blockhouse Bay.
                    </p>
                    <p></p>
                    <p>
                      Our sellers have purchased and will meet today's market,
                      so don't delay to inspect this refreshingly affordable
                      opportunity.
                    </p>
                    <p></p>
                    <p></p>
                  </div>
                  <div className="mt-20 md:mt-36">
                    <div className="text-font text-base font-medium">
                      Additional details
                    </div>
                    <div className="mt-12 space-y-16">
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-font">Type</div>
                        <div className="text-neutral-5">House</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-font">Property ID</div>
                        <div className="text-neutral-5">BLO31775</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-font">Listed on</div>
                        <time className="text-neutral-5">23/01/2025</time>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-font">Updated</div>
                        <time className="text-neutral-5">24/01/2025</time>
                      </div>
                    </div>
                  </div>

                  <div className="mt-20 md:mt-36">
                    <div className="text-font text-base font-medium">
                      Additional details
                    </div>
                    <div className="mt-12 space-y-16">
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-font">Type</div>
                        <div className="text-neutral-5">House</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-font">Property ID</div>
                        <div className="text-neutral-5">BLO31775</div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-font">Listed on</div>
                        <time className="text-neutral-5">23/01/2025</time>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-font">Updated</div>
                        <time className="text-neutral-5">24/01/2025</time>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    hasFolded ? "absolute" : "none"
                  } inset-x-0 bottom-0 min-h-[80px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] to-white`}
                ></div>
              </div>

              <div className="mt-10">
                <div className="inline-block">
                  <button
                    className="button-text-primary"
                    onClick={() => {
                      setHasFolded(!hasFolded);
                    }}
                  >
                    {hasFolded ? "Read more " : "Show Less "}
                    <DownOutlined className={hasFolded ? "" : "rotate-180"} />
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center gap-x-4">
                <span className="text-xl font-medium">Open Homes</span>
                <span className="-translate-y-1/4 bg-secondary min-w-[20px] h-20 rounded-half flex items-center justify-center text-sm text-white">
                  1
                </span>
              </div>
              <div className="mt-16">
                <div className="relative">
                  <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                    <div className="flex">
                      <div className="!w-auto">
                        <div className="border rounded-sm">
                          <div className="p-14">
                            <div className="text-base font-normal">
                              Sat, 15 Feb
                            </div>
                            <div className="text-sm whitespace-nowrap">
                              01:30PM - 02:00PM
                            </div>
                          </div>
                          <div className="px-14 py-8 border-t">
                            <button className="button-text-primary !text-sm">
                              + Add to planner
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center gap-x-4">
                <span className="text-xl font-medium">Auction</span>
                <span className="-translate-y-1/4 bg-secondary min-w-[20px] h-20 rounded-half flex items-center justify-center text-sm text-white">
                  1
                </span>
              </div>
              <div className="mt-16">
                <div className="relative">
                  <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
                    <div className="flex">
                      <div
                        className="swiper-slide !w-auto swiper-slide-active"
                        style={{ marginRight: "16px" }}
                      >
                        <div className="border rounded-sm">
                          <div className="p-14">
                            <div className="text-base font-normal">
                              Sat, 15 Feb
                            </div>
                            <div className="text-sm whitespace-nowrap">
                              02:00PM
                            </div>
                          </div>
                          <div className="px-14 py-8 border-t">
                            <button className="button-text-primary !text-sm">
                              + Add to planner
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <aside className="space-y-20 md:space-y-36">
            <div className="shadow-md rounded-sm overflow-hidden">
              <div
                className="h-38 flex items-center px-10 justify-center !h-50"
                style={{ backgroundColor: "#ffe512" }}
              >
                {" "}
                <img
                  alt="1 Donovan Street, Blockhouse Bay, Auckland City, 0600"
                  loading="lazy"
                  width="200"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  className="object-contain object-center h-32"
                  src="https://s.oneroof.co.nz/image/9a/81/9a81baee02fff5483be0c0b30ff5e2d5.jpg?x-oss-process=image/quality,q_80/resize,w_640/format,webp"
                />
              </div>
              <div className="px-20 py-30">
                <div className="text-center">
                  <div className="inline-flex items-center gap-x-4">
                    <button className="w-32 h-32 flex items-center justify-center text-primary disabled:opacity-40 disabled:pointer-events-none AgentsCarousel-agent-prev">
                      <i className="icon font-bold !text-xl icon-arrow-left"></i>
                    </button>
                    <div className="flex items-center h-90 px-15">
                      <div className="!w-60 !h-60 !flex items-center justify-center transition-opacity z-[2] opacity-100">
                        <div className="block transition-all relative rounded-half overflow-hidden flex-shrink-0 border-2 border-white w-90 h-90">
                          <div className="absolute inset-0rounded-half bg-opacity-5"></div>
                          <div
                            className="overflow-hidden flex-shrink-0 rounded-half !w-full !h-full bg-white"
                            style={{ width: "90px", height: "90px" }}
                          >
                            <img
                              alt="Martin Ferretti AREINZ"
                              loading="lazy"
                              width="90"
                              height="90"
                              decoding="async"
                              data-nimg="1"
                              className="w-full h-full block object-cover object-[center_top] rounded-full"
                              src="https://s.oneroof.co.nz/image/1a/20/1a207604e243a23adcb4dd133e12744f.jpg?x-oss-process=image/quality,q_80/resize,w_256/format,webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="w-32 h-32 flex items-center justify-center text-primary disabled:opacity-40 disabled:pointer-events-none AgentsCarousel-agent-next">
                      <i className="icon font-bold !text-xl icon-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <div className="text-lg text-center mt-10 mb-16">
                  <a target="_blank" href="/agent/martin-ferretti-areinz-87144">
                    Martin Ferretti AREINZ
                  </a>
                </div>
                <div className="text-sm text-center">
                  <div>Austar Realty Ltd (Licensed REAA 2008) </div>
                  <div> Ray White Blockhouse Bay</div>
                </div>
                <button
                  className="button-orange w-full mt-20 !h-48 !text-base"
                  data-noprogress="true"
                >
                  Enquire
                </button>
              </div>
            </div>
            <div className="sm:hidden">
              <div className="flex items-center gap-x-4">
                <span className="text-xl font-medium">Open Homes</span>
                <span className="-translate-y-1/4 bg-secondary min-w-[20px] h-20 rounded-half flex items-center justify-center text-sm text-white">
                  1
                </span>
              </div>
              <div className="mt-16">
                <div className="relative">
                  <div className="swiper swiper-initialized swiper-horizontal">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide !w-auto">
                        <div className="border rounded-sm">
                          <div className="p-14">
                            <div className="text-base font-normal">
                              Sat, 15 Feb
                            </div>
                            <div className="text-sm whitespace-nowrap">
                              01:30PM - 02:00PM
                            </div>
                          </div>
                          <div className="px-14 py-8 border-t">
                            <button className="button-text-primary !text-sm">
                              + Add to planner
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute z-[1]  rounded-half bg-white shadow-md items-center justify-center cursor-pointer top-1/2 translate-y-[-50%] w-48 h-48 hidden lg:flex right-0 translate-x-[40%]">
                    <i className="icon icon-arrow-right text-primary !text-2xl"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:hidden">
              <div className="flex items-center gap-x-4">
                <span className="text-xl font-medium">Auction</span>
                <span className="-translate-y-1/4 bg-secondary min-w-[20px] h-20 rounded-half flex items-center justify-center text-sm text-white">
                  1
                </span>
              </div>
              <div className="mt-16">
                <div className="relative">
                  <div className="swiper swiper-initialized swiper-horizontal">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide !w-auto">
                        <div className="border rounded-sm">
                          <div className="p-14">
                            <div className="text-base font-normal">
                              Sat, 15 Feb
                            </div>
                            <div className="text-sm whitespace-nowrap">
                              02:00PM
                            </div>
                          </div>
                          <div className="px-14 py-8 border-t">
                            <button className="button-text-primary !text-sm">
                              + Add to planner
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute z-[1]  rounded-half bg-white shadow-md items-center justify-center cursor-pointer top-1/2 translate-y-[-50%] w-48 h-48 hidden lg:flex right-0 translate-x-[40%]">
                    <i className="icon icon-arrow-right text-primary !text-2xl"></i>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-black text-xl">I am interested in</div>
              <div className="mt-8">
                <label className="cursor-pointer h-46 border rounded-sm flex items-center justify-between pl-10 pr-6 sm:pl-20 mt-8 sm:mt-12 first:mt-0 hover:border-primary">
                  <span className="text-primary text-md sm:text-base">
                    Learning more about this property.
                  </span>
                  <button className="button-text-primary ml-auto flex items-center justify-center">
                    <div className="mr-10 w-0 h-0 overflow-hidden">
                      <div className="transition-opacity duration-1000 bg-opacity-10 grid place-items-center rounded-[100px] bg-[#17A11A] text-[#17A11A] opacity-0 w-90 h-32">
                        Sent
                      </div>
                      <div className="transition-opacity duration-1000 bg-opacity-10 grid place-items-center rounded-[100px] bg-[#485695] text-primary opacity-0 w-0 h-0 overflow-hidden">
                        ask more
                      </div>
                    </div>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M34 18c0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16C2 9.163 9.163 2 18 2c8.836 0 16 7.163 16 16z"
                          stroke="#D9D9D9"
                          stroke-width="0"
                          stroke-dasharray="113.097"
                        ></path>
                        <path
                          d="M34 18c0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16C2 9.163 9.163 2 18 2c8.836 0 16 7.163 16 16z"
                          stroke="#17A11A"
                          stroke-width="0"
                          stroke-dasharray="113.097"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            from="113.097"
                            to="0"
                            dur="3s"
                            repeatCount="1"
                            begin="indefinite"
                          ></animate>
                        </path>
                        <path
                          d="M20.876 15.124l-5.94 4.124-6.213-2.072a1.058 1.058 0 0 1 .01-2.01l15.885-5.115a1.059 1.059 0 0 1 1.331 1.331l-5.115 15.885a1.057 1.057 0 0 1-2.01.01l-2.082-6.244 4.134-5.91z"
                          fill="#485696"
                          fill-rule="nonzero"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </label>
                <label className="cursor-pointer h-46 border rounded-sm flex items-center justify-between pl-10 pr-6 sm:pl-20 mt-8 sm:mt-12 first:mt-0 hover:border-primary">
                  <span className="text-primary text-md sm:text-base">
                    Seeking a price indication.
                  </span>
                  <button className="button-text-primary ml-auto flex items-center justify-center">
                    <div className="mr-10 w-0 h-0 overflow-hidden">
                      <div className="transition-opacity duration-1000 bg-opacity-10 grid place-items-center rounded-[100px] bg-[#17A11A] text-[#17A11A] opacity-0 w-90 h-32">
                        Sent
                      </div>
                      <div className="transition-opacity duration-1000 bg-opacity-10 grid place-items-center rounded-[100px] bg-[#485695] text-primary opacity-0 w-0 h-0 overflow-hidden">
                        ask more
                      </div>
                    </div>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M34 18c0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16C2 9.163 9.163 2 18 2c8.836 0 16 7.163 16 16z"
                          stroke="#D9D9D9"
                          stroke-width="0"
                          stroke-dasharray="113.097"
                        ></path>
                        <path
                          d="M34 18c0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16C2 9.163 9.163 2 18 2c8.836 0 16 7.163 16 16z"
                          stroke="#17A11A"
                          stroke-width="0"
                          stroke-dasharray="113.097"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            from="113.097"
                            to="0"
                            dur="3s"
                            repeatCount="1"
                            begin="indefinite"
                          ></animate>
                        </path>
                        <path
                          d="M20.876 15.124l-5.94 4.124-6.213-2.072a1.058 1.058 0 0 1 .01-2.01l15.885-5.115a1.059 1.059 0 0 1 1.331 1.331l-5.115 15.885a1.057 1.057 0 0 1-2.01.01l-2.082-6.244 4.134-5.91z"
                          fill="#485696"
                          fill-rule="nonzero"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </label>
                <label className="cursor-pointer h-46 border rounded-sm flex items-center justify-between pl-10 pr-6 sm:pl-20 mt-8 sm:mt-12 first:mt-0 hover:border-primary">
                  <span className="text-primary text-md sm:text-base">
                    Arranging a private viewing.
                  </span>
                  <button className="button-text-primary ml-auto flex items-center justify-center">
                    <div className="mr-10 w-0 h-0 overflow-hidden">
                      <div className="transition-opacity duration-1000 bg-opacity-10 grid place-items-center rounded-[100px] bg-[#17A11A] text-[#17A11A] opacity-0 w-90 h-32">
                        Sent
                      </div>
                      <div className="transition-opacity duration-1000 bg-opacity-10 grid place-items-center rounded-[100px] bg-[#485695] text-primary opacity-0 w-0 h-0 overflow-hidden">
                        ask more
                      </div>
                    </div>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M34 18c0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16C2 9.163 9.163 2 18 2c8.836 0 16 7.163 16 16z"
                          stroke="#D9D9D9"
                          stroke-width="0"
                          stroke-dasharray="113.097"
                        ></path>
                        <path
                          d="M34 18c0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16C2 9.163 9.163 2 18 2c8.836 0 16 7.163 16 16z"
                          stroke="#17A11A"
                          stroke-width="0"
                          stroke-dasharray="113.097"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            from="113.097"
                            to="0"
                            dur="3s"
                            repeatCount="1"
                            begin="indefinite"
                          ></animate>
                        </path>
                        <path
                          d="M20.876 15.124l-5.94 4.124-6.213-2.072a1.058 1.058 0 0 1 .01-2.01l15.885-5.115a1.059 1.059 0 0 1 1.331 1.331l-5.115 15.885a1.057 1.057 0 0 1-2.01.01l-2.082-6.244 4.134-5.91z"
                          fill="#485696"
                          fill-rule="nonzero"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </label>
                <div
                  className="relative flex justify-center opacity-0 transition-opacity duration-1000 pointer-events-none z-[1]"
                  id="contact-agent-success1"
                >
                  <div className="h-48 flex items-center gap-x-8 px-30 bg-white shadow-md rounded-md text-sm absolute top-24">
                    <span className="w-18 h-18 bg-[#17A11A] rounded-half grid place-items-center">
                      <i className="icon icon-correct text-white !text-xs font-bold"></i>
                    </span>
                    An agent will be in touch shortly.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-black text-xl">Got a property to sell?</div>
              <div className="mt-8">
                <label className="cursor-pointer h-46 border rounded-sm flex items-center justify-between pl-10 pr-6 sm:pl-20 mt-8 sm:mt-12 first:mt-0 hover:border-primary">
                  <span className="text-primary text-md sm:text-base">
                    Get a free appraisal
                  </span>
                  <button className="button-text-primary ml-auto flex items-center justify-center">
                    <div className="mr-10 w-0 h-0 overflow-hidden">
                      <div className="transition-opacity duration-1000 bg-opacity-10 grid place-items-center rounded-[100px] bg-[#17A11A] text-[#17A11A] opacity-0 w-90 h-32">
                        Sent
                      </div>
                      <div className="transition-opacity duration-1000 bg-opacity-10 grid place-items-center rounded-[100px] bg-[#485695] text-primary opacity-0 w-0 h-0 overflow-hidden">
                        ask more
                      </div>
                    </div>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M34 18c0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16C2 9.163 9.163 2 18 2c8.836 0 16 7.163 16 16z"
                          stroke="#D9D9D9"
                          stroke-width="0"
                          stroke-dasharray="113.097"
                        ></path>
                        <path
                          d="M34 18c0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16C2 9.163 9.163 2 18 2c8.836 0 16 7.163 16 16z"
                          stroke="#17A11A"
                          stroke-width="0"
                          stroke-dasharray="113.097"
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            from="113.097"
                            to="0"
                            dur="3s"
                            repeatCount="1"
                            begin="indefinite"
                          ></animate>
                        </path>
                        <path
                          d="M20.876 15.124l-5.94 4.124-6.213-2.072a1.058 1.058 0 0 1 .01-2.01l15.885-5.115a1.059 1.059 0 0 1 1.331 1.331l-5.115 15.885a1.057 1.057 0 0 1-2.01.01l-2.082-6.244 4.134-5.91z"
                          fill="#485696"
                          fill-rule="nonzero"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </label>
                <div
                  className="relative flex justify-center opacity-0 transition-opacity duration-1000 pointer-events-none z-[1]"
                  id="contact-agent-success2"
                >
                  <div className="h-48 flex items-center gap-x-8 px-30 bg-white shadow-md rounded-md text-sm absolute top-24">
                    <span className="w-18 h-18 bg-[#17A11A] rounded-half grid place-items-center">
                      <i className="icon icon-correct text-white !text-xs font-bold"></i>
                    </span>
                    An agent will be in touch shortly.
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>
      <DetailDialog ref={dialogRef} />
    </>
  );
}
