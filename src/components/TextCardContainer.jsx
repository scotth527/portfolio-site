import React, { useState } from 'react';
import TextCard  from './TextCard.jsx';
import {
    Button
} from 'reactstrap';
import  DigitalBg  from '../assets/images/hero-images/technology-background.png';

function TextCardContainer({ bgImage }) {

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
        }
    ];
    
    const job_cards = websites.map((number, index )=> 
        <TextCard key={number.title + "-" + index } url={number.url} title={number.title} description={number.description} />
    );

    return (
        <section style={{ backgroundImage: `url(${DigitalBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} className=' text-card-container' >
            <div className='text-card-container-content'>
                <div>
                    <h2 className='text-teal'>What I do</h2>
                    <div className='underline-decoration'></div>
                </div>
                <div className="d-flex flex-wrap justify-content-between container align-items-stretch gx-5">
                    { job_cards }
                </div>
                <div className='d-flex flex-wrap justify-content-center'>
                <Button
                    className='btn-teal'
                    color="none"
                    href="#"
                    tag="a"
                >
                    see my work
                </Button>
                </div>
            </div>


            <div className='bg-dark overlay'></div>
        </section>
        
    );

}

export default TextCardContainer;