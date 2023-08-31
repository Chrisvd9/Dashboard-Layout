import React from "react";
import PieChart from "./Graphics/PieChart";
import { PresentationChartIcon } from "../utils/Icons";

const TotalAndInversion = () => {
  const data = {
    labels: ["Total ganado", "Total inversiòn"],
    dataValues: [82, 28],
    backgroundColors: ["#63D3FB", "#F96B5B"],
    borderColors: ["#5c9afd", "#fc6868"],
  };
  return (
    <>
      <div className="w-[310px] sm:w-auto lg:w-auto lg:h-[350px] shadow-sm border-2 p-8 bg-white rounded-xl flex flex-col items-center justify-center">
        <div className="flex gap-2 items-center">
          <PresentationChartIcon className="w-6 h-6 text-blue-500" />
          <h3 className="font-bold">Total</h3>
        </div>
        <PieChart {...data} />
      </div>
    </>
  );
};

export default TotalAndInversion;
