import { Carousel } from "flowbite-react";
import React from "react";

const dummyData = [
  {
    name: "fruits",
    src: "/images/carousel/fruits_00.png",
    alt: "fruits_00",
  },
  {
    name: "fruits",
    src: "/images/carousel/fruits_01.jpg",
    alt: "fruits_01",
  },
  {
    name: "fruits",
    src: "/images/carousel/fruits_02.jpg",
    alt: "fruits_02",
  },
  {
    name: "fruits",
    src: "/images/carousel/fruits_03.jpg",
    alt: "fruits_03",
  },
  {
    name: "fruits",
    src: "/images/carousel/fruits_04.png",
    alt: "fruits_04",
  },
];

const Hero = () => {
  return (
    <div className="h-[640px] sm:h-[640px] xl:h-[640px] 2xl:h-[640px]">
      <Carousel slideInterval={5000}>
        {dummyData.map((data, index) => (
          <img
            src={data.src}
            alt={data.alt}
            key={index}
            className="object-cover bg-red-300 h-full w-full"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
