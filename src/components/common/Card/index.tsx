import { numberWithCommas } from "@/utils/thousandSaparator.util";
import React from "react";

export interface CardCompProps {
  title: string;
  description: string;
  price: number;
  img: string;
}

const CardComp: React.FC<CardCompProps> = (props) => {
  return (
    <div className="w-1/3  p-2">
      <div className="bg-white rounded-[8px] overflow-hidden shadow-md h-full border-[1px]">
        <img
          src={props.img}
          alt={props.title}
          className="w-full object-cover h-[150px]"
        />
        <div className="p-[20px]">
          <h4 className="font-inter text-[20px] font-semibold capitalize">
            {props.title}
          </h4>
          <p className="text-[14px] text-abu">{props.description}</p>
          <p className="font-medium text-[12px]">Mulai dari</p>
          <h4 className="font-bold text-[30px]">
            Rp {numberWithCommas(props.price)}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CardComp;
