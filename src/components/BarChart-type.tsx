import React, { useState, useEffect } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';

// Define the shape of your data
interface researchFieldData {
    key: string;
    key_display_name: string;
    count: number;
}

const ResearchTypeData: React.FC = () => {
    const [data, setData] = useState<researchFieldData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetching data from API
    const fetchingData = async () => {
        try {
            const response = await fetch("http://localhost:8000/publication/bygroup/byType");
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const apiData = await response.json();

            const transformedData = apiData.group_by.map((item: researchFieldData) => ({
                key: item.key,
                key_display_name: item.key_display_name,
                count: item.count
            }));

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
    if (error) return <div>Error: {error}</div>;

    const COLORS = ["#2d8bba", "#2f5f98", "#31356e", "#82a093"];

    return (
        <div style={{ width: "100%", height: 500, margin: "0 auto" }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    layout="vertical" // Set this for horizontal bars
                    margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" /> {/* This should represent the 'count' values */}
                    <YAxis type="category" dataKey="key_display_name" /> {/* This should represent the publication types */}
                    <Tooltip />
                    <Bar dataKey="count" fill="#8884d8">
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
