import React from "react";
import { Navbar } from "flowbite-react";
import Button from "../common/Button";

const NavbarComp = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-[24px] font-candal">
          chitchatfruit.com
        </span>
      </Navbar.Brand>
      <Button>Contact Us</Button>
    </Navbar>
  );
};

export default NavbarComp;
