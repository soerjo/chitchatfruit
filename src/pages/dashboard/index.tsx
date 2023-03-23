import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import SideBarComp from "@/components/common/SideBar";
import MainComp from "@/components/common/MainComp";

import { Spinner, Table } from "flowbite-react";

import { readFile } from "../../lib/readFileJson.lib";
import ModalComp from "@/components/common/Modal";
import UpdateHeroBannerComp from "@/components/UpdateHeroBanner";
import axios from "axios";
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

const DashboardPage: NextPage<{ data: Array<dataHeroInterface> }> = ({
  data,
}) => {
  const [isShow, setisShow] = React.useState<boolean>(false);
  const [editPosition, seteditPosition] = React.useState<number | null>();
  const [newData, setnewData] = React.useState<Array<dataHeroInterface>>();

  const fetchHero = async () => {
    try {
      console.log("fetching ulang!");
      const response = await axios.get(`/api/hero`);
      setnewData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    const controller = new AbortController();

    !data && fetchHero();
    setnewData(data);

    return () => controller.abort();
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
        <div className="flex">
          <SideBarComp />
          <MainComp>
            <React.Fragment>
              <div className="w-full mb-8 flex justify-between">
                <div>
                  <h1 className="font-poppins text-[20px] font-semibold ">
                    HeroImage
                  </h1>
                  <p>Kostumisasi gambar pada halaman utama anda</p>
                </div>
              </div>

              <Table>
                <Table.Head>
                  <Table.HeadCell className="text-center">
                    Position
                  </Table.HeadCell>
                  <Table.HeadCell className="text-center">Image</Table.HeadCell>
                  <Table.HeadCell className="text-center">
                    Action
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {/* {!newData && <Spinner aria-label="Default status example" />} */}
                  {newData &&
                    newData.map((data, index) => (
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
                            <button
                              onClick={() => {
                                seteditPosition(data.position);
                                setisShow(true);
                              }}
                              className="bg-blue-600 px-4 py-2 rounded-[8px] text-white flex gap-3 justify-center items-center"
                            >
                              <img
                                src="/logos/edit_tombol.svg"
                                alt="edit_btn"
                              />
                              Edit
                            </button>
                            {/* <button className="bg-red-600 px-4 py-2 rounded-[8px] text-white flex gap-3 justify-center items-center">
                            <img
                              src="/logos/delete_tombol.svg"
                              alt="edit_btn"
                            />
                            Delete
                          </button> */}
                          </div>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                </Table.Body>
              </Table>
              <ModalComp isShow={isShow} setisShow={setisShow}>
                <UpdateHeroBannerComp
                  isShow={isShow}
                  setClose={setisShow}
                  data={data.filter((d) => d.position === editPosition)[0]}
                  fetchDat={fetchHero}
                />
              </ModalComp>
            </React.Fragment>
          </MainComp>
        </div>
      </main>
    </>
  );
};

export default DashboardPage;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const data = await readFile<dataInterface>("user.constant.json");
  const dataDummy = await readFile<Array<dataHeroInterface>>(
    "hero.constant.json"
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
