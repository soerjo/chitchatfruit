import React from "react";
import { Navbar } from "flowbite-react";
import Button from "../common/Button";

const NavbarComp = () => {
  return (
    <>
      <div className="fixed z-50 w-full bg-white h-[85px] flex justify-between items-center px-[24px]">
        <span className="self-center whitespace-nowrap text-xl font-normal dark:text-white text-[24px] font-candal">
          <img src="/logos/main_logo.svg" />
        </span>
        <Button>Contact Us</Button>
      </div>
      <div className="w-full h-[85px] bg-red-300" />
    </>
  );
};

export default NavbarComp;
