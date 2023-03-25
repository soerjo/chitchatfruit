import { GetServerSideProps, NextPage } from "next";
import { readFile } from "../../lib/readFileJson.lib";
import React from "react";
import Head from "next/head";
import SideBarComp from "@/components/common/SideBar";
import MainComp from "@/components/common/MainComp";
import { numberWithCommas } from "../../utils/thousandSaparator.util";
import { Table } from "flowbite-react";
import ModalComp from "@/components/common/Modal";
import UpdateProduct from "@/components/UpdateProduct";
import axios from "axios";

interface dataInterface {
  TOKEN: string;
  USER: string;
  PASSWORD: string;
}

export interface dataProductInterface {
  index: string;
  title: string;
  src: string;
  type: string;
  description: string;
  price: number | undefined;
}

const ProductPage: NextPage<{ data: Array<dataProductInterface> }> = ({
  data,
}) => {
  const [isShow, setisShow] = React.useState<boolean>(false);
  const [newData, setnewData] = React.useState<Array<dataProductInterface>>([]);
  const [currentData, setCurrentData] = React.useState<dataProductInterface>({
    index: "",
    title: "",
    description: "",
    type: "",
    price: 0,
    src: "",
  });

  const handleOnClick = (index: string) => {
    setCurrentData(newData.filter((d) => d.index === index)[0]);
    setisShow(true);
  };

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/api/product`);

      setnewData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDeleteProduct = async (index: string) => {
    try {
      await axios.delete(`/api/product/${index}`);

      fetchProduct();
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    setnewData(data);
  }, []);

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
        <div className="flex w-screen">
          <SideBarComp />
          <MainComp>
            <div className="w-full">
              <div className="w-full mb-8 flex justify-between items-center p-2">
                <div className="flex flex-col">
                  <h1 className="font-poppins text-[20px] font-semibold ">
                    Product
                  </h1>
                  <p>Atur produk anda</p>
                </div>
                <button
                  onClick={() => {
                    setCurrentData({} as dataProductInterface);
                    setisShow(true);
                  }}
                  className="bg-blue-600 px-4 w-[204px] py-3 text-sm font-medium rounded-[8px] text-white flex justify-center items-center"
                >
                  (+) Tambah
                </button>
              </div>

              <Table>
                <Table.Head>
                  <Table.HeadCell className="text-center">Image</Table.HeadCell>
                  <Table.HeadCell className="">Title</Table.HeadCell>
                  <Table.HeadCell className="text-center">Type</Table.HeadCell>
                  <Table.HeadCell className="text-center">
                    Description
                  </Table.HeadCell>
                  <Table.HeadCell className="text-center">Harga</Table.HeadCell>
                  <Table.HeadCell className="text-center">
                    Action
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {newData &&
                    newData.map((data, index) => (
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
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {data.title}
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
                          {data.type}
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center truncate max-w-[120px]">
                          {data.description}
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-center">
                          Rp {numberWithCommas(data.price || 0)}
                        </Table.Cell>
                        <Table.Cell>
                          <div className="flex gap-4 justify-center items-center">
                            <button
                              onClick={() => handleOnClick(data.index)}
                              className="bg-blue-600 px-5 py-2 rounded-[8px] text-white flex gap-2 justify-center items-center"
                            >
                              <img
                                src="/logos/edit_tombol.svg"
                                alt="edit_btn"
                              />
                              Edit
                            </button>
                            <button
                              onClick={() => fetchDeleteProduct(data.index)}
                              className="bg-red-600 px-5 py-2 rounded-[8px] text-white flex gap-2 justify-center items-center"
                            >
                              <img
                                src="/logos/delete_tombol.svg"
                                alt="edit_btn"
                              />
                              Delete
                            </button>
                          </div>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                </Table.Body>
              </Table>
              <ModalComp isShow={isShow} setisShow={setisShow}>
                <UpdateProduct
                  setClose={setisShow}
                  isShow={isShow}
                  data={currentData}
                  fetchDat={fetchProduct}
                />
              </ModalComp>
            </div>
          </MainComp>
        </div>
      </main>
    </>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const data = await readFile<dataInterface>("user.constant.json");
  const dataDummy = await readFile<Array<dataProductInterface>>(
    "product.constant.json"
  );

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
