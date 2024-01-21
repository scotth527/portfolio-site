import React from 'react';
import Hero from '../components/Hero';
import BioSection from '../components/BioSection';
import CardContainer from '../components/CardContainer';
import TextCardContainer from '../components/TextCardContainer';

function Home() {
    return (
        <>
            <Hero />
            <TextCardContainer />
            <BioSection />
            <CardContainer />
        </>

    )
}

export default Home;