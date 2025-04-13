import classNames from 'classnames';
import React from 'react';
import { IconType } from 'react-icons';

type TitleAndSubtitleType =
    | { title: string; subtitle?: never }
    | { title?: never; subtitle: string }
    | { title: string; subtitle: string };

type FeatureCardProps = TitleAndSubtitleType & {
    text: string;
    icon: IconType;
    className?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    subtitle,
    text,
    icon: Icon,
    className,
}) => {
    return (
        <div
            className={classNames(
                className,
                'w-full h-full flex flex-col justify-between gap-10',
            )}
        >
            <Icon className="icon" size={30} color="var(--color-main-0)" />
            <div className="w-full flex flex-col gap-4">
                {title && <h3 className="text-xl sm:text-3xl">{title}</h3>}
                {subtitle && <h4 className="text-md sm:text-xl">{subtitle}</h4>}
                <p className="text-sm sm:text-md">{text}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
