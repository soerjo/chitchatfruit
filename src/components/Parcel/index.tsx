import React from "react";
import Container from "../common/Container";

const dummyMainProduct = [
  {
    title: "Percel Buah",
    img: "/images/parcel_01.png",
  },
  {
    title: "Percel Snack",
    img: "/images/parcel_02.png",
  },
  {
    title: "Percel Pecah Belah",
    img: "/images/parcel_03.png",
  },
];

const ParcelComp = () => {
  return (
    <Container>
      <div className="flex flex-wrap mt-12">
        <div className="flex w-full flex-1 flex-col gap-[15px] pb-[96px] md:pr-[49px]">
          <h2 className="font-normal text-[48px] leading-[48px] text-left">
            Kombinasikan Parcel dan Momen yang tepat
          </h2>
          <p className="text-[24px] leading-none ">
            chitchatfruit menyediakan 3 varian parcel untuk mu!
          </p>
        </div>
        <div className="flex w-full flex-1 flex-row gap-4 justify-start">
          {dummyMainProduct.map((data, index) => (
            <div className="w-full " key={index}>
              <img
                src={data.img}
                alt={data.title}
                className="w-full h-[178px] object-cover"
              />
              <div className="px-[8px]">
                <h3 className="mt-[12px] font-inter font-bold text-[24px] text-center leading-none">
                  {data.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ParcelComp;
