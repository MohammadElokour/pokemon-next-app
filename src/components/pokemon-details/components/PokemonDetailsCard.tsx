"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import TypeBadge from "./TypeBadge";
import ReactApexChart from "react-apexcharts";
import { Pokemon } from "@src/types/pokemon";
import Loader from "@src/components/loader";

const PokemonDetailsCard = ({ pokemonData }: { pokemonData: Pokemon }) => {
  const { name, sprites, types, stats, weight, height } = pokemonData;
  const pokemonImgSrc = sprites.front_default ?? "/pokeball.png";
  const type1Color = types[0].type.name;
  const type2Color = types.length > 1 ? types[1].type.name : type1Color;
  const type1Name = type1Color;
  const type2Name = types.length > 1 ? types[1].type.name : null;
  const bgGradient = `bg-gradient-to-r from-${type1Color} to-${type2Color}`;
  const baseStatsValues = stats.map((stat) => stat.base_stat);
  const weightInKg = weight / 10;
  const heightInMeters = height / 10;
  const chartData = {
    series: [
      {
        name: "Base Stat",
        data: baseStatsValues,
      },
    ],
    options: {
      chart: {
        id: "pokemon-stats-chart",
      },
      fill: {
        opacity: 0.4,
        colors: ["#6890f0"],
      },
      yaxis: {
        show: false,
      },
      xaxis: {
        labels: {
          minHeight: 120,
          style: {
            colors: [
              "#ff5959",
              "#f08030",
              "#f8d030",
              "#6890f0",
              "#78c850",
              "#f85888",
            ],
            fontSize: "14px",
            fontWeight: "bold",
          },
        },
        categories: [
          "HP",
          "Attack",
          "Defense",
          "Sp. Defense",
          "Sp. Attack",
          "Speed",
        ],
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: undefined,
        formatter: function (val: any, opts: any) {
          return val;
        },
        distributed: false,
        offsetX: -2,
        offsetY: 5,
        style: {
          fontSize: "14px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: "bold",
          colors: undefined,
        },
        background: {
          enabled: true,
          foreColor: "#fff",
          padding: 5,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#fff",
          opacity: 0.7,
          dropShadow: {
            enabled: false,
            top: 1,
            left: 1,
            blur: 1,
            color: "#000",
            opacity: 0.45,
          },
        },
        dropShadow: {
          enabled: false,
          top: 1,
          left: 1,
          blur: 1,
          color: "#000",
          opacity: 0.45,
        },
      },
    },
  };

  return (
    <div
      className={`${bgGradient} p-5 w-full flex flex-col items-center justify-between min-h-[200px] bg-opacity-85 rounded-2xl z-0 pb-16 sm:pb-24`}
    >
      <div className="w-full flex  justify-between items-center gap-1">
        <TypeBadge typeName={type1Name} />
        <p className="text-center mt-3.5 sm:mt-0 text-xl sm:text-4xl uppercase text-nowrap overflow-hidden text-ellipsis max-w-fit text-white font-bold tracking-wider">
          {name}
        </p>
        {type2Name ? (
          <TypeBadge typeName={type2Name} />
        ) : (
          <div className="invisible">
            <TypeBadge typeName={type1Name} />
          </div>
        )}
      </div>
      <div className="flex items-center flex-col sm:flex-row gap-5">
        <div className="flex flex-col text-center justify-center">
          <Image
            className="w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] self-center"
            src={pokemonImgSrc}
            width={300}
            height={300}
            alt={`image of ${name}`}
          />
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 sm:-mt-3">
            <thead className="text-xs text-gray-300 uppercase bg-gray-700 bg-opacity-75">
              <tr>
                <th scope="col" className="px-6 py-3 text-center rounded-tl-xl">
                  Weight (kg)
                </th>
                <th scope="col" className="px-6 py-3 text-center rounded-tr-xl">
                  Height (m)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-gray-300 bg-gray-800 bg-opacity-80">
                <td className="px-6 py-4 text-center rounded-bl-xl">
                  {weightInKg}
                </td>
                <td className="px-6 py-4 text-center rounded-br-xl">
                  {heightInMeters}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="scale-75 -mt-12 sm:scale-100 sm:mt-0">
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="radar"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsCard;
