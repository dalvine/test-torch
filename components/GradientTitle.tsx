import React from 'react';
import classNames from 'classnames';

type TitleHTMLTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface GradientTextProps {
    text: string;
    className?: string;
    component: TitleHTMLTag
}

const GradientTitle: React.FC<GradientTextProps> = ({ text, className, component: Component }) => {


    return (
        <Component
            className={classNames(
                'bg-clip-text text-transparent bg-gradient-to-r from-main-3 to-main-0 from-60% overflow-visible',
                className,
            )}
        >
            {text}
        </Component>
    );
};

export default GradientTitle;
