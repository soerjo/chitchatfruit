import axios from "axios";
import React from "react";
import CardComp from "../common/Card";
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
        <h2 className="text-[32px] mb-[93px] font-candal text-center">
          Pilih Parcel Spesialmu
        </h2>
        {/* <Carousel slideInterval={5000} indicators={false}>
          {dummyProductData.map((data, index) => (
            <CardComp
              key={index}
              title={data.title}
              description={data.description}
              price={data.price}
              img={data.src}
            />
          ))}
        </Carousel> */}

        <div className="w-full flex gap-4">
          {/* <div className="bg-coklat hover:bg-coklat-dark cursor-pointer h-[40px] w-[45px]  my-auto rounded-full flex justify-center items-center">
            <svg
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49996 12.8333L1.66663 6.99996L7.49996 1.16663"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div> */}
          <div className="flex flex-wrap w-full h-full">
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
          {/* <div className="bg-coklat hover:bg-coklat-dark cursor-pointer h-[40px] w-[45px]  my-auto rounded-full flex justify-center items-center">
            <svg
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.16663L7.33333 6.99996L1.5 12.8333"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div> */}
        </div>
      </div>
    </Container>
  );
};

export default ParcelSpecialComp;
