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
            title: "Front End Developement  ",
            description: "Proficient working with Front End technologies specializing in ReactJS, Wordpress, HTML, CSS, Tailwind, Bootstrap",
            image: "fancy.png"
        },
        {
            url: "test.com",
            title: "Back End Developement",
            description: "Have knowledge in working with Backend technologies like Django and Flask for Python, Ruby on Rails for Ruby, and NodeJS with some experience with mySQL",
            image: "fancy.png"
        },
        {
            url: "test.com",
            title: "CMS",
            description: "Experienced in building sites that use CMS's such as Wordpress, Webflow, Hubspot. I also have experience in managing Wordpress, plugins and PHP updates for sites",
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
                    href="#my-work"
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