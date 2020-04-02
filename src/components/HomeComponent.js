import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
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
      src="assets/images/img3.jpeg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img height='300px' width='300px'
      className="d-block w-100"
      src="assets/images/img2.jpeg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img height='300px' width='300px'
      className="d-block w-100"
      src="assets/images/img4.jpeg"
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