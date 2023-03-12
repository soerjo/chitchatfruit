import React from "react";
import CardComp, { CardCompProps } from "../common/Card";
import Container from "../common/Container";

const dummyProductData: CardCompProps[] = [
  {
    title: "Hampers Lebaran",
    description: "Rayakan Lebaran mu dengan hampers spesial dari kami",
    price: 70000,
    img: "/images/product/product_01.png",
  },
  {
    title: "Hampers Lebaran",
    description: "Rayakan Lebaran mu dengan hampers spesial dari kami",
    price: 70000,
    img: "/images/product/product_01.png",
  },
  {
    title: "Hampers Lebaran",
    description: "Rayakan Lebaran mu dengan hampers spesial dari kami",
    price: 70000,
    img: "/images/product/product_01.png",
  },
  {
    title: "Hampers Lebaran",
    description: "Rayakan Lebaran mu dengan hampers spesial dari kami",
    price: 70000,
    img: "/images/product/product_01.png",
  },
  {
    title: "Hampers Lebaran",
    description: "Rayakan Lebaran mu dengan hampers spesial dari kami",
    price: 70000,
    img: "/images/product/product_01.png",
  },
];

const ParcelSpecialComp = () => {
  return (
    <Container>
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-[32px] mb-[93px]">Pilih Parcel Specialmu</h2>
        <div className="w-full flex gap-4">
          <img src="/logos/left_button.svg" />
          <div className="flex flex-row gap-4 w-full py-4 overflow-hidden">
            {dummyProductData.map((data, index) => (
              <CardComp
                key={index}
                title={data.title}
                description={data.description}
                price={data.price}
                img={data.img}
              />
            ))}
          </div>
          <img src="/logos/right_button.svg" />
        </div>
        <div className="w-full flex gap-4">
          <img src="/logos/left_button.svg" />
          <div className="flex flex-row gap-4 w-full py-4 overflow-hidden">
            {dummyProductData.map((data, index) => (
              <CardComp
                key={index}
                title={data.title}
                description={data.description}
                price={data.price}
                img={data.img}
              />
            ))}
          </div>
          <img src="/logos/right_button.svg" />
        </div>
      </div>
    </Container>
  );
};

export default ParcelSpecialComp;
