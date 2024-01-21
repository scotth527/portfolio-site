import React from 'react';
import { Button } from 'reactstrap';
import  HeroImage  from '../assets/images/hero-images/professional-pic.png';

const BioSection = ( props ) => {
  return (
    <section className='bio-section-container'>
      <div className='container position-relative'>
        <div className='  d-flex justify-content-start'>

          

          <div className="col-12 col-lg-6 px-4 text-start">
            <h1 className="lead display-3">Who I am</h1>
          </div>

        
          {/* <div className="col col-6 px-4 text-start">
            <img src={ HeroImage } className='col' alt="Digital Image" />
          </div> */}
        
        </div>
        <div className='bg-teal  d-flex  justify-content-start'>
          <div className="col-12 col-lg-6 font-weight-bold px-4 text-start ">
            <h3>Fullstack Developer based out of Miami, FL</h3>
          </div>
        </div>

        <div className='text-start pt-4 px-4 col-lg-6'>
            <p className=''>
              Enthusiastic, detail-oriented and adaptive Web Developer. Specializing in JavaScript, and its libraries such as React, and Gatsby. Experience creating REST API’s with technologies like Node.js, and Django/Python. Proficient in creating visually appealing sites that are clean and user friendly. Strong communication skills, customer oriented, and ability to work with management. Seeking opportunities to be part of a development team, where I can learn and share my unique experiences. When I am not coding, I am reading novels, cooking and spending time with my family.             
            </p>
        </div>

        <div className='d-flex align-items-center justify-content-end hero-image-container text-start'>
          <div className='col-lg-5'>
            <img src={HeroImage} alt="test" />
          </div>

        </div>
     


      </div>


    </section>
  );
};

export default BioSection;