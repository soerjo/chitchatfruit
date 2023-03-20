import { GetServerSideProps, NextPage } from "next";
import { readFile } from "../../lib/readFileJson.lib";
import React from "react";
import Head from "next/head";
import SideBarComp from "@/components/common/SideBar";
import MainComp from "@/components/common/MainComp";
import { numberWithCommas } from "../../utils/thousandSaparator.util";
import { Table } from "flowbite-react";

interface dataInterface {
  TOKEN: string;
  USER: string;
  PASSWORD: string;
}

interface dataProductInterface {
  title: string;
  src: string;
  type: string;
  desc: string;
  price: number;
}

const dataDummy: Array<dataProductInterface> = [
  {
    title: "fruits",
    src: "/images/carousel/fruits_02.jpg",
    type: "keramik",
    desc: "rayakan sebuah description yang sangat panjang mungkin yang sangat panjang mungkinyang sangat panjang mungkin",
    price: 45000,
  },
  {
    title: "fruits",
    src: "/images/carousel/fruits_01.jpg",
    type: "buah",
    desc: "rayakan sebuah description yang sangat panjang mungkin yang sangat panjang mungkinyang sangat panjang mungkin",
    price: 45000,
  },
  {
    title: "fruits",
    src: "/images/carousel/fruits_03.jpg",
    type: "buah",
    desc: "rayakan sebuah description yang sangat panjang mungkin yang sangat panjang mungkinyang sangat panjang mungkin",
    price: 45000,
  },
  {
    title: "fruits",
    src: "/images/carousel/fruits_00.png",
    type: "snack",
    desc: "rayakan sebuah description yang sangat panjang mungkin yang sangat panjang mungkinyang sangat panjang mungkin",
    price: 45000,
  },
];

const ProductPage: NextPage<{ data: Array<dataProductInterface> }> = ({
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
          <MainComp title={"Product"} description={"Atur produk anda"}>
            <Table>
              <Table.Head>
                <Table.HeadCell className="text-center">Image</Table.HeadCell>
                <Table.HeadCell className="text-center">Title</Table.HeadCell>
                <Table.HeadCell className="text-center">Type</Table.HeadCell>
                <Table.HeadCell className="text-center">
                  Description
                </Table.HeadCell>
                <Table.HeadCell className="text-center">Harga</Table.HeadCell>
                <Table.HeadCell className="text-center">Action</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {data.map((data, index) => (
                  <Table.Row
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell>
                      <img
                        src={data.src}
                        alt={data.title}
                        className="h-[48px] w-full object-cover"
                      />
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
                      {data.title}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
                      {data.type}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center truncate max-w-[120px]">
                      {data.desc}
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
                      Rp {numberWithCommas(data.price)}
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

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const data = await readFile<dataInterface>("user.constant.json");

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
