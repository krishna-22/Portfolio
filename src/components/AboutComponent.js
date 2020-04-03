import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Tab,Tabs,Card,ListGroup} from 'react-bootstrap';

class About extends Component
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
                    <BreadcrumbItem active>About</BreadcrumbItem>
                </Breadcrumb>
                </div>
                <div className='row'>
                    <div className='col-12'>
                    <Card style={{ width:'100%'}} bg='info'>
                    <Card.Header>Professional</Card.Header>
                <Card.Body>
             <blockquote className="blockquote mb-0">
             <p>
              {' '}
              Saikiran is talented and much passionated towards his Profession. His commitment and indulgence in projects can ensure client satisfaction.
              {' '}
                 </p>
                 <footer className="blockquote-footer" style={{color:"red"}}>
                 Sudha <cite title="Source Title">(Professor-CSE)</cite>
                 </footer>
            </blockquote>
              </Card.Body>
</Card>
                    </div>
                </div>
                <div className='row'>
                <div className='col-12'>
                <Tabs defaultActiveKey="Skills" id="uncontrolled-tab-example">
                     <Tab eventKey="Skills" title="Skills">
                     <Card style={{ width:'100%'}} bg='secondary'>
                    <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item >Machine Learning</ListGroup.Item>
                                    <ListGroup.Item>Data Science</ListGroup.Item>
                                    <ListGroup.Item>Full Stack</ListGroup.Item>
                                    <ListGroup.Item>Cloud Computing</ListGroup.Item>
                                    <ListGroup.Item>Deep Learning</ListGroup.Item>
                                    <ListGroup.Item>Data Structures</ListGroup.Item>
                                    <ListGroup.Item>Object Oriented Pogramming</ListGroup.Item>
                                    <ListGroup.Item>Data Analytics</ListGroup.Item>
                                    <ListGroup.Item>Statistics-Probability</ListGroup.Item>
                                    <ListGroup.Item>Data Visualisation</ListGroup.Item>
                                    
                                </ListGroup>
                            </Card.Text>
                 </Card.Body>
               </Card>
                    </Tab>
                   <Tab eventKey="Languages" title="Languages">
                   <Card style={{ width:'100%'}} bg='secondary'>
                    <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Python</ListGroup.Item>
                                    <ListGroup.Item>JavaScript</ListGroup.Item>
                                    <ListGroup.Item>SQL</ListGroup.Item>
                                    <ListGroup.Item>Mongodb</ListGroup.Item>
                                    <ListGroup.Item>AWS</ListGroup.Item>
                                    <ListGroup.Item>TensorFlow</ListGroup.Item>
                                    <ListGroup.Item>React</ListGroup.Item>
                                    <ListGroup.Item>Pytorch</ListGroup.Item>
                                    <ListGroup.Item>Html</ListGroup.Item>
                                    <ListGroup.Item>NodeJs + Express</ListGroup.Item>
                                    
                                </ListGroup>
                            </Card.Text>
                 </Card.Body>
               </Card>
                     </Tab>
                  <Tab eventKey="Achievements" title="Achievements">
                   <Card style={{ width:'100%'}} bg='secondary'>
                    <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                <ListGroup variant="flush">
                                    <ListGroup.Item> winner of most innovative national level leading India Ai hackathon by VESIT, Mumbai</ListGroup.Item>
                                    <ListGroup.Item> Top 6% out of 1200, silver medal, in machine learning certiﬁcation conducted by IIT madras NPTEL 2019</ListGroup.Item>
                                    <ListGroup.Item>Paper entitled “Communication Tool for specially disabled using AI” is indexed in SCOPUS </ListGroup.Item>
                                    <ListGroup.Item>Paper entitled “Classical Skin Disease Detection And Classification with Ensembled Vgg” is Accepted by Springer </ListGroup.Item>
                                    <ListGroup.Item>Paper entitled “Eye Disease detection with Yolo and Ensembled Googlenet” is Accepted by Springer </ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                 </Card.Body>
               </Card>
                    </Tab>
              </Tabs>
              </div>
                </div>
                </div>
                </>
          )
       }
    }
export default About;