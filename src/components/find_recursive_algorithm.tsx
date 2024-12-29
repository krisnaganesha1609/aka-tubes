"use client";

import { useEffect, useState } from "react";
import timer from "@/util/timer";

interface AlgorithmProps {
  className?: string;
  data: any[];
  target: string;
}

export default function FindRecursiveAlgorithm({
  data = [],
  target = "",
}: AlgorithmProps) {
  const [countries] = useState<[string, number][]>(data);
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
          Execution Time (Recursively): {executionTime}
        </p>
      )}
    </div>
  );
}
