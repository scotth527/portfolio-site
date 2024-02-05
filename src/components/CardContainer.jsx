import React, { useState } from 'react';
import JobCard  from './JobCards';
import LinkCard from './LinkCard';

import StrivenScreen from '../assets/images/screencaps/striven-screencap.png';
import AMCScreen from '../assets/images/screencaps/amc-screencap.png';
import ConcordiaScreen from '../assets/images/screencaps/concordia-screencap.png';
import OSBAScreen from '../assets/images/screencaps/osba-screencap.png';
import WehrungScreen from '../assets/images/screencaps/wehrungs-screencap.png';
import DuallScreen from '../assets/images/screencaps/duall-screencap.png';

function CardContainer(args) {

    const websites = [
        {
            url: "https://www.amcfireprotection.com/",
            title: "AMC Fire",
            description: "Cool websites",
            image: AMCScreen
        },
        {
            url: "https://www.concordiafibers.com/",
            title: "Concordia Fibers",
            description: "Cool websites",
            image: ConcordiaScreen
        },
        {
            url: "https://osba.org/",
            title: "Oregon School Board Association",
            description: "Cool websites",
            image: OSBAScreen
        },
        {
            url: "https://www.striven.com/",
            title: "Striven",
            description: "Cool websites",
            image: StrivenScreen 
        },
        {
            url: "https://www.duallbuildingrestoration.com/",
            title: "Duall Building Restoration",
            description: "Cool websites",
            image: DuallScreen
        },
        {
            url: "https://www.wehrungs.com/",
            title: "Wehrung",
            description: "Cool websites",
            image: WehrungScreen
        
        },
        {
            url: "https://www.morrisengineeringllc.com/",
            title: "Morris Engineering",
            description: "Cool websites",
            image: WehrungScreen
        
        },
        {
            url: "https://dynamic-ceramics.com/",
            title: "Dynamic Ceramics",
            description: "Cool websites",
            image: WehrungScreen
        
        },
        {
            url: "https://faststaffllc.com/",
            title: "Fast Staff",
            description: "Cool websites",
            image: WehrungScreen
        },
        {
            url: "https://faststaffllc.com/",
            title: "Fast Staff",
            description: "Cool websites",
            image: WehrungScreen
        },
        {
            url: "https://faststaffllc.com/",
            title: "Fast Staff",
            description: "Cool websites",
            image: WehrungScreen
        },
        {
            url: "https://faststaffllc.com/",
            title: "Fast Staff",
            description: "Cool websites",
            image: WehrungScreen
        }
    ];
    
    const link_cards = websites.map((site, index )=> 
        <LinkCard key={site.title + "-" + index } url={site.url} title={site.title} img={site.image} description={site.description} />
    );

    return (
        <section className="job-card-section  align-items-stretch gx-5 ">
            <h1 className='text-white'>My work</h1>
            <div className='text-teal section-sub-heading'>A selection of my range of work</div>
            <div className='d-flex flex-wrap justify-content-start container' >
            { link_cards }
            </div>
        </section>
    );

}

export default CardContainer;