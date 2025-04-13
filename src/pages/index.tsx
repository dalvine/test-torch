import React from 'react';
import Header from '../../components/Header';
import Greeting from '../../components/Greeting';
import TakeAction from '../../components/TakeAction';
import RealTimeInsights from '../../components/RealTimeInsights';

export default function Home() {
    return (
        <>
            <Header />
            <main className="pt-18 lg:pt-36 flex flex-col gap-15 md:gap-60">
                <Greeting />
                <TakeAction />
                <RealTimeInsights />
            </main>
        </>
    );
}
