import React from 'react';
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    YAxis,
} from 'recharts';

type DataKeys<T extends Record<string, number>[]> = {
    [K in keyof T]: keyof T[K];
}[number];

interface LineChartProps<T extends Record<string, number>[]> {
    data: T;
    dataKeys: {
        key: DataKeys<T>;
        type: 'line' | 'dashed-line';
    }[];
}

const LineChartCustom = <T extends Record<string, number>[]>({
    data,
    dataKeys,
}: LineChartProps<T>) => {
    return (
        <ResponsiveContainer
            width="100%"
            height="100%"
            className="xl:p-10 lg:p-7 md:p-4 sm:p-1"
        >
            <LineChart data={data}>
                <CartesianGrid
                    vertical={false}
                    stroke="var(--cartesian-grid)"
                />
                <YAxis
                    hide={true}
                    domain={[
                        (dataMin: number) => {
                            return dataMin * 0.2;
                        },
                        (dataMax: number) => {
                            return dataMax * 1.5;
                        },
                    ]}
                />
                {dataKeys.map((linesData, index) => {
                    const { key, type } = linesData;
                    const fill = `var(--color-main-${index})`;
                    const strokeDasharray =
                        type === 'dashed-line'
                            ? String(30 / data.length)
                            : undefined;
                    return (
                        <Line
                            type="natural"
                            key={`${index}_${key.toString()}`}
                            dataKey={key.toString()}
                            strokeWidth={1}
                            stroke={fill}
                            dot={false}
                            strokeDasharray={strokeDasharray}
                        />
                    );
                })}
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineChartCustom;
