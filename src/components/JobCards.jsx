import React, { useState } from 'react';
import {
    Card, 
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Button
} from 'reactstrap';


function JobCard({ title, url, description, img, width  }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div className={width} >
        <Card className="">
            <CardImg
            alt="Card image cap"
            src={img}
            style={{
                height: 180
            }}
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                { title }
            </CardTitle>
            <CardText>
                { description }
            </CardText>
            <CardText>
            <Button
                href={url}
                tag="a"
                className='btn-teal'
                color="none"
            >
                View Site
            </Button>
            </CardText>
            </CardBody>
        </Card>
      </div>
    );
  }

  JobCard.defaultProps = {
    url: false,
    description: 'My Prop',
    title: 'Test',
    img: 'https://picsum.photos/900/180',
    width: 'col-12 col-lg-3 h-100 px-3 my-2'
  }
  
  export default JobCard;