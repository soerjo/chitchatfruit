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
      <div className="flex flex-col md:flex-row">
        <div className="flex w-full md;w-1/3 flex-col gap-[15px] pb-[96px] md:pr-[49px]">
          <h2 className="font-normal text-[48px] leading-[48px] text-left">
            Kombinasikan Parcel dan Momen yang tepat
          </h2>
          <p className="text-[24px] leading-none ">
            chitchatfruit menyediakan 3 varian parcel untuk mu!
          </p>
        </div>
        <div className="flex w-full md:w-2/3 flex-row gap-4 justify-between md:justify-end">
          {dummyMainProduct.map((data, index) => (
            <div className="w-[161px]" key={index}>
              <img
                src={data.img}
                alt={data.title}
                className="w-[161px] h-[178px] object-cover"
              />
              <div className="px-[8px]">
                <h3 className="mt-[24px] font-inter font-bold text-[24px] text-center leading-none">
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
