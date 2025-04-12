import { useMemo } from 'react';
import classNames from 'classnames';

interface CustomButtonProps {
    className?: string;
    type?: 'normal' | 'filled';
    size?: 'sm' | 'md' | 'lg';
    value: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    type = 'normal',
    size = 'md',
    className,
    value,
}) => {
    const mainStyle =
        'cursor-pointer rounded-md shadow-sm hover:bg-gray-700 transition font-semibold';
    const typeStyle = useMemo(() => {
        switch (type) {
            case 'normal':
                return 'bg-[#333333] text-white';
            case 'filled':
                return `bg-[var(--color-main-0)] text-black`;
        }
    }, [type]);
    const sizeStyle = useMemo(() => {
        switch (size) {
            case 'lg':
                return 'px-5 py-3';
            case 'md':
                return 'px-4 py-2';
            case 'sm':
                return 'px-2 py-1';
        }
    }, [size]);

    return (
        <button
            className={classNames(mainStyle, typeStyle, sizeStyle, className)}
        >
            {value}
        </button>
    );
};

export default CustomButton;
