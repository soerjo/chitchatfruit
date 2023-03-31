import React from "react";
import Container from "../common/Container";
import Image from "next/image";

const phone_number = "6287841598516";

const CustomParcelComp = () => {
  return (
    <Container>
      <div className="relative w-full h-full overflow-hidden rounded-[8px] ">
        <Image
          src="/images/background/bg_01.png"
          alt="bg_01"
          className="object-cover h-[418px] w-full"
          width={557}
          height={418}
        />
        <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-end items-center px-[24px]">
          <div className="bg-white w-[557px] p-[24px] flex flex-col gap-4">
            <h2 className="font-lexend font-semibold text-[32px] leading-none text-left">
              Mau Custom Parcel? Bisa!
            </h2>
            <p className="text-hijau-army">
              Bersama chitchatfruit, Kamu bisa kreasikan isi parcelmu sendiri,
              ekslusif hanya untuk kamu dan orang tersayangmu!
            </p>
            <a
              href={`https://api.whatsapp.com/send?phone=${phone_number}`}
              target="_blank"
            >
              <div className="bg-merah hover:bg-merah-200 rounded-[8px] py-[14px] px-[58px] text-putih font-medium text-center">
                Hubungi Kami
              </div>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CustomParcelComp;
