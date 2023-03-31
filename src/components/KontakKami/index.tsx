import React from "react";
import Container from "../common/Container";
import Image from "next/image";

const dummyKontak = [
  {
    title: "Head Office Bogor",
    icon: "/logos/flat_place.svg",
    desc: "Jl. Raya Cikaret No.16, RT.002/RW.013, Pakansari, Kec. Cibinong, Kabupaten Bogor, Jawa Barat 16915",
  },
  {
    title: "Branch Office Jakarta",
    icon: "/logos/flat_place.svg",
    desc: "Jl. Assyafi'iyah No.75, RT.1/RW.5, Cilangkap, Kec. Cipayung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13870",
  },
  {
    title: "Phone",
    icon: "/logos/flat_phone.svg",
    desc: "+62 812-9547-6702",
  },
  {
    title: "Instagram",
    icon: "/logos/flat_instagram.svg",
    desc: "Chitchatfruit",
  },
  {
    title: "Whatsapp",
    icon: "/logos/flat_whatsapp.svg",
    desc: "+62 878-4159-8516",
  },
  {
    title: "Tokopedia",
    icon: "/logos/flat_tokopedia.svg",
    desc: "Chitchatfruit",
  },
];

const KontakKamiComp = () => {
  return (
    <Container>
      <div className="flex md:flex-row flex-col w-full h-fit bg-kuning rounded-[8px] overflow-hidden">
        <div className="flex flex-1 w-full">
          <Image
            src="/images/background/bg_02.png"
            alt="background"
            className="object-cover w-full h-full"
            width={545}
            height={434}
          />
        </div>
        <div className="flex flex-1 flex-col justify-center items-center">
          <div className="mx-[48px] my-[24px]">
            <h3 className="font-candal text-[32px]">Kontak Kami</h3>
            <ul className="flex flex-wrap gap-2 ">
              {dummyKontak.map((data, index) => (
                <li key={index} className="w-full ">
                  <div>
                    <p className="mb-[2px] font-bold">{data.title}</p>
                    <div className="flex flex-row justify-start items-start gap-4">
                      <img
                        src={data.icon}
                        alt="icon"
                        className="w-[14px] mt-1"
                      />
                      <p className="text-hijau-army text-[16px]">{data.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default KontakKamiComp;
