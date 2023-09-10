import React, { useState } from 'react';
import JobCard  from './JobCards';


function CardContainer(args) {

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
        <JobCard key={number.title + "-" + index } url={number.url} title={number.title} description={number.description} />
    );

    return (
        <div className="flex justify-between">
            { job_cards }
            <div>Example Cards</div>
        </div>
    );

}

export default CardContainer;