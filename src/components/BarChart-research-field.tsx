import React, { useState, useEffect } from 'react';
import {BarChart,Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell} from 'recharts';

// Define the shape of your data
interface researchFieldData {
    display_name: string; // This will map to "display_name" on the x-axis
    works_count: number; // This will map to the bar's value
    cited_by_count: number; // This will map to the bar's value
}

const ResearchFieldBarChart: React.FC = () => {
    const [data, setData] = useState<researchFieldData[]>([]); // State to hold chart data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch data from the backend
    const fetchingPopulationData = async () => {
        try {
            const response = await fetch("http://localhost:1945/publication/bygroup/research-field", {
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
                display_name: string;
                works_count: number;
                cited_by_count: number;
            }

            const transformedData = apiData.results.map((item: ApiResult) => ({
                display_name: item.display_name,
                works_count: item.works_count,
                cited_by_count: item.cited_by_count
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
        fetchingPopulationData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const COLORS = ["#2d8bba", "#2f5f98", "#31356e", "#82a093"];

    return (
        <div style={{ width: "80%", height: 500, margin: "0 auto" }}>
            <ResponsiveContainer>
                <BarChart data={data} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="display_name" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="works_count" fill="#8884d8">
                        {data.map((_, index) => (
                            <Cell key={`cell-wc-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                    <Bar dataKey="cited_by_count" fill="#82ca9d">
                        {data.map((_, index) => (
                            <Cell key={`cell-cbc-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ResearchFieldBarChart;
