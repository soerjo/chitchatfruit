import React from "react";

const FooterComp = () => {
  return (
    <div className="w-full h-[251px] bg-neutral ">
      <div className="relative max-w-[1280px] m-auto h-full py-[23px] md:py-[34px]">
        <div className="px-[24px] md:px-[83px] flex flex-wrap">
          <div className="flex flex-1 flex-col ">
            <h3 className="font-candal text-[24px] mb-2">chitchatfruit.com</h3>
            <p className="text-[16px] leading-none">
              Parcel murah, first hand supplier, kesegaran terjamin
            </p>
          </div>
          <div className="flex flex-1 flex-col items-end justify-center h-full">
            <h4 className="mb-2 font-candal text-[16px]">Temukan kami di</h4>
            <div className="flex flex-row justify-end gap-4">
              <div className="bg-white w-[48px] h-[48px] flex justify-center items-center rounded-full">
                <a
                  href="https://www.instagram.com/chitchatfruit/?hl=en"
                  target={"_blank"}
                >
                  <img
                    className=" object-contain"
                    src="/logos/instagram.png"
                    alt="insta"
                  />
                </a>
              </div>
              <div className="bg-white w-[48px] h-[48px] flex justify-center items-center rounded-full">
                <a
                  href="https://www.tokopedia.com/chitchatfruit"
                  target={"_blank"}
                >
                  <img
                    className=" object-contain"
                    src="/logos/tokopedia.png"
                    alt="tokped"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 mx-auto w-full border-t-2 py-3">
          <p className="text-center">Copyright © {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
