import React, { useState, useEffect } from 'react';
import {BarChart,Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell} from 'recharts';

// Define the shape of your data
interface researchFieldData {
    key: string; // This will map to "display_name" on the x-axis
    key_display_name: string; // This will map to the bar's value
    count: number; // This will map to the bar's value
}

const ResearchTypeData: React.FC = () => {
    const [data, setData] = useState<researchFieldData[]>([]); // State to hold chart data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch data from the backend
    const fetchingData = async () => {
        try {
            const response = await fetch("http://localhost:8000/publication/bygroup/byType", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const apiData = await response.json();
            console.log('API Response-languages:', apiData);

            // Transform API data to match the chart format
            interface ApiResult {
                key: string;
                key_display_name: string;
                count: number;
            }

            const transformedData = apiData.group_by.map((item: ApiResult) => ({
                key: item.key,
                key_display_name: item.key_display_name,
                count: item.count
            }));
            console.log('transformedData:-------', transformedData);

            setData(transformedData);

        } catch (err) {
            setError(err instanceof Error ? err.message : "Unknown error occurred");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchingData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: ---{error}</div>;

    const COLORS = ["#2d8bba", "#2f5f98", "#31356e", "#82a093"];

    return (
        <div style={{ width: "80%", height: 400, margin: "0 auto" }}>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="display_name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8">
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                    <Bar dataKey="cited_by_count" fill="#82ca9d">
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ResearchTypeData;
