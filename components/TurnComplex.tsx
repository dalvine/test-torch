import React from 'react';
import GradientTitle from './GradientTitle';
import Caption from './Caption';
import FeatureCard from './FeatureCard';

import { FaMagic } from 'react-icons/fa';
import { LuChartNoAxesCombined } from 'react-icons/lu';
import { LuChartPie } from 'react-icons/lu';
import LineChartCustom from './LineChart';

const mockMonthsChart = [
    { label: 'JAN', firstLine: 30, dashedLine: 40 },
    { label: 'FEB', firstLine: 20, dashedLine: 30 },
    { label: 'MAR', firstLine: 40, dashedLine: 20 },
    { label: 'APR', firstLine: 50, dashedLine: 30 },
    { label: 'MAY', firstLine: 30, dashedLine: 40 },
    { label: 'JUN', firstLine: 20, dashedLine: 30 },
    { label: 'JUL', firstLine: 30, dashedLine: 20 },
    { label: 'AUG', firstLine: 40, dashedLine: 30 },
    { label: 'SEP', firstLine: 50, dashedLine: 40 },
    { label: 'OCT', firstLine: 40, dashedLine: 30 },
    { label: 'NOV', firstLine: 30, dashedLine: 20 },
    { label: 'DEC', firstLine: 20, dashedLine: 30 },
];

const TurnComplex: React.FC = () => {
    return (
        <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
                <Caption>Actionable Insights</Caption>
                <GradientTitle
                    component="h2"
                    text="Turn complex data into simple decisions"
                />
            </div>
            <div className="bg-cardBackground w-full aspect-video rounded-md p-2 sm:p-5 lg:p-7 xl:p-10 ">
                <LineChartCustom
                    data={mockMonthsChart}
                    dataKeys={[
                        { type: 'dashed-line', key: 'dashedLine' },
                        { type: 'line', key: 'firstLine' },
                    ]}
                    showedLabel={true}
                />
            </div>
            <div className="flex flex-col sm:flex-row gap-10">
                <FeatureCard
                    icon={FaMagic}
                    subtitle="Automated reports"
                    text="Save time with automated, scheduled reports. Get the insights you need delivered straight to your inbox."
                />
                <FeatureCard
                    icon={LuChartNoAxesCombined}
                    subtitle="Trend analysis"
                    text="Discover patterns and trends in your data effortlessly. Visualise historical data to forecast future performance."
                />
                <FeatureCard
                    icon={LuChartPie}
                    subtitle="Interactive charts"
                    text="Dive deeper into your data with interactive charts. Hover and click for more detailed insights and breakdowns."
                />
            </div>
        </section>
    );
};

export default TurnComplex;
