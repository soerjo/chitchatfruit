import { readFile } from "@/lib/readFileJson.lib";
import { GetServerSideProps } from "next";

interface dataInterface {
  TOKEN: string;
  USER: string;
  PASSWORD: string;
}

const HeroPage = () => {
  return <div>hero page</div>;
};

export default HeroPage;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const data = await readFile<dataInterface>("user.constant.json");
  // console.log({ cookie: req.cookies });

  if (data.TOKEN != req.cookies?.token) {
    return {
      redirect: {
        destination: "/login",
        permanent: true,
      },
    };
  }

  return {
    redirect: {
      destination: "/dashboard",
      permanent: true,
    },
  };
};
