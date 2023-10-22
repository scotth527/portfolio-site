import React, { useState } from 'react';
import TextCard  from './TextCard.jsx';
import {
    Button
} from 'reactstrap';


function TextCardContainer(args) {

    const websites = [
        {
            url: "test.com",
            title: "AMC Fire",
            description: "Cool websites",
            image: "fancy.png"
        },
        {
            url: "test.com",
            title: "Concordia Fibers",
            description: "Cool websites",
            image: "fancy.png"
        },
        {
            url: "test.com",
            title: "Oregon School Board Association",
            description: "Cool websites",
            image: "fancy.png"
        },
        {
            url: "test.com",
            title: "Striven",
            description: "Cool websites",
            image: "fancy.png"
        },
        {
            url: "test.com",
            title: "AMC Fire",
            description: "Cool websites",
            image: "fancy.png"
        }
    ];
    
    const job_cards = websites.map((number, index )=> 
        <TextCard key={number.title + "-" + index } url={number.url} title={number.title} description={number.description} />
    );

    return (
        <section>
            <div><h2>What I do</h2></div>
            <div className="d-flex flex-wrap justify-content-between container align-items-stretch gx-5">
                { job_cards }
            </div>
            <div className='d-flex flex-wrap justify-content-center'>
            <Button
                color="primary"
                href="#"
                tag="a"
            >
                See my work
            </Button>
            </div>
        </section>
        
    );

}

export default TextCardContainer;