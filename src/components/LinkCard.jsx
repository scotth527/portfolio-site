import React, { useState } from 'react';



function LinkCard({ title, url, description, img, width  }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div className={width} >
        <a href={url} target="blank">
            <img src={img} alt={title} />
        </a>
      </div>
    );
  }

  LinkCard.defaultProps = {
    url: false,
    description: 'My Prop',
    title: 'Test',
    img: 'https://picsum.photos/900/180',
    width: 'col-12 col-lg-3 h-100'
  }
  
  export default LinkCard;