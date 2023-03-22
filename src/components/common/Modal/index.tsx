import { Button, Modal } from "flowbite-react";
import React from "react";

export interface modalCompInterface {
  isShow: boolean;
  setisShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const ModalComp: React.FC<modalCompInterface> = ({
  isShow,
  setisShow,
  children,
}) => {
  const [isLoading, setisLoading] = React.useState<boolean>(false);

  const onClose = () => {
    setisShow(false);
  };

  React.useEffect(() => {
    setisLoading(true);
  }, []);

  return (
    <>
      {isLoading ? (
        <Modal show={isShow} onClose={onClose}>
          {children}
        </Modal>
      ) : null}
    </>
  );
};

export default ModalComp;
