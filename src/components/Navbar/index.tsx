import React from "react";
import Button from "../common/Button";
import Link from "next/link";

const phone_number = "6287841598516";

const NavbarComp = () => {
  return (
    <>
      <div className="fixed z-50 w-full bg-white h-[85px] flex justify-between items-center px-[24px]">
        <span className="self-center whitespace-nowrap text-xl font-normal dark:text-white text-[24px] font-candal">
          <img src="/logos/main_logo.svg" />
        </span>
        <Link
          href={`https://api.whatsapp.com/send?phone=${phone_number}`}
          target="_blank"
        >
          <Button>Contact Us</Button>
        </Link>
      </div>
      <div className="w-full h-[85px]" />
    </>
  );
};

export default NavbarComp;
