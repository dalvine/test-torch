import React from 'react';
import Header from '../../components/Header';
import Greeting from '../../components/Greeting';

export default function Home() {
    return (
        <>
            <Header />
            <main className="pt-18 lg:pt-36">
                <Greeting />
            </main>
        </>
    );
}
