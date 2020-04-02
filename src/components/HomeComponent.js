import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import img2 from './imgs/img2.jpeg';
import img3 from './imgs/img3.jpeg';
import img4 from './imgs/img4.jpeg';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
 
  
class Home extends Component
{
   constructor(props)
   {
       super(props);
   }
       render()
       {
          return(
              <>
              <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem active>Home</BreadcrumbItem>
                </Breadcrumb>
                </div>
            </div>
            < div className='container' id='x'>
                <div className='row' >
                    <div class='col-12'>
                    <Carousel>
  <Carousel.Item>
    <img height='300px' width='300px'
      className="d-block w-100"
      src={img3}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img height='300px' width='300px'
      className="d-block w-100"
      src={img2}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img height='300px' width='300px'
      className="d-block w-100"
      src={img4}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
                    </div>
                    
                </div>
             </div>

        
            </>
          )
       }
    }
export default Home;