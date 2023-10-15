import React, { useState } from 'react';

function Footer(args) {
  
    return (
      <div className='d-flex justify-content-between container'>
        <div className=''>
            Scott Huang 2023.
        </div>
        <div>
            <ul>

                <li><a href="">Check out my gitlab</a></li>
                <li><a href="">Check out my linkedin</a></li>
            </ul>
        </div>
      </div>
    );
  }
  
  export default Footer;