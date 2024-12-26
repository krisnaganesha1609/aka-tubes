"use client";

import React from "react";
import {
  Chart as ch,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ch.register(
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ChartProps {
  className?: string;
  title?: string;
  labels: string[];
  datasets: any[];
  maxY?: number;
}

export default function MyCharts({
  className = "",
  title = "View Data",
  labels = [],
  datasets = [],
  maxY = 1000,
}: ChartProps) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: datasets,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
        ],
        borderWidth: 1,
        barPercentage: 1,
        borderRadius: {
          topLeft: 5,
          topRight: 5,
        },
      },
    ],
  };

  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: "Y-Axis",
        },
        display: true,
        beginAtZero: true,
        max: maxY,
      },
      x: {
        title: {
          display: true,
          text: "X-Axis",
        },
        display: true,
      },
    },
  };
  return (
    <div className={className} style={{ width: "1000px" }}>
      <Bar data={data} options={options} />
    </div>
  );
}
