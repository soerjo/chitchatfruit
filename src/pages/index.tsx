import ClientComp from "@/components/Client";
import CustomParcelComp from "@/components/CustomParcel";
import Hero from "@/components/Hero";
import NavbarComp from "@/components/Navbar";
import ParcelComp from "@/components/Parcel";
import ParcelSpecialComp from "@/components/ParcelSpecial";
import Head from "next/head";

export default function Home() {
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
        <Hero />
        <div className="max-w-[1280px] m-auto">
          <ParcelComp />
          <ParcelSpecialComp />
          <CustomParcelComp />
          <ClientComp />
        </div>
      </main>
    </>
  );
}
