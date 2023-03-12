import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="px-[24px] py-[64px] md:px-[83px] md:py-[64px]">
      {children}
    </div>
  );
};

export default Container;
