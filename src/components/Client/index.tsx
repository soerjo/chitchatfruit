import React from "react";
import Container from "../common/Container";

const dummyClientData = [
  "/logos/client/logo_01.png",
  "/logos/client/logo_02.png",
  "/logos/client/logo_03.png",
  "/logos/client/logo_04.png",
  "/logos/client/logo_05.png",
];

const ClientComp = () => {
  return (
    <Container>
      <div className="w-full">
        <h2 className="font-candal text-[32px] text-center">Client Kami</h2>
        <div className="flex gap-4 overflow-y-auto">
          {dummyClientData.map((data, index) => (
            <div
              key={index}
              className="min-w-[252px] h-[161px] flex justify-center items-center"
            >
              <img src={data} alt={`client-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ClientComp;
