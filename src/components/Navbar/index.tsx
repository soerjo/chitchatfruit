import React from "react";
import { Navbar } from "flowbite-react";
import Button from "../common/Button";

const NavbarComp = () => {
  return (
    <>
      <Navbar className="fixed z-50 w-full bg-white h-[85px] flex justify-center items-center">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-normal dark:text-white text-[24px] font-candal">
            <img src="/logos/main_logo.svg" />
          </span>
        </Navbar.Brand>
        <Button>Contact Us</Button>
      </Navbar>
      <div className="w-full h-[85px]" />
    </>
  );
};

export default NavbarComp;
