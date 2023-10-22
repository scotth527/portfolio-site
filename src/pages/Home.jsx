import React from 'react'
import Hero from '../components/Hero';
import CardContainer from '../components/CardContainer';
import TextCardContainer from '../components/TextCardContainer';

function Home() {
    return (
        <>
            <Hero />
            <h1>Past Projects</h1>
            <CardContainer />
            <TextCardContainer />
        </>

    )
}

export default Home;