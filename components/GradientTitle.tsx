import React, { useMemo } from 'react';
import classNames from 'classnames';

type TitleHTMLTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface GradientTextProps {
    text: string;
    className?: string;
    component: TitleHTMLTag;
}

const GradientTitle: React.FC<GradientTextProps> = ({
    text,
    className,
    component: Component,
}) => {
    const fontSizeStyle = useMemo<string>(() => {
        switch (Component) {
            case 'h1':
                return 'text-4xl sm:text-7xl';
            case 'h2':
                return 'text-2xl sm:text-5xl';
            case 'h3':
                return 'text-xl sm:text-3xl';
            default:
                return 'text-md sm:text-xl';
        }
    }, [Component]);

    const partsText = useMemo<[string, string]>(() => {
        const totalLength = text.length;

        const eightyPercentIndex = Math.floor(totalLength * 0.7);

        const part1 = text.slice(0, eightyPercentIndex);
        const part2 = text.slice(eightyPercentIndex);

        return [part1, part2];
    }, [text]);

    return (
        <Component
            className={classNames(
                'font-medium md:max-w-[40%]',
                className,
                fontSizeStyle,
            )}
        >
            {partsText[0]}
            <span
                className={
                    'bg-clip-text text-transparent bg-gradient-to-r from-main-2 to-main-0 overflow-visible'
                }
            >
                {partsText[1]}
            </span>
        </Component>
    );
};

export default GradientTitle;
