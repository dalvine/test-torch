import React, { useMemo } from 'react';
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    ResponsiveContainer,
    XAxis,
} from 'recharts';
import useMediaQuery from '../hooks/useMediaQuery';

type DataRecord = Record<string, number> | { label?: string };

type DataKeys<T extends DataRecord[]> = {
    [K in keyof T]: keyof T[K];
}[number];

interface BarChartProps<T extends DataRecord[]> {
    data: T;
    dataKeys: Array<DataKeys<T>>;
    fillingType?: 'cell' | 'section';
    showedLabel?: boolean;
}

const BarChartCustom = <T extends DataRecord[]>({
    data,
    dataKeys,
    fillingType = 'cell',
    showedLabel = false,
}: BarChartProps<T>) => {
    const breakpoint = useMediaQuery();

    const barCategoryGap = useMemo(() => {
        switch (breakpoint) {
            case '2xl':
                return 12;
            case 'xl':
            case 'lg':
            case 'md':
                return 10;
            case 'sm':
                return 5;
            case 'xs':
                return 3;
        }
    }, [breakpoint]);

    const barGap = useMemo(() => {
        switch (breakpoint) {
            case '2xl':
            case 'xl':
            case 'lg':
            case 'md':
                return '10%';
            case 'sm':
                return '7%';
            case 'xs':
                return '2%';
        }
    }, [breakpoint]);

    const tickMargin = useMemo(() => {
        switch (breakpoint) {
            case '2xl':
            case 'xl':
            case 'lg':
            case 'md':
            case 'sm':
                return 10;
            case 'xs':
                return 2;
        }
    }, [breakpoint]);

    const tickFontSize = useMemo(() => {
        switch (breakpoint) {
            case '2xl':
            case 'xl':
            case 'lg':
            case 'md':
                return 22;
            case 'sm':
                return 14;
            case 'xs':
                return 6;
        }
    }, [breakpoint]);

    return (
        <ResponsiveContainer
            width="100%"
            height="100%"
            className="xl:p-10 lg:p-7 md:p-4 sm:p-1"
        >
            <BarChart
                data={data}
                barGap={barGap}
                barCategoryGap={barCategoryGap}
            >
                <CartesianGrid
                    vertical={false}
                    stroke="var(--cartesian-grid)"
                />

                {showedLabel && (
                    <XAxis
                        dataKey="label"
                        tickMargin={tickMargin}
                        tickLine={false}
                        tick={{ fontSize: tickFontSize }}
                        tickSize={10}
                    />
                )}

                {dataKeys.map((key, indexCell) => {
                    const fillCell = `var(--color-main-${indexCell})`;
                    return (
                        <Bar
                            key={`${indexCell}_${key.toString()}`}
                            dataKey={key.toString()}
                            radius={5}
                        >
                            {data.map((entry, indexSection) => {
                                const fillSection = `var(--color-main-${indexSection})`;
                                return (
                                    <Cell
                                        key={`cell-${indexSection}`}
                                        className="w-100"
                                        fill={
                                            fillingType === 'cell'
                                                ? fillCell
                                                : fillSection
                                        }
                                    />
                                );
                            })}
                        </Bar>
                    );
                })}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartCustom;
