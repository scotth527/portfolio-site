import React from 'react';
import { Button } from 'reactstrap';
import  HeroImage  from '../assets/images/hero-images/digital-hero.jpg';

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
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
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