import React from 'react';
import { Inter_Tight } from 'next/font/google';
import classNames from 'classnames';

const interMono = Inter_Tight({
    variable: '--font-inter-mono',
    subsets: ['latin'],
});

export default function Home() {
    return (
        <h1 className={classNames(interMono, 'text-3xl font-bold underline')}>
            Hello world!
        </h1>
    );
}
