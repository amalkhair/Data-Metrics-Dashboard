import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import React, { useEffect, useState } from "react";

// Define the shape of your data
interface YearData {
    year: number; // X-axis (years)
    amount: number; // Y-axis (number of works or citations)
}

const YearLineChart: React.FC = () => {
    const [data, setData] = useState<YearData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch data from the backend
    const fetchYearData = async () => {
        try {
            const response = await fetch("http://127.0.0.1:1945/publication/by_year", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {

                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const apiData = await response.json();
            console.log('API Response-years:', apiData);

            interface ApiResult {
                year: number;
                amount: number

            }

            const transformedData = apiData.map((item: ApiResult) => ({
                year: item.year,
                amount: item.amount,
            }));

            console.log('Transformed Data:', transformedData);
            setData(transformedData);

        } catch (err) {
            setError(err instanceof Error ? err.message : "Unknown error occurred");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchYearData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="amount" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default YearLineChart;
