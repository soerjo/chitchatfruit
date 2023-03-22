import React from "react";

interface MainCompInterface {
  title?: String;
  description?: String;
  children?: React.ReactNode;
}

const MainComp: React.FC<MainCompInterface> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="w-full p-[24px]">
      <div className="w-full mb-8">
        {title && (
          <h1 className="font-poppins text-[20px] font-semibold ">{title}</h1>
        )}
        {description && <p>{description}</p>}
      </div>
      {children}
    </div>
  );
};

export default MainComp;
