"use client";

import { useEffect, useState } from "react";
import timer from "@/util/timer";

interface AlgorithmProps {
  className?: string;
  data: any[];
  target: string;
  type: string;
}

export default function FindRecursiveAlgorithm({
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

  const sequentialSearchRecursive = (
    data: [string, number][],
    target: string,
    index: number = 0
  ): number => {
    // Base case: if the index exceeds array length or match is found
    if (index >= data.length) return -1;
    if (data[index][0].toLowerCase() === target.toLowerCase()) return index;
    // Recursive call
    return sequentialSearchRecursive(data, target, index + 1);
  };

  const timedSequentialSearch = timer(sequentialSearchRecursive);

  const handleSearch = () => {
    if (!target) {
      setResult("Please enter a country name!");
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
        setResult("Country not found");
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
          Execution Time (Recursively): {executionTime}
        </p>
      )}
    </div>
  );
}
