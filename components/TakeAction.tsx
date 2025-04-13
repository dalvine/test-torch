import React from 'react';
import GradientTitle from './GradientTitle';
import FeatureCard from './FeatureCard';
import { CiGrid42 } from 'react-icons/ci';
import { FaWandMagicSparkles } from 'react-icons/fa6';
import { MdOutlineUpdate } from 'react-icons/md';

import classNames from 'classnames';
import { LuMousePointerClick } from 'react-icons/lu';

const styles = {
    card: 'rounded-md bg-cardBackground p-5 lg:p-7 xl:p-10',
    highCard: 'sm:min-h-[400px] row-span-3 col-span-2',
    lowCard: 'row-span-2 col-span-2',
};

const TakeAction: React.FC = () => {
    return (
        <section>
            <GradientTitle component="h2" text="Take action from insights" />
            <div className="mt-5 md:mt-15 rounded-md max-sm:flex flex-col sm:grid grid-cols-4 grid-rows-5 in-grid-gap w-full">
                <div className={classNames(styles.card, styles.highCard)}>
                    <FeatureCard
                        icon={CiGrid42}
                        title="Easy-to-use dashboards"
                        text="Create intuitive, custom dashboards to visualise your most important metrics. No coding or technical skills required."
                    />
                </div>
                <div className={classNames(styles.card, styles.lowCard)}>
                    <FeatureCard
                        icon={MdOutlineUpdate}
                        title="Real-time data updates"
                        text="Get the latest insights with real-time data refreshes. Stay on top of changes as they happen, keeping your team informed."
                    />
                </div>
                <div className={classNames(styles.card, styles.highCard)}>
                    <FeatureCard
                        icon={FaWandMagicSparkles}
                        title="Automated reportss"
                        text="Set up automated reports to be delivered directly to your inbox. Save time and focus on making decisions, not creating reports."
                    />
                </div>
                <div className={classNames(styles.card, styles.lowCard)}>
                    <FeatureCard
                        icon={LuMousePointerClick}
                        title="Collaborative analytics"
                        text="Share dashboards and reports with your team for seamless collaboration. Comment, edit, and review data insights together."
                    />
                </div>
            </div>
        </section>
    );
};

export default TakeAction;
