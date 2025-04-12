import React from 'react';
import { PieChart, ResponsiveContainer, Pie, Cell } from 'recharts';

type PieCell = {
    key: string;
    value: number;
};

interface PieChartProps {
    data: PieCell[];
}

const PieChartCustom: React.FC<PieChartProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart data={data}>
                <Pie
                    data={data}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={'50%'}
                    paddingAngle={0}
                    stroke="none"
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={`var(--color-main-${index})`}
                        />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default PieChartCustom;
