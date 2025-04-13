import React from 'react';
import GradientTitle from './GradientTitle';
import Caption from './Caption';
import BarChartCustom from './BarChart';
import FeatureCard from './FeatureCard';

import { IoFlashOutline } from 'react-icons/io5';
import { VscSettings } from 'react-icons/vsc';
import { LuHandshake } from 'react-icons/lu';

const mockWeeksChart = [
    {
        label: 'WEEK 23',
        mo: 44,
        tu: 39,
        we: 37,
        th: 39,
        fr: 42,
        sa: 34,
        su: 37,
    },
    {
        label: 'WEEK 24',
        mo: 9,
        tu: 7,
        we: 12,
        th: 7,
        fr: 7,
        sa: 5,
        su: 3,
    },
    {
        label: 'WEEK 25',
        mo: 20,
        tu: 21,
        we: 24,
        th: 20,
        fr: 19,
        sa: 22,
        su: 17,
    },
    {
        label: 'WEEK 26',
        mo: 7,
        tu: 6,
        we: 7,
        th: 5,
        fr: 6,
        sa: 4,
        su: 7,
    },
    {
        label: 'WEEK 27',
        mo: 25,
        tu: 26,
        we: 22,
        th: 20,
        fr: 21,
        sa: 26,
        su: 25,
    },
];

const RealTimeInsights: React.FC = () => {
    return (
        <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
                <Caption>Data at your fingertips</Caption>
                <GradientTitle
                    component="h2"
                    text="Real-time insights for fasten decision"
                />
            </div>
            <div className="bg-cardBackground w-full aspect-video rounded-md p-2 sm:p-5 lg:p-7 xl:p-10">
                <BarChartCustom
                    data={mockWeeksChart}
                    dataKeys={['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su']}
                    fillingType="section"
                    showedLabel={true}
                />
            </div>
            <div className="flex flex-col sm:flex-row gap-10">
                <FeatureCard
                    icon={IoFlashOutline}
                    subtitle="Instant updates"
                    text="Always stay up-to-date with live data flowing directly into your dashboard. Track changes as they happen."
                />
                <FeatureCard
                    icon={VscSettings}
                    subtitle="Customisable views"
                    text="Tailor your dashboard to show the metrics that matter most. Create multiple views for different team members or purposes."
                />
                <FeatureCard
                    icon={LuHandshake}
                    subtitle="Collaborative tools"
                    text="Easily share your insights with the team. Comment, edit, and collaborate on reports without leaving the platform."
                />
            </div>
        </section>
    );
};

export default RealTimeInsights;
