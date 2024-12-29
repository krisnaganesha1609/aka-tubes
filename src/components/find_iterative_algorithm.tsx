"use client";

import { useEffect, useState } from "react";
import timer from "@/util/timer";

interface AlgorithmProps {
  className?: string;
  data: any[];
  target: string;
}

export default function FindIterativeAlgorithm({
  data = [],
  target = "",
}: AlgorithmProps) {
  const [countries] = useState<[string, number][]>(data);
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
    if (!target) {
      setResult("Please enter a country name!");
      return;
    }

    // Call the wrapped function
    const { result: index, time } = timedSequentialSearch(countries, target);

    if (index !== -1) {
      setResult(
        `Country: ${countries[index][0]}, Value: ${countries[index][1]}`
      );
    } else {
      setResult("Country not found");
    }

    // Set execution time
    setExecutionTime(`${time} ns`);
  };

  return (
    <div>
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
