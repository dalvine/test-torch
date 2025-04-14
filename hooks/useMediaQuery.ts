import { useEffect, useState } from 'react';

const breakpoints = {
    sm: '(width >= 40rem)',
    md: '(width >= 48rem)',
    lg: '(width >= 64rem)',
    xl: '(width >= 80rem)',
    '2xl': '(width >= 96rem)',
    xs: '',
};

type Breakpoint = keyof typeof breakpoints;

const getCurrentBreakpoint = (): Breakpoint | '' => {
    if (typeof window === 'undefined') return '';

    if (window.matchMedia(breakpoints['2xl']).matches) return '2xl';
    if (window.matchMedia(breakpoints.xl).matches) return 'xl';
    if (window.matchMedia(breakpoints.lg).matches) return 'lg';
    if (window.matchMedia(breakpoints.md).matches) return 'md';
    if (window.matchMedia(breakpoints.sm).matches) return 'sm';
    return 'xs';
};

export const useMediaQuery = (): Breakpoint | '' => {
    const [breakpoint, setBreakpoint] = useState<Breakpoint | ''>(
        getCurrentBreakpoint(),
    );

    useEffect(() => {
        const handleResize = () => {
            setBreakpoint(getCurrentBreakpoint());
        };

        const mediaQueries = Object.values(breakpoints).map((query) =>
            window.matchMedia(query),
        );

        mediaQueries.forEach((mq) =>
            mq.addEventListener('change', handleResize),
        );

        return () => {
            mediaQueries.forEach((mq) =>
                mq.removeEventListener('change', handleResize),
            );
        };
    }, []);

    return breakpoint;
};

export default useMediaQuery;
