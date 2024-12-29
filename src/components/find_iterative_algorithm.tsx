"use client";

import { useEffect, useState } from "react";
import timer from "@/util/timer";

interface AlgorithmProps {
  className?: string;
  data: any[];
  target: string;
  type: string;
}

export default function FindIterativeAlgorithm({
  className = "",
  data = [],
  target = "",
  type = "Country",
}: AlgorithmProps) {
  const [datas] = useState<[string, number][]>(data);
  const [result, setResult] = useState<string | null>(null);
  const [executionTime, setExecutionTime] = useState<string | null>(null);

  useEffect(() => {
    handleSearch();
  }, []);

  const sequentialIterativeSearch = (
    data: [string, number][],
    target: string
  ): number => {
    for (let i = 0; i < data.length; i++) {
      if (data[i][0].toLowerCase() === target.toLowerCase()) {
        return i; // Found the target country
      }
    }
    return -1; // Country not found
  };

  const timedSequentialSearch = timer(sequentialIterativeSearch);

  const handleSearch = () => {
    if (!target && type == "Country") {
      setResult("Please enter a country name!");
      return;
    }

    if (!target && type == "Date") {
      setResult("Please enter a date!");
      return;
    }

    // Call the wrapped function
    const { result: index, time } = timedSequentialSearch(datas, target);

    if (index !== -1) {
      if (type == "Country") {
        setResult(`Country: ${datas[index][0]}, Value: ${datas[index][1]}`);
      } else if (type == "Date") {
        setResult(`Date: ${datas[index][0]}, Value: ${datas[index][1]}`);
      }
    } else {
      if (type == "Country") {
        setResult("Country not found");
      } else if (type == "Date") {
        setResult("Date not found");
      }
    }

    // Set execution time
    setExecutionTime(`${time} ns`);
  };

  return (
    <div className={className}>
      {result && (
        <p className="text-xl font-[family-name:var(--font-geist-sans)]">
          {result}
        </p>
      )}
      {executionTime && (
        <p className="text-xl font-[family-name:var(--font-geist-sans)]">
          Execution Time (Iteratively): {executionTime}
        </p>
      )}
    </div>
  );
}
