import React, { useMemo } from 'react';
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from 'recharts';
import useMediaQuery from '../hooks/useMediaQuery';

// type DataKeys<T extends Record<string, number>[]> = {
//     [K in keyof T]: keyof T[K];
// }[number];

// interface LineChartProps<T extends Record<string, number>[]> {
//     data: T;
//     dataKeys: {
//         key: DataKeys<T>;
//         type: 'line' | 'dashed-line';
//     }[];
// }

type DataRecord = Record<string, number> | { label?: string };

type DataKeys<T extends DataRecord[]> = {
    [K in keyof T]: keyof T[K];
}[number];

interface LineChartProps<T extends DataRecord[]> {
    data: T;
    dataKeys: {
        key: DataKeys<T>;
        type: 'line' | 'dashed-line';
    }[];
    showedLabel?: boolean;
}

const LineChartCustom = <T extends DataRecord[]>({
    data,
    dataKeys,
    showedLabel = false,
}: LineChartProps<T>) => {
    const breakpoint = useMediaQuery();

    const tickFontSize = useMemo(() => {
        switch (breakpoint) {
            case '2xl':
            case 'xl':
            case 'lg':
            case 'md':
                return 18;
            case 'sm':
                return 12;
            case 'xs':
                return 8;
        }
    }, [breakpoint]);

    return (
        <ResponsiveContainer
            width="100%"
            height="100%"
            className="xl:p-10 lg:p-7 md:p-4 sm:p-1 "
        >
            <LineChart data={data} margin={{ left: 15, right: 15 }}>
                <CartesianGrid
                    vertical={false}
                    stroke="var(--cartesian-grid)"
                />
                {showedLabel && (
                    <XAxis
                        dataKey="label"
                        scale={'point'}
                        alignmentBaseline="auto"
                        tickLine={false}
                        tick={{ fontSize: tickFontSize }}
                        tickSize={10}
                        interval={0}
                    />
                )}
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
