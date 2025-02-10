"use client";
import Image from "next/image";
import { DownOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
export default function Detail() {
  const [hasFolded, setHasFolded] = useState(true);
  const contentRef = useRef(null);
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:h-[30vmin] xl:h-[50vmin] md:max-h-500 lg:min-h-[300px] md:grid-cols-[62.5%,1fr]">
        <div className="aspect-video min-h-0 relative md:aspect-auto cursor-pointer overflow-hidden">
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
                    src="/detail_icon/bed.svg"
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
          <aside className="space-y-20 md:space-y-36"></aside>
        </section>
      </div>
    </>
  );
}
