import axios from "axios";
import React from "react";
import { Carousel } from "flowbite-react";

const Hero = () => {
  const [dummyData, setdummyData] = React.useState<Array<any>>([]);

  const fetchHero = async () => {
    try {
      const res = await axios.get("/api/hero");
      setdummyData(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    const controller = new AbortController();
    fetchHero();

    return () => controller.abort();
  }, []);

  return (
    <div className="h-[640px] sm:h-[640px] xl:h-[640px] 2xl:h-[640px]">
      <Carousel slideInterval={5000}>
        {dummyData
          .filter((d) => d.is_active !== false)
          .map((data, index) => {
            return (
              <img
                src={data.src}
                alt={data.alt}
                key={index}
                className="object-cover h-full w-full"
              />
            );
          })}
      </Carousel>
    </div>
  );
};

export default Hero;
