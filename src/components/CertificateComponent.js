import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Card,Accordion,Button} from 'react-bootstrap';

class Certificate extends Component
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
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Certificates</BreadcrumbItem>
                </Breadcrumb>
                </div>
                <div className='row'>
                    <div className='col-12'>
                    <Accordion defaultActiveKey="0">
                       <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                               Machine Learning
                             </Accordion.Toggle>
                               </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <h6>Verify At : <button outline><a href='https://www.coursera.org/account/accomplishments/verify/UTQRBE6FEQV8'>Click Me</a></button></h6><br/>
                                <img height="300px" width="100%" src="assets/images/stanford.jpeg"></img></Card.Body>
                             </Accordion.Collapse>
                         </Card>
                         <Card>
                             <Card.Header>
                                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                      Practical Reinforcement Learning
                                    </Accordion.Toggle>
                                 </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                   <Card.Body>
                                   <h6>Verify At : <button outline><a href='https://www.coursera.org/account/accomplishments/verify/UTQRBE6FEQV8'>Click Me</a></button></h6><br/>
                                <img height="300px" width="100%" src="assets/images/reinf.jpeg"></img>
                                   </Card.Body>
                                   </Accordion.Collapse>
                         </Card>
                         <Card>
                             <Card.Header>
                                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                      Applied Text Mining
                                    </Accordion.Toggle>
                                 </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                   <Card.Body>
                                   <h6>Verify At : <button outline><a href='https://www.coursera.org/account/accomplishments/verify/UTQRBE6FEQV8'>Click Me</a></button></h6><br/>
                                <img height="300px" width="100%" src="assets/images/text.jpeg"></img>
                                   </Card.Body>
                                   </Accordion.Collapse>
                         </Card>
                         <Card>
                             <Card.Header>
                                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                      Machine Learning With AWS
                                    </Accordion.Toggle>
                                 </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                   <Card.Body>
                                   <h6>Verify At : <button outline><a href='https://www.coursera.org/account/accomplishments/verify/UTQRBE6FEQV8'>Click Me</a></button></h6><br/>
                                <img height="300px" width="100%" src="assets/images/awsm.jpeg"></img>
                                   </Card.Body>
                                   </Accordion.Collapse>
                         </Card>
                         <Card>
                             <Card.Header>
                                  <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                      Applied Ai
                                    </Accordion.Toggle>
                                 </Card.Header>
                                    <Accordion.Collapse eventKey="4">
                                   <Card.Body>
                                   <h6>Verify At : <button outline><a href='https://www.coursera.org/account/accomplishments/verify/UTQRBE6FEQV8'>Click Me</a></button></h6><br/>
                                <img height="300px" width="100%" src="assets/images/ibm.jpeg"></img>
                                   </Card.Body>
                                   </Accordion.Collapse>
                         </Card>
                         <Card>
                             <Card.Header>
                                  <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                      Deep Learning
                                    </Accordion.Toggle>
                                 </Card.Header>
                                    <Accordion.Collapse eventKey="5">
                                   <Card.Body>
                                   <h6>Verify At : <button outline><a href='https://www.coursera.org/account/accomplishments/verify/UTQRBE6FEQV8'>Click Me</a></button></h6><br/>
                                <img height="300px" width="100%" src="assets/images/dl.jpg"></img>
                                   </Card.Body>
                                   </Accordion.Collapse>
                         </Card>
                         <Card>
                             <Card.Header>
                                  <Accordion.Toggle as={Button} variant="link" eventKey="6">
                                      Multivariate Calculus
                                    </Accordion.Toggle>
                                 </Card.Header>
                                    <Accordion.Collapse eventKey="6">
                                   <Card.Body>
                                   <h6>Verify At : <button outline><a href='https://www.coursera.org/account/accomplishments/verify/UTQRBE6FEQV8'>Click Me</a></button></h6><br/>
                                <img height="300px" width="100%" src="assets/images/cal.jpg"></img>
                                   </Card.Body>
                                   </Accordion.Collapse>
                         </Card>
                         <Card>
                             <Card.Header>
                                  <Accordion.Toggle as={Button} variant="link" eventKey="7">
                                      AWS
                                    </Accordion.Toggle>
                                 </Card.Header>
                                    <Accordion.Collapse eventKey="7">
                                   <Card.Body>
                                   <h6>Verify At : <button outline><a href='https://www.coursera.org/account/accomplishments/verify/UTQRBE6FEQV8'>Click Me</a></button></h6><br/>
                                <img height="300px" width="100%" src="assets/images/awsc.jpeg"></img>
                                   </Card.Body>
                                   </Accordion.Collapse>
                         </Card>
                    </Accordion>
                    </div>
                </div>
                </div>
                </>
          )
       }
    }

export default Certificate;