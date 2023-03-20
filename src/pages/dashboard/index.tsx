import { GetServerSideProps, NextPage } from "next";
import { readFile } from "../../lib/readFileJson.lib";
import React from "react";
import Head from "next/head";
import SideBarComp from "@/components/common/SideBar";
import MainComp from "@/components/common/MainComp";
import { Table } from "flowbite-react";

interface dataInterface {
  TOKEN: string;
  USER: string;
  PASSWORD: string;
}

interface dataHeroInterface {
  position: number;
  name: string;
  src: string;
  alt: string;
}

const dataDummy: Array<dataHeroInterface> = [
  {
    position: 1,
    name: "fruits",
    src: "/images/carousel/fruits_00.png",
    alt: "fruits_00",
  },
  {
    position: 2,
    name: "fruits",
    src: "/images/carousel/fruits_01.jpg",
    alt: "fruits_01",
  },
  {
    position: 3,
    name: "fruits",
    src: "/images/carousel/fruits_02.jpg",
    alt: "fruits_02",
  },
  {
    position: 4,
    name: "fruits",
    src: "/images/carousel/fruits_03.jpg",
    alt: "fruits_03",
  },
];

const DashboardPage: NextPage<{ data: Array<dataHeroInterface> }> = ({
  data,
}) => {
  return (
    <>
      <Head>
        <title>chitchatfruit | dashboard</title>
        <meta
          name="description"
          content="Kreasikan parcel Anda untuk setiap momen spesial"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex">
          <SideBarComp />
          <MainComp
            title={"HeroImage"}
            description={"Kostumisasi gambar pada halaman utama anda"}
          >
            <Table>
              <Table.Head>
                <Table.HeadCell className="text-center">
                  Position
                </Table.HeadCell>
                <Table.HeadCell className="text-center">Image</Table.HeadCell>
                <Table.HeadCell className="text-center">Action</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {data.map((data, index) => (
                  <Table.Row
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
                      {data.position}
                    </Table.Cell>
                    <Table.Cell>
                      <img
                        src={data.src}
                        alt={data.name}
                        className="h-[48px] w-full object-cover"
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex gap-4 justify-center items-center">
                        <button className="bg-blue-600 px-4 py-2 rounded-[8px] text-white flex gap-3 justify-center items-center">
                          <img src="/logos/edit_tombol.svg" alt="edit_btn" />
                          Edit
                        </button>
                        <button className="bg-red-600 px-4 py-2 rounded-[8px] text-white flex gap-3 justify-center items-center">
                          <img src="/logos/delete_tombol.svg" alt="edit_btn" />
                          Delete
                        </button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </MainComp>
        </div>
      </main>
    </>
  );
};

export default DashboardPage;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const data = await readFile<dataInterface>("user.constant.json");
  console.log({ cookie: req.cookies });

  if (data.TOKEN != req.cookies?.token) {
    return {
      redirect: {
        destination: "/login",
        permanent: true,
      },
    };
  }

  return {
    props: { data: dataDummy },
  };
};
