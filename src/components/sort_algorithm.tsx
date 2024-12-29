"use client";

import React, { useEffect, useState } from "react";
import timer from "@/util/timer-sort";

interface AlgorithmProps {
  className?: string;
  data: [string, number][];
  order?: string;
  type?: string;
}

export default function SortAlgorithm({
  className = "",
  data = [],
  order = "asc",
  type = "Country",
}: AlgorithmProps) {
  const [datas] = useState<[string, number][]>(data);
  const [sortedData, setSortedData] = useState<[string, number][]>([]);
  const [executionTime, setExecutionTime] = useState<string | null>(null);

  useEffect(() => {
    sortData();
  }, [data, order, type]);

  const iterativeSort = (
    array: [string, number][],
    order: string
  ): [string, number][] => {
    const data = [...array];
    const n = data.length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        const comparison =
          order === "asc"
            ? data[j][0] > data[j + 1][0]
            : data[j][0] < data[j + 1][0];
        if (comparison) {
          [data[j], data[j + 1]] = [data[j + 1], data[j]];
        }
      }
    }
    return data;
  };

  const recursiveSort = (
    array: [string, number][],
    order: string
  ): [string, number][] => {
    if (array.length <= 1) {
      return array;
    }

    const pivot = array[0];
    const left = array
      .slice(1)
      .filter((item) =>
        order === "asc" ? item[0] <= pivot[0] : item[0] >= pivot[0]
      );
    const right = array
      .slice(1)
      .filter((item) =>
        order === "asc" ? item[0] > pivot[0] : item[0] < pivot[0]
      );

    return [
      ...recursiveSort(left, order),
      pivot,
      ...recursiveSort(right, order),
    ];
  };

  const sortData = () => {
    // const startTime = performance.now();

    // let sorted: [string, number][];

    // if (type === "Date") {
    //   sorted = [...datas].sort((a, b) => {
    //     const dateA = new Date(a[0]).getTime(); // Menggunakan elemen pertama sebagai tanggal
    //     const dateB = new Date(b[0]).getTime();
    //     return order === "asc" ? dateA - dateB : dateB - dateA;
    //   });
    // } else {
    //   sorted = [...datas].sort((a, b) => {
    //     const countryA = a[0].toLowerCase(); // Elemen pertama adalah nama negara
    //     const countryB = b[0].toLowerCase();
    //     if (countryA < countryB) return order === "asc" ? -1 : 1;
    //     if (countryA > countryB) return order === "asc" ? 1 : -1;
    //     return 0;
    //   });
    // }

    // const endTime = performance.now();

    // // Menghitung waktu eksekusi dalam milidetik
    // setExecutionTime(`${((endTime - startTime) * 1_000_000).toFixed(2)} ns`);
    // setSortedData(sorted);

    const iterativeWrapped = timer(() => iterativeSort(datas, order));
    const recursiveWrapped = timer(() => recursiveSort(datas, order));

    const iterativeResult = iterativeWrapped();
    const recursiveResult = recursiveWrapped();

    setSortedData(iterativeResult.result); // Misalnya, gunakan hasil iteratif sebagai default
    setExecutionTime(
      `Iterative: ${iterativeResult.time} ns, Recursive: ${recursiveResult.time} ns`
    );
  };

  return (
    <div
      className={`${className} flex flex-col items-center justify-start w-full`}
    >
      <div className="w-full text-center">
        <p className="mb-4 font-[family-name:var(--font-geist-sans)]">
          Execution Time: {executionTime}
        </p>
        <table border={4} className="table-auto w-full">
          <thead>
            <tr className="font-[family-name:var(--font-geist-sans)]">
              {type === "Country" ? <th>Country</th> : <th>Date</th>}
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map(([key, value], index) => (
              <tr
                key={index}
                className="font-[family-name:var(--font-geist-sans)]"
              >
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
