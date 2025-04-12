import React from 'react';
import classNames from 'classnames';

interface GradientTextProps {
    text: string;
    className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text, className }) => {
    return (
        <span
            className={classNames(
                'bg-clip-text text-transparent bg-gradient-to-r from-main-3 to-main-0 from-60% overflow-visible',
                className,
            )}
        >
            {text}
        </span>
    );
};

export default GradientText;
