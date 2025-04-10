import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Define the shape of your data
interface LicenseData {
    display_name: string;
    works_count: number;
    cited_by_count: number;
}

const LicensePieChart: React.FC = () => {
    const [data, setData] = useState<LicenseData[]>([]); // State to hold chart data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch data from the backend
    const fetchingPopulationData = async () => {
        try {
            const response = await fetch("http://localhost:1945/publication/bygroup/license", {
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
        <div style={{ width: "60%", height: 400, margin: "0 auto" }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={110}
                        fill="#8884d8"
                        dataKey="works_count"
                        nameKey="display_name"
                        label
                    >
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default  LicensePieChart;