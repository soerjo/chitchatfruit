import React from "react";
import axios from "axios";

import { Button, Modal } from "flowbite-react";
import { dataProductInterface } from "@/pages/dashboard/product";

export interface updateHeaderBannerCompInterface {
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  data: dataProductInterface;
  isShow: boolean;
  fetchDat: () => Promise<void>;
}

const UpdateProduct: React.FC<updateHeaderBannerCompInterface> = ({
  setClose,
  data,
  isShow,
  fetchDat,
}) => {
  const [productdata, setProductdata] = React.useState<dataProductInterface>(
    {} as dataProductInterface
  );
  const [fileImage, setfileImage] = React.useState<any>();

  const fetchProduct = async () => {
    if (!productdata.index) return;
    try {
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      const formData = new FormData();
      formData.append("gambar", fileImage);
      formData.append("title", productdata.title);
      formData.append("type", productdata.type);
      formData.append("description", productdata.description);
      formData.append("price", String(productdata.price));

      await axios.put(`/api/product/${productdata.index}`, formData, config);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCreateProduct = async () => {
    try {
      console.log("create product!");
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      const formData = new FormData();
      formData.append("gambar", fileImage);
      formData.append("title", productdata.title);
      formData.append("type", productdata.type);
      formData.append("description", productdata.description);
      formData.append("price", String(productdata.price));

      await axios.post(`/api/product/`, formData, config);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    productdata.index && (await fetchProduct());
    !productdata.index && (await fetchCreateProduct());
    await fetchDat();
    setClose(false);
  };

  const handleAddPict = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]?.type.match(/png|jpeg|jpg/)) {
      setProductdata({
        ...productdata,
        src: URL.createObjectURL(e.target.files[0]),
      });
      setfileImage(e.target.files[0]);
    }
  };

  React.useEffect(() => {
    setProductdata(data);
    setfileImage("");
    !isShow && setProductdata({} as dataProductInterface);
  }, [isShow]);

  console.log({ productdata });

  return (
    <>
      <Modal.Header>Product</Modal.Header>
      <Modal.Body>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="font-inter font-medium text-[14px] capitalize"
            >
              title
            </label>
            <input
              type="text"
              id="title"
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setProductdata({
                  ...productdata,
                  title: e.currentTarget?.value,
                });
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="please insert your title..."
              value={productdata.title || ""}
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="type"
              className="font-inter font-medium text-[14px] capitalize"
            >
              type
            </label>
            <input
              type="text"
              id="type"
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                setProductdata({
                  ...productdata,
                  type: e.currentTarget.value,
                })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="please insert your type..."
              value={productdata?.type || ""}
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="font-inter font-medium text-[14px] capitalize"
            >
              description
            </label>
            <textarea
              rows={5}
              id="description"
              onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                setProductdata({
                  ...productdata,
                  description: e.currentTarget.value,
                })
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="please insert your description..."
              value={productdata?.description || ""}
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="harga"
              className="font-inter font-medium text-[14px] capitalize"
            >
              harga
            </label>
            <input
              type="number"
              id="harga"
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setProductdata({
                  ...productdata,
                  price: Number(e.currentTarget.value) || undefined,
                });
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="please insert your harga..."
              value={productdata?.price || ""}
              required
            />
          </div>
          <div className="mt-4 relative flex flex-col w-full h-full border-4 border-dashed hover:bg-gray-100  hover:border-gray-300 rounded-[8px]">
            {productdata?.src && (
              <div className="absolute flex items-center z-20 top-0 right-0 m-1 cursor-pointer">
                <div
                  id="delete"
                  onClick={() => {
                    setProductdata({ ...productdata, src: "" });
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929L10.5858 12L7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289C7.68342 6.90237 8.31658 6.90237 8.70711 7.29289L12 10.5858L15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711L13.4142 12L16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L12 13.4142L8.70711 16.7071C8.31658 17.0976 7.68342 17.0976 7.29289 16.7071Z"
                      fill="red"
                    />
                  </svg>
                </div>
              </div>
            )}
            <label className="w-full min-h-[250px] h-full flex justify-center items-center">
              <div className="flex w-full h-full items-center justify-center">
                {productdata?.src ? (
                  <div
                    className={`w-full aspect-h-1 bg-gray-100 bg-opacity-30 rounded-lg overflow-hidden`}
                  >
                    <img
                      src={productdata?.src || ""}
                      alt="of the author"
                      // layout="fill"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center fill-slate-500">
                    <h1>upload gambar...</h1>
                    <p className="text-gray-500">*click disini</p>
                  </div>
                )}
              </div>
              <input
                accept="image/png, image/jpeg"
                id="upload"
                type="file"
                className="opacity-0 hidden"
                onChange={(e) => handleAddPict(e)}
                multiple={false}
              />
            </label>
          </div>
          <Button className="w-full" type="submit">
            I accept
          </Button>
        </form>
      </Modal.Body>
    </>
  );
};

export default UpdateProduct;
