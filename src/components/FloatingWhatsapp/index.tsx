import React from "react";
const phone_number = "087808295838";

const FloatingWhatsapp = () => {
  return (
    <div className="fixed bottom-0 right-0 md:mx-[24px] mx-[14px] md:my-[24px] my-[14px] w-[68px] md:w-auto z-50">
      <a href={`https://api.whatsapp.com/send?phone=${phone_number}`}>
        <img src="/logos/whatsapp_floating.svg" alt="whatsapp" />
      </a>
    </div>
  );
};

export default FloatingWhatsapp;
