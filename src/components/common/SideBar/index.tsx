import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";

const menus = [
  {
    icons: "/logos/menu_pict.svg",
    title: "Hero Image",
    link: "/dashboard/hero-image",
  },
  {
    icons: "/logos/menu_product.svg",
    title: "Product",
    link: "/dashboard/product",
  },
];

const SideBarComp: React.FC = () => {
  const { push } = useRouter();

  const handleLogOut = () => {
    localStorage.clear();
    deleteCookie("token");
    push("/logout");
  };

  return (
    <div className="relative w-[250px] h-screen p-3 border-r-2 border-gray-100">
      <Link href={"/dashboard"}>
        <h1 className="font-poppins font-extrabold text-[24px] text-[#1A0864] my-4">
          chitchatfruit
        </h1>
      </Link>
      <div>
        {menus.map((data, index) => (
          <Link
            href={data.link}
            className="flex gap-4 p-4 hover:bg-[#1A086430] rounded-[8px]"
            key={index}
          >
            <img src={data.icons} alt="icon-menu" className="text-black" />
            <h3>{data.title}</h3>
          </Link>
        ))}
      </div>
      <div
        onClick={handleLogOut}
        className="absolute bottom-0 right-0 left-0 flex gap-4 p-4 hover:bg-[#1A086430] rounded-[8px] hover:cursor-pointer m-3"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.2 13C16.477 13 16.6155 13 16.7278 13.0615C16.8204 13.1122 16.9065 13.2075 16.9478 13.3047C16.9978 13.4225 16.9852 13.5479 16.96 13.7987C16.8296 15.0987 16.3822 16.3514 15.6518 17.4445C14.7727 18.7601 13.5233 19.7855 12.0615 20.391C10.5997 20.9965 8.99113 21.155 7.43928 20.8463C5.88743 20.5376 4.46197 19.7757 3.34315 18.6568C2.22433 17.538 1.4624 16.1126 1.15372 14.5607C0.84504 13.0089 1.00347 11.4003 1.60897 9.93852C2.21447 8.47671 3.23985 7.22728 4.55544 6.34823C5.64856 5.61783 6.90125 5.17039 8.20131 5.03995C8.45207 5.01479 8.57745 5.00221 8.69528 5.0522C8.79249 5.09344 8.88776 5.17964 8.9385 5.27224C9 5.38449 9 5.52299 9 5.79999V12.2C9 12.48 9 12.62 9.0545 12.727C9.10244 12.8211 9.17893 12.8976 9.27301 12.9455C9.37996 13 9.51998 13 9.8 13H16.2Z"
            stroke="#0A0A0A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 1.79999C13 1.52298 13 1.38448 13.0615 1.27223C13.1122 1.17963 13.2075 1.09344 13.3047 1.0522C13.4225 1.0022 13.5479 1.01478 13.7987 1.03993C15.6271 1.22333 17.346 2.03229 18.6569 3.34313C19.9677 4.65398 20.7767 6.37289 20.9601 8.20129C20.9852 8.45206 20.9978 8.57744 20.9478 8.69527C20.9066 8.79248 20.8204 8.88774 20.7278 8.93848C20.6155 8.99998 20.477 8.99999 20.2 8.99999L13.8 8.99999C13.52 8.99999 13.38 8.99999 13.273 8.94549C13.1789 8.89755 13.1024 8.82106 13.0545 8.72698C13 8.62003 13 8.48001 13 8.19999V1.79999Z"
            stroke="#0A0A0A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3>Log Out</h3>
      </div>
    </div>
  );
};

export default SideBarComp;
