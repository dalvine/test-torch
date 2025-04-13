import React from 'react';
import GradientTitle from './GradientTitle';
import classNames from 'classnames';
import LineChart from './LineChart';
import BarChartCustom from './BarChart';
import PieChartCustom from './PieChart';
import CustomButton from './CustomButton';

interface MainSectionProps {
    className?: string;
}

const mockLineCharts = [
    {
        a: 32,
        b: 38,
    },
    {
        a: 30,
        b: 15,
    },
    {
        a: 43,
        b: 25,
    },
    {
        a: 25,
        b: 32,
    },
    {
        a: 30,
        b: 12,
    },
    {
        a: 32,
        b: 12,
    },
    {
        a: 40,
        b: 27,
    },
    {
        a: 19,
        b: 23,
    },
];

const mockDoubleBars = [
    {
        a: 20,
        b: 10,
    },
    {
        a: 50,
        b: 45,
    },
    {
        a: 15,
        b: 12,
    },
];

const mockSingleBars = [
    {
        a: 20,
        b: 50,
        c: 12,
    },
];

const Greeting: React.FC<MainSectionProps> = ({ className }) => {
    return (
        <section
            className={classNames(
                'flex flex-col lg:flex-row space-y-6 lg:space-x-4  w-full',
                className,
            )}
        >
            <div className="sm:max-w-[80%] flex flex-col gap-12 md:gap-17 justify-start">
                <GradientTitle
                    component="h1"
                    text="Powerful data insights for all"
                />
                <p className="sm:max-w-[60%] lg:max-w-none text-lg">
                    Torch makes data analysis easy for everyone. Visualise key
                    metrics, track performance, and discover trends without
                    needing a data science background.
                </p>

                <div className="flex flex-col sm:flex-row  sm:justify-stretch gap-4">
                    <CustomButton type="filled" value="Get started" size="lg" />
                    <CustomButton value="Lean more" size="lg" />
                </div>

                <div className="flex gap-4 ">
                    <span className="text-sm uppercase text-gray-500">
                        SOMEDAY
                    </span>
                    <span className="text-sm uppercase text-gray-500">
                        Accent
                    </span>
                    <span className="text-sm uppercase text-gray-500">
                        IRENE
                    </span>
                    <span className="text-sm uppercase  text-gray-500">
                        n&apos;a
                    </span>
                </div>
            </div>

            <div className="min-h-80 sm:min-h-100 lg:h-150 xl:h-200 rounded-md  p-2 sm:p-5 lg:p-7 xl:p-10 bg-cardBackground grid grid-cols-4 grid-rows-5 gap-4 md:gap-6 xl:gap-8 w-full">
                <div className="bg-[#202221] row-span-3 col-span-2 rounded-md w-full h-f">
                    <BarChartCustom
                        data={mockDoubleBars}
                        dataKeys={['a', 'b']}
                    />
                </div>
                <div className="bg-[#202221] row-span-2 col-span-2 rounded-md">
                    <PieChartCustom
                        data={[
                            { key: 'main', value: 2.9 },
                            { key: 'main', value: 3.5 },
                            { key: 'main', value: 2 },
                            { key: 'main', value: 3.4 },
                        ]}
                    />
                </div>

                <div className="bg-[#202221] row-span-3 col-span-2  rounded-md">
                    <BarChartCustom
                        data={mockSingleBars}
                        dataKeys={['a', 'b', 'c']}
                    />
                </div>

                <div className="bg-[#202221] row-span-2 col-span-2 rounded-md">
                    <LineChart
                        data={mockLineCharts}
                        dataKeys={[
                            {
                                key: 'a',
                                type: 'line',
                            },
                            {
                                key: 'b',
                                type: 'dashed-line',
                            },
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Greeting;
