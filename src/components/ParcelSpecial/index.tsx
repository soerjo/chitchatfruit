import axios from "axios";
import React from "react";
import CardComp, { CardCompProps } from "../common/Card";
import Container from "../common/Container";

const ParcelSpecialComp = () => {
  const [dummyProductData, setdummyProductData] = React.useState<Array<any>>(
    []
  );

  const fetchProduct = async () => {
    try {
      const res = await axios.get("/api/product");
      setdummyProductData(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    const controller = new AbortController();
    fetchProduct();

    return () => controller.abort();
  }, []);

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
                img={data.src}
              />
            ))}
          </div>
          <img src="/logos/right_button.svg" />
        </div>
        {/* <div className="w-full flex gap-4">
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
        </div> */}
      </div>
    </Container>
  );
};

export default ParcelSpecialComp;
