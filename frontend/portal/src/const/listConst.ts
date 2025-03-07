import type { MenuProps } from "antd";

export const PRICE_OPT: MenuProps["items"] = [
  {
    label: "< $500,000",
    key: "1",
  },
  {
    label: "$500,000 - $1,000,000",
    key: "2",
  },
  {
    label: "$1,000,000 - $2,000,000",
    key: "3",
  },
  {
    label: "> $2,000,000",
    key: "4",
  },
];
export const BEDS_OPT: MenuProps["items"] = [
  {
    label: "1",
    key: "1",
  },
  {
    label: "2",
    key: "2",
  },
  {
    label: "3",
    key: "3",
  },
  {
    label: "4",
    key: "4",
  },
  {
    label: "5+",
    key: "5",
  },
];
export const PROP_TYPE_OPT = [
  {
    label: "House",
    key: "1",
  },
  {
    label: "Apartment",
    key: "2",
  },
  {
    label: "Studio",
    key: "3",
  },
  {
    label: "Townhouse",
    key: "4",
  },
  {
    label: "Unit",
    key: "5",
  },
];
