import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import awsc from './imgs/awsc.jpeg';
import awsm from './imgs/awsm.jpeg';
import dl from './imgs/dl.jpg';
import ibm from './imgs/ibm.jpeg';
import reinf from './imgs/reinf.jpeg';
import stanford from './imgs/stanford.jpeg';
import text from './imgs/text.jpeg';
import cal from './imgs/cal.jpg';
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
                                <img height="300px" width="100%" src={stanford}></img></Card.Body>
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
                                   <h6>Verify At : <button outline><a href='https://www.coursera.org/account/accomplishments/verify/4ABYRTF7P4GG'>Click Me</a></button></h6><br/>
                                <img height="300px" width="100%" src={reinf}></img>
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
                                   <h6>Verify At : <button outline><a href='https://www.coursera.org/account/accomplishments/verify/5A3KJQFFUZWG'>Click Me</a></button></h6><br/>
                                <img height="300px" width="100%" src={text}></img>
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
                                   <h6>Verify At : <button outline><a href='https://www.coursera.org/account/accomplishments/verify/HVHRZPFJHMNA'>Click Me</a></button></h6><br/>
                                <img height="300px" width="100%" src={awsm}></img>
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
                                   <h6>Verify At : <button outline><a href='https://www.coursera.org/account/accomplishments/verify/X5Q29FAG4A4Q'>Click Me</a></button></h6><br/>
                                <img height="300px" width="100%" src={ibm}></img>
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
                                   <h6>Verify At : <button outline><a href='https://www.credential.net/ed715ca8-843b-4a2b-857b-3658cf615936'>Click Me</a></button></h6><br/>
                                <img height="300px" width="100%" src={dl}></img>
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
                                   <h6>Verify At : <button outline><a href='https://www.coursera.org/account/accomplishments/verify/2PSLF3VP53QT'>Click Me</a></button></h6><br/>
                                <img height="300px" width="100%" src={cal}></img>
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
                                   <h6>Verify At : <button outline><a href='https://www.coursera.org/account/accomplishments/verify/ML47S5LULZQF'>Click Me</a></button></h6><br/>
                                <img height="300px" width="100%" src={awsc}></img>
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