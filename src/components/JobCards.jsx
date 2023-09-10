import React, { useState } from 'react';
import {
    Card, 
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Button
} from 'reactstrap';


function JobCard({ title, url, description, img  }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Card className="my-2">
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
                color="primary"
                href={url}
                tag="a"
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
    img: 'https://picsum.photos/900/180'
  }
  
  export default JobCard;