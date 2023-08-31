import React from "react";
import AreaChart from "./Graphics/AreaChart";
import { UpLineIcon } from "../utils/Icons";

const GainsGraphic = () => {
  const labels = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Dicembre",
  ];

  const datasets = [
    {
      fill: true,
      label: "Ganancias",
      data: [
        567, 1550, 400, 2500, 4450, 3260, 5600, 3560, 2890, 7560, 8960, 7245,
      ],
      borderColor: "#2dc464",
      backgroundColor: "#25D6AF",
    },
  ];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  return (
    <>
      <div className="w-[310px] sm:w-auto lg:w-auto lg:h-[350px] shadow-sm border-2 p-8 bg-white rounded-xl flex flex-col items-center justify-center">
        <div className="flex gap-2 items-center">
          <UpLineIcon className="w-6 h-6 text-green-500" />
          <h3 className="font-bold">Ganancias durante el año</h3>
        </div>
        <AreaChart labels={labels} datasets={datasets} options={options} />
      </div>
    </>
  );
};

export default GainsGraphic;
