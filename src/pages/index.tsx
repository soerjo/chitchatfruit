import Hero from "@/components/Hero";
import NavbarComp from "@/components/Navbar";
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
      </main>
    </>
  );
}
