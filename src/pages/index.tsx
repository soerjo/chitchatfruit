import ClientComp from "@/components/Client";
import CustomParcelComp from "@/components/CustomParcel";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import FooterComp from "@/components/Footer";
import Hero, { HeroesInterface } from "@/components/Hero";
import KontakKamiComp from "@/components/KontakKami";
import NavbarComp from "@/components/Navbar";
import ParcelComp from "@/components/Parcel";
import ParcelSpecialComp, {
  productInterface,
} from "@/components/ParcelSpecial";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

interface HomePropsInterface {
  heroes: Array<HeroesInterface>;
  products: Array<productInterface>;
}

const Home: NextPage<HomePropsInterface> = ({ heroes, products }) => {
  return (
    <>
      <Head>
        <title>chitchatfruit</title>
        <meta
          name="description"
          content="Kreasikan parcel Anda untuk setiap momen spesial"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavbarComp />
        <Hero heroes={heroes} />
        <FloatingWhatsapp />
        <div className="max-w-[1280px] m-auto">
          <ParcelComp />
          <ParcelSpecialComp products={products} />
          <CustomParcelComp />
          <ClientComp />
          <KontakKamiComp />
        </div>
        <FooterComp />
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const resHero = await axios.get(`${process.env.FE_URL}/api/hero`);
    const heroes = resHero.data.data;

    const resProducts = await axios.get(`${process.env.FE_URL}/api/product`);
    const products = resProducts.data.data;

    return {
      props: { heroes, products },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { heroes: [], products: [] },
    };
  }
};
