import axios from "axios";
import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";

export interface HeroesInterface {
  position: number;
  alt: string;
  name: string;
  src: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface HeroPropsInterface {
  heroes: Array<HeroesInterface>;
}

const Hero: React.FC<HeroPropsInterface> = ({ heroes: dummyData }) => {
  // const [dummyData, setdummyData] = React.useState<Array<any>>([]);

  // const fetchHero = async () => {
  //   try {
  //     const res = await axios.get("/api/hero");
  //     setdummyData(res.data.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // React.useEffect(() => {
  //   const controller = new AbortController();
  //   fetchHero();

  //   return () => controller.abort();
  // }, []);

  return (
    <div className="h-[640px] sm:h-[640px] xl:h-[640px] 2xl:h-[640px]">
      <Carousel slideInterval={5000} indicators={false}>
        {dummyData &&
          dummyData
            .filter((d) => d.is_active !== false)
            .map((data, index) => {
              return (
                <Image
                  src={data.src}
                  alt={data.alt}
                  key={index}
                  className="object-cover h-full w-full"
                  width={720}
                  height={360}
                  loading="lazy"
                />
              );
            })}
      </Carousel>
    </div>
  );
};

export default Hero;
