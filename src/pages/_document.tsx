import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className={'antialiased font-inter px-5 md:px-10 2xl:px-60'}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
