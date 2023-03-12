import React from "react";
import Button from "../common/Button";
import Container from "../common/Container";

const CustomParcelComp = () => {
  return (
    <Container>
      <div className="relative w-full h-full overflow-hidden rounded-[8px] ">
        <img
          src="/images/background/bg_01.jpg"
          alt="bg_01"
          className="object-cover"
        />
        <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-end items-center px-[24px]">
          <div className="bg-white w-[272px] p-[24px] flex flex-col gap-4">
            <h2 className="text-[32px] leading-none text-left">
              Mau Custom Parcel? Bisa!
            </h2>
            <p className="text-hijau-army">
              Bersama chitchatfruit, Kamu bisa kreasikan isi parcelmu sendiri,
              ekslusif hanya untuk kamu dan orang tersayangmu!
            </p>
            <button className="bg-merah hover:bg-merah-200 rounded-[8px] py-[14px] px-[58px] text-putih font-medium">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CustomParcelComp;
