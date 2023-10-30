import React, { useState } from 'react';
import {
    Card, 
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Button
} from 'reactstrap';


function TextCard({ title, url, description, img, width  }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div className={width}>
            <div className='text-white'>
                <h3 >{ title }</h3>
                <p>{ description }</p>
            </div>
      </div>
    );
  }

  TextCard.defaultProps = {
    url: false,
    description: 'My Prop',
    title: 'Test',
    img: 'https://picsum.photos/900/180',
    width: 'col col-lg-2'
  }
  
  export default TextCard;