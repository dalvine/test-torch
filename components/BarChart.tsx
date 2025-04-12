import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer } from 'recharts';

type DataKeys<T extends Record<string, number>[]> = {
    [K in keyof T]: keyof T[K];
}[number];

interface BarChartProps<T extends Record<string, number>[]> {
    data: T;
    dataKeys: Array<DataKeys<T>>;
}

const BarChartCustom = <T extends Record<string, number>[]>({
    data,
    dataKeys,
}: BarChartProps<T>) => {
    return (
        <ResponsiveContainer
            width="100%"
            height="100%"
            className="xl:p-10 lg:p-7 md:p-4 sm:p-1"
        >
            <BarChart data={data} barCategoryGap={'10%'} barGap={'10%'}>
                <CartesianGrid
                    vertical={false}
                    stroke="var(--cartesian-grid)"
                />
                {dataKeys.map((key, index) => {
                    const fill = `var(--color-main-${index})`;
                    return (
                        <Bar
                            key={`${index}_${key.toString()}`}
                            dataKey={key.toString()}
                            fill={fill}
                            radius={5}
                        />
                    );
                })}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartCustom;
