import React, { useState } from 'react';
import JobCard  from './JobCards';
import LinkCard from './LinkCard';

import StrivenScreen from '../assets/images/screencaps/striven-screencap.png';
import AMCScreen from '../assets/images/screencaps/amc-screencap.png';
import ConcordiaScreen from '../assets/images/screencaps/concordia-screencap.png';
import OSBAScreen from '../assets/images/screencaps/osba-screencap.png';
import WehrungScreen from '../assets/images/screencaps/wehrungs-screencap.png';
import DuallScreen from '../assets/images/screencaps/duall-screencap.png';
import McDonaldScreen from '../assets/images/screencaps/mcdonald-screencap.png';
import MorrisScreen from '../assets/images/screencaps/morris-screencap.png';
import DynamicScreen from '../assets/images/screencaps/dynamic-screencap.png';
import FastStaffScreen from '../assets/images/screencaps/faststaff-screencap.png';
import MyDiScreen from '../assets/images/screencaps/mydi-screencap.png';
import WestchesterScreen from '../assets/images/screencaps/westchester-screencap.png';


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
            image: MorrisScreen
        
        },
        {
            url: "https://dynamic-ceramics.com/",
            title: "Dynamic Ceramics",
            description: "Cool websites",
            image: DynamicScreen
        
        },
        {
            url: "https://mcdonaldfarmsinc.com/",
            title: "McDonald Farms",
            description: "Cool websites",
            image: McDonaldScreen
        },
        {
            url: "https://faststaffllc.com/",
            title: "Fast Staff",
            description: "Cool websites",
            image: FastStaffScreen
        },
        {
            url: "https://wwmydi.com/",
            title: "Digital ID",
            description: "Cool websites",
            image: MyDiScreen
        },
        {
            url: "https://www.westchesterfamilycare.com/careers/",
            title: "Westchester Family Care ",
            description: "Cool websites",
            image: WestchesterScreen
        }
    ];
    
    const link_cards = websites.map((site, index )=> 
        <LinkCard key={site.title + "-" + index } url={site.url} title={site.title} img={site.image} description={site.description} />
    );

    return (
        <section id="my-work" className="job-card-section  align-items-stretch gx-5 ">
            <h1 className='text-white'>My work</h1>
            <div className='text-teal section-sub-heading'>A selection of my range of work</div>
            <div className='d-flex flex-wrap justify-content-start container' >
            { link_cards }
            </div>
        </section>
    );

}

export default CardContainer;