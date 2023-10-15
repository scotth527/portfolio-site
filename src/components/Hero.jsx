import React from 'react';
import { Button } from 'reactstrap';
import  HeroImage  from '../assets/images/hero-images/digital-hero.jpg';

const Hero = (props) => {
  return (
    <div>
      <div className='container hero-container position-relative'>
        <div className='  d-flex justify-content-end'>

          

          <div className="col col-6 px-4 text-start">
            <div className="">Hi, I am</div>
            <h1 className="lead display-3">Scott Huang</h1>
          </div>

        
          {/* <div className="col col-6 px-4 text-start">
            <img src={ HeroImage } className='col' alt="Digital Image" />
          </div> */}
        
        </div>
        <div className='bg-teal p-3 d-flex  justify-content-end'>
          <div className="col col-6 font-weight-bold px-4 text-start ">
            <h2>Fullstack Developer</h2>
          </div>
        </div>

        <div className='d-flex align-items-center justify-content-start hero-image-container'>
          <div className='col-7'>
            <img src={ HeroImage } className='col' alt="Digital Image" />
          </div>

        </div>
     


      </div>


    </div>
  );
};

export default Hero;