import axios, { AxiosError } from "axios";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const [username, setusername] = React.useState<String>("");
  const [password, setpassword] = React.useState<String>("");

  const [globalErr, setglobalErr] = React.useState<String>("");

  const { push } = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { username, password });
      localStorage.setItem("token", response?.data?.token);
      localStorage.setItem("username", response?.data?.username);
    } catch (error) {
      if (error instanceof AxiosError) {
        setglobalErr(error.response?.data?.error);
      }
      return;
    }

    push("/dashboard");
  };

  return (
    <>
      <Head>
        <title>chitchatfruit | login</title>
        <meta
          name="description"
          content="Kreasikan parcel Anda untuk setiap momen spesial"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex justify-center items-center h-screen w-screen px-4">
          <div className="w-[500px] flex flex-col gap-2">
            <h2 className="font-inter font-bold text-[24px]">Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm text-gray-900 dark:text-white font-inter font-medium text-[14px]"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setusername(e.currentTarget.value)
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="please insert your username..."
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="font-inter font-medium text-[14px]"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setpassword(e.currentTarget.value)
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="please insert your password..."
                  required
                />
              </div>

              {globalErr && (
                <p className="text-red-400 text-[14px] text-center">
                  {globalErr}
                </p>
              )}

              <button
                type="submit"
                className="bg-[#1A56DB] rounded-[8px] p-[14px] text-white"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
