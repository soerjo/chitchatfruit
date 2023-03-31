import React from "react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import Image from "next/image";

const dummyClientData = [
  "/logos/client/logo_01.png",
  "/logos/client/logo_02.png",
  "/logos/client/logo_03.png",
  "/logos/client/logo_04.png",
  "/logos/client/logo_05.png",
  "/logos/client/logo_06.png",
  "/logos/client/logo_07.png",
  "/logos/client/logo_08.png",
  "/logos/client/logo_09.png",
  "/logos/client/logo_10.png",
  "/logos/client/logo_11.png",
];

interface dimensionInterface {
  width: number | null;
  height: number | null;
}

const ClientComp = () => {
  return (
    <Container>
      <div className="w-full">
        <h2 className="font-lexend font-semibold text-[32px] text-center">
          Client Kami
        </h2>
        <div className="flex gap-4 overflow-hidden">
          <motion.div
            initial={{
              x: "0%",
            }}
            animate={{
              x: "-50%",
            }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex"
          >
            {dummyClientData.map((data, index) => (
              <div
                key={index}
                className="min-w-[252px] h-[161px] flex justify-center items-center"
              >
                <Image
                  src={data}
                  alt={`client-${index}`}
                  height={82}
                  width={200}
                />
              </div>
            ))}
            {dummyClientData.map((data, index) => (
              <div
                key={index}
                className="min-w-[252px] h-[161px] flex justify-center items-center"
              >
                <img src={data} alt={`client-${index}`} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default ClientComp;
