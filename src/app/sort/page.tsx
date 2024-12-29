"use client";

import React, { useState, useEffect } from 'react';

interface DataItem {
    id: number;
    country: string;
    date: string;
}

const SortPage: React.FC = () => {
    const [data, setData] = useState<DataItem[]>([]);
    const [sortedData, setSortedData] = useState<DataItem[]>([]);
    const [executionTime, setExecutionTime] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            const mockData: DataItem[] = [
                { id: 1, country: 'USA', date: '2024-12-01' },
                { id: 2, country: 'Japan', date: '2024-11-15' },
                { id: 3, country: 'Germany', date: '2024-10-30' },
                { id: 4, country: 'India', date: '2024-12-10' },
            ];
            setData(mockData);
        };

        fetchData();
    }, []);

    const sortData = (order: 'asc' | 'desc', sortBy: 'country' | 'date') => {
        const startTime = performance.now();

        const sorted = [...data].sort((a, b) => {
            if (sortBy === 'date') {
                const dateA = new Date(a.date).getTime();
                const dateB = new Date(b.date).getTime();
                return order === 'asc' ? dateA - dateB : dateB - dateA;
            } else {
                const countryA = a.country.toLowerCase();
                const countryB = b.country.toLowerCase();
                if (countryA < countryB) return order === 'asc' ? -1 : 1;
                if (countryA > countryB) return order === 'asc' ? 1 : -1;
                return 0;
            }
        });

        const endTime = performance.now();
        setExecutionTime(`${(endTime - startTime).toFixed(2)} ms`);
        setSortedData(sorted);
    };

    return (
        <div>
            <h1>Sort Data</h1>
            <button onClick={() => sortData('asc', 'date')}>Sort by Date Ascending</button>
            <button onClick={() => sortData('desc', 'date')}>Sort by Date Descending</button>
            <button onClick={() => sortData('asc', 'country')}>Sort by Country Ascending</button>
            <button onClick={() => sortData('desc', 'country')}>Sort by Country Descending</button>
            <p>Execution Time: {executionTime}</p>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Country</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.country}</td>
                            <td>{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SortPage;
