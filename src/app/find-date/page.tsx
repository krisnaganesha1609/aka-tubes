"use client";

import React, { useState, useEffect } from 'react';

interface DataItem {
    id: number;
    country: string;
    date: string;
}

const FindPage: React.FC = () => {
    const [data, setData] = useState<DataItem[]>([]);
    const [filteredData, setFilteredData] = useState<DataItem[]>([]);
    const [searchDate, setSearchDate] = useState('');
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

    const findByDate = () => {
        const startTime = performance.now();
        const result = data.filter(item => item.date === searchDate);
        const endTime = performance.now();
        setExecutionTime(`${(endTime - startTime).toFixed(2)} ms`);
        setFilteredData(result);
    };

    return (
        <div>
            <h1>Find by Date</h1>
            <input
                type="date"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
            />
            <button onClick={findByDate}>Find</button>
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
                    {filteredData.map(item => (
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

export default FindPage;
