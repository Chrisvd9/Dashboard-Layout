import React from "react";
import BarChart from "./Graphics/BarChart";
import { DolarIcon } from "../utils/Icons";

const LostAndGainsGraphic = () => {
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
      label: "Ganancias",
      data: [
        567, 1550, 400, 2500, 4450, 3260, 5600, 3560, 2890, 7560, 8960, 7245,
      ],
      backgroundColor: "#386B8F",
    },
    {
      label: "Pérdidas",
      data: [
        1000, 1000, 500, 500, 1500, 2000, 3100, 2189, 1450, 3609, 2450, 3450,
      ],
      backgroundColor: "#4D3E6C",
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
          <DolarIcon className="w-6 h-6 text-green-500" />
          <h3 className="font-bold">Ganancias y pérdidas durante el año</h3>
        </div>
        <BarChart labels={labels} datasets={datasets} options={options} />
      </div>
    </>
  );
};

export default LostAndGainsGraphic;
