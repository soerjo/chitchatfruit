import { GetServerSideProps } from "next";
import { serialize } from "cookie";
import React from "react";

const logout = () => {
  return <div>logout</div>;
};

export default logout;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader("Set-Cookie", [
    serialize("token", "", {
      maxAge: -1,
      path: "/",
    }),
  ]);

  return {
    redirect: {
      destination: "/",
      permanent: true,
    },
  };
};
