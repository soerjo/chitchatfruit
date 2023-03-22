import { Button, Modal } from "flowbite-react";
import React from "react";

export interface updateHeaderBannerCompInterface {
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
  isShow: boolean;
  data?: any;
}

const UpdateHeroBannerComp: React.FC<updateHeaderBannerCompInterface> = ({
  setClose,
  isShow,
  data,
}) => {
  const [file, setfile] = React.useState<string | undefined>();

  const onSubmit = () => {
    setClose(false);
  };

  const handleAddPict = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]?.type.match(/png|jpeg|jpg/)) {
      setfile(URL.createObjectURL(e.target.files[0]));
    }
  };

  React.useEffect(() => {
    setfile(data?.src ? data?.src : undefined);
  }, [isShow]);

  return (
    <>
      <Modal.Header>Terms of Service</Modal.Header>
      <Modal.Body>
        <div className="mt-4 relative flex flex-col w-full h-full border-4 border-dashed hover:bg-gray-100  hover:border-gray-300 rounded-[8px]">
          {file && (
            <div className="absolute flex items-center z-20 top-0 right-0 m-1 cursor-pointer">
              <div
                id="delete"
                onClick={() => {
                  setfile(undefined);
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
              {file ? (
                <div
                  className={`w-full aspect-h-1 bg-gray-100 bg-opacity-30 rounded-lg overflow-hidden`}
                >
                  <img
                    src={file}
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
        </div>{" "}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onSubmit}>I accept</Button>
      </Modal.Footer>
    </>
  );
};

export default UpdateHeroBannerComp;
