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
        <section className="job-card-section  align-items-stretch gx-5 bg-dark">
            <h1 className='text-white'>My work</h1>
            <div className='text-teal section-sub-heading'>A selection of my range of work</div>
            <div className='d-flex flex-wrap justify-content-between container' >
            { job_cards }
            </div>
        </section>
    );

}

export default CardContainer;