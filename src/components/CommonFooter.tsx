import cfStyles from "./CommonFooter.module.css";
import { DownOutlined } from "@ant-design/icons";
export default function CF() {
  return (
    <footer className="bg-font text-white py-24 sm:py-48 min-w-0">
      <div className={cfStyles.sectionWrap}>
        <section className="flex items-center justify-between">
          <a className="flex-shrink-0" aria-label="go to homepage" href="/">
            <img
              alt="logo"
              loading="lazy"
              width="133"
              height="24"
              decoding="async"
              data-nimg="1"
              className="pointer-events-none w-133 h-24"
              src="https://assets.oneroof.co.nz/rebuild/aws/20250131091306/_next/static/media/logo-mobile.a7a42637.svg"
            />
          </a>
          <div className="grid grid-cols-[repeat(2,auto)] gap-x-16 items-center">
            <div className="grid grid-cols-[repeat(3,auto)] gap-x-8">
              <a
                className="hidden sm:block"
                target="_blank"
                rel="noreferrer"
                aria-label="go to instagram"
                href="https://www.instagram.com/oneroofnz/"
              >
                <i className="icon icon-instagram text-white !text-2xl"></i>
              </a>
              <a
                className="hidden sm:block"
                target="_blank"
                rel="noreferrer"
                aria-label="go to facebook"
                href="https://www.facebook.com/oneroofpropertynz"
              >
                <i className="icon icon-facebook text-white !text-2xl"></i>
              </a>
              <a
                className="hidden sm:block"
                target="_blank"
                rel="noreferrer"
                aria-label="go to linkedin"
                href="https://www.linkedin.com/company/oneroofnz"
              >
                <i className="icon icon-linkedin text-white !text-2xl"></i>
              </a>
            </div>
            <div className="grid-cols-[repeat(3,auto)] gap-x-16 sm:grid">
              <a
                className="hidden sm:block"
                target="_blank"
                rel="noreferrer"
                aria-label="download apple app"
                href="https://apps.apple.com/nz/app/oneroof/id1336312690"
              >
                <img
                  alt="download apple app"
                  loading="lazy"
                  width="129"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  src="https://assets.oneroof.co.nz/rebuild/aws/20250131091306/_next/static/media/download-ios.1c499fee.webp"
                />
              </a>
              <a
                className="hidden sm:block"
                target="_blank"
                rel="noreferrer"
                aria-label="download android app"
                href="https://play.google.com/store/apps/details?id=com.nzme.oneroof&amp;hl=en"
              >
                <img
                  alt="download android app"
                  loading="lazy"
                  width="129"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  src="https://assets.oneroof.co.nz/rebuild/aws/20250131091306/_next/static/media/download-android.43e17aad.webp"
                />
              </a>
              <a
                className="hidden sm:block !block"
                target="_blank"
                rel="noreferrer"
                aria-label="go to nzme website"
                href="https://www.nzme.co.nz/"
              >
                <img
                  alt="powered by nzme"
                  loading="lazy"
                  width="79"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  src="https://assets.oneroof.co.nz/rebuild/aws/20250131091306/_next/static/media/powered-by.0d6922c1.webp"
                />
              </a>
            </div>
          </div>
        </section>
        <section className="grid gap-y-4 mt-28 sm:mt-56 sm:justify-between sm:grid-cols-[repeat(5,auto)]">
          <div>
            <div className="flex items-center justify-between py-6">
              <span className="text-neutral text-sm sm:text-xl">Listings</span>
              <i className="icon text-neutral icon-arrow-down !text-sm transition-transform sm:hidden"></i>
              <span className="sm:hidden">
                <DownOutlined />
              </span>
            </div>
            <div
              className="transition-[height] overflow-hidden sm:overflow-visible sm:!h-auto"
              style={{ height: 0 }}
            >
              <div>
                <div className="pt-12">
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_northland-34_page_1"
                  >
                    Northland
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_auckland-35_page_1"
                  >
                    Auckland
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_bay-of-plenty-37_page_1"
                  >
                    Bay of Plenty
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_waikato-36_page_1"
                  >
                    Waikato
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_coromandel-48_page_1"
                  >
                    Coromandel
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_gisborne-region-38_page_1"
                  >
                    Gisborne Region
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_central-north-island-55_page_1"
                  >
                    Central North Island
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_hawke-s-bay-39_page_1"
                  >
                    Hawke’s Bay
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_taranaki-40_page_1"
                  >
                    Taranaki
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_manawatu-whanganui-56_page_1"
                  >
                    Manawatu/Whanganui
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between py-6 hidden sm:flex">
              <span className="text-neutral text-sm sm:text-xl">&nbsp;</span>
              <i className="icon text-neutral icon-arrow-down !text-sm transition-transform sm:hidden"></i>
            </div>
            <div
              className="transition-[height] overflow-hidden sm:overflow-visible sm:!h-auto"
              style={{ height: 0 }}
            >
              <div>
                <div className="pt-12">
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_wairarapa-52_page_1"
                  >
                    Wairarapa
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_wellington-42_page_1"
                  >
                    Wellington
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_marlborough-51_page_1"
                  >
                    Marlborough
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_nelson-bays-43_page_1"
                  >
                    Nelson Bays
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_west-coast-44_page_1"
                  >
                    West Coast
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_canterbury-45_page_1"
                  >
                    Canterbury
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_central-otago-lakes-district-50_page_1"
                  >
                    Central Otago/Lakes District
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_otago-46_page_1"
                  >
                    Otago
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_southland-47_page_1"
                  >
                    Southland
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_pacific-islands-54_page_1"
                  >
                    Pacific Islands
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between py-6">
              <span className="text-neutral text-sm sm:text-xl">Explore</span>
              <i className="icon text-neutral icon-arrow-down !text-sm transition-transform sm:hidden"></i>
            </div>
            <div
              className="transition-[height] overflow-hidden sm:overflow-visible sm:!h-auto"
              style={{ height: 0 }}
            >
              <div>
                <div className="pt-12">
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-sale/region_all-new-zealand-1_page_1"
                  >
                    Residential for sale
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/houses-for-rent/region_all-new-zealand-1_page_1"
                  >
                    Residential for rent
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/estimate/map/region_all-new-zealand-1"
                  >
                    Property estimates
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/sold/region_all-new-zealand-1_page_1"
                  >
                    Sold properties
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/commercial-property-for-sale/region_all-new-zealand-1_page_1"
                  >
                    Commercial for sale
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/commercial-property-for-lease/region_all-new-zealand-1_page_1"
                  >
                    Commercial for lease
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/businesses-for-sale/region_all-new-zealand-1_page_1"
                  >
                    Businesses for sale
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/find-an-agent"
                  >
                    Find an agent
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/search/rural/region_all-new-zealand-1_page_1"
                  >
                    Rural properties
                  </a>
                  <a className="block text-sm mt-12 first:mt-0" href="/news">
                    News
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between py-6">
              <span className="text-neutral text-sm sm:text-xl">Account</span>
              <i className="icon text-neutral icon-arrow-down !text-sm transition-transform sm:hidden"></i>
            </div>
            <div
              className="transition-[height] overflow-hidden sm:overflow-visible sm:!h-auto"
              style={{ height: 0 }}
            >
              <div>
                <div className="pt-12">
                  <a className="block text-sm mt-12 first:mt-0" href="/profile">
                    Profile
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/profile/lists"
                  >
                    Saved properties
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/profile/saved-search"
                  >
                    Saved searches
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/profile/journey"
                  >
                    Open homes planner
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="/profile/notification"
                  >
                    Manage notifications
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between py-6">
              <span className="text-neutral text-sm sm:text-xl">
                Contact us
              </span>
              <i className="icon text-neutral icon-arrow-down !text-sm transition-transform sm:hidden"></i>
            </div>
            <div
              className="transition-[height] overflow-hidden sm:overflow-visible sm:!h-auto"
              style={{ height: 0 }}
            >
              <div>
                <div className="pt-12">
                  <div className="block text-sm mt-12 first:mt-0 sm:max-w-164">
                    Private Bag 92198, Victoria St West, Auckland 1142, New
                    Zealand
                  </div>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="mailto:support@oneroof.zendesk.com"
                  >
                    Contact OneRoof support
                  </a>
                  <a
                    className="block text-sm mt-12 first:mt-0"
                    href="mailto:sales@oneroof.co.nz"
                  >
                    Contact OneRoof sales
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-12 sm:hidden">
          <div className="grid items-center justify-start gap-x-8 grid-cols-[repeat(2,auto)]">
            <a
              className="hidden sm:block !block"
              target="_blank"
              rel="noreferrer"
              aria-label="download apple app"
              href="https://apps.apple.com/nz/app/oneroof/id1336312690"
            >
              <img
                alt="download apple app"
                loading="lazy"
                width="129"
                height="40"
                decoding="async"
                data-nimg="1"
                src="https://assets.oneroof.co.nz/rebuild/aws/20250131091306/_next/static/media/download-ios.1c499fee.webp"
              />
            </a>
            <a
              className="hidden sm:block !block"
              target="_blank"
              rel="noreferrer"
              aria-label="download android app"
              href="https://play.google.com/store/apps/details?id=com.nzme.oneroof&amp;hl=en"
            >
              <img
                alt="download android app"
                loading="lazy"
                width="129"
                height="40"
                decoding="async"
                data-nimg="1"
                src="https://assets.oneroof.co.nz/rebuild/aws/20250131091306/_next/static/media/download-android.43e17aad.webp"
              />
            </a>
          </div>
          <div className="grid items-center justify-start gap-x-8 mt-16 grid-cols-[repeat(3,auto)]">
            <a
              className="hidden sm:block !block"
              target="_blank"
              rel="noreferrer"
              aria-label="go to instagram"
              href="https://www.instagram.com/oneroofnz/"
            >
              <i className="icon icon-instagram text-white !text-2xl"></i>
            </a>
            <a
              className="hidden sm:block !block"
              target="_blank"
              rel="noreferrer"
              aria-label="go to facebook"
              href="https://www.facebook.com/oneroofpropertynz"
            >
              <i className="icon icon-facebook text-white !text-2xl"></i>
            </a>
            <a
              className="hidden sm:block !block"
              target="_blank"
              rel="noreferrer"
              aria-label="go to linkedin"
              href="https://www.linkedin.com/company/oneroofnz"
            >
              <i className="icon icon-linkedin text-white !text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="mt-40 flex flex-wrap sm:items-center sm:mt-72">
          <span className="inline-block px-8 py-2 text-xs text-neutral sm:text-sm sm:flex-1">
            © OneRoof Limited
          </span>
          <a
            className="inline-block px-8 py-2 text-xs text-neutral sm:text-sm"
            target="_blank"
            href="/real-estate"
          >
            About us
          </a>
          <a
            className="inline-block px-8 py-2 text-xs text-neutral sm:text-sm"
            target="_blank"
            href="/privacy-policy"
          >
            Privacy Policy
          </a>
          <a
            className="inline-block px-8 py-2 text-xs text-neutral sm:text-sm"
            target="_blank"
            href="/disclaimer"
          >
            Terms &amp; Conditions
          </a>
          <a
            className="inline-block px-8 py-2 text-xs text-neutral sm:text-sm"
            target="_blank"
            href="/user-terms"
          >
            User terms
          </a>
          <a
            className="inline-block px-8 py-2 text-xs text-neutral sm:text-sm"
            target="_blank"
            href="/faq"
          >
            FAQs
          </a>
          <a
            className="inline-block px-8 py-2 text-xs text-neutral sm:text-sm"
            id="shielded-logo"
            target="_blank"
            data-noprogress="true"
            href="#"
          >
            <img
              alt="shielded"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              src="https://shielded.co.nz/img/custom-logo.png?w=48"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
