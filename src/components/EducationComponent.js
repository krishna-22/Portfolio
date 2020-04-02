import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Tab,Tabs} from 'react-bootstrap';

class Education extends Component
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
                    <BreadcrumbItem active>Education</BreadcrumbItem>
                </Breadcrumb>
                </div>
            <div className="row">
                <div className='col-12'>
                <Tabs defaultActiveKey="BTECH" id="uncontrolled-tab-example">
                    <Tab eventKey="BTECH" title="BTECH">
                    <dl className='container'>
                          <div className='row'><div className='col-4 offset=2'>
                          <dt>School: </dt> </div>
                          <div class='col-6'><dd>CMR College of Engineering And Technology</dd></div></div>
                          <div className='row'><div class='col-4'><dt>CGPA: </dt> </div><div class='col-6'><dd>9.3</dd></div></div>
                          <div className='row '><div class='col-4'><dt>Degree </dt> </div><div class='col-6'><dd>Bachelor of Technology</dd></div></div>
                          <div className='row '><div class='col-4'><dt>Branch: </dt> </div><div class='col-6'><dd>Computer Science</dd></div></div>
                          <div className='row '><div class='col-4'><dt>Duration: </dt> </div><div class='col-6'><dd>2017-2021</dd></div></div>
                      </dl>
                    </Tab>
                    <Tab eventKey="Intermediate" title="Intermediate">
                    <div className='container'>
                   <dl>
                         <div className='row'><div className='col-4 offset=2'>
                          <dt>School: </dt> </div>
                          <div class='col-6'><dd>Sri Chaitanya Junior College</dd></div></div>
                          <div className='row'><div class='col-4'><dt>Percentage: </dt> </div><div class='col-6'><dd>97.2%</dd></div></div>
                          <div className='row '><div class='col-4'><dt>Degree </dt> </div><div class='col-6'><dd>Intermediate</dd></div></div>
                          <div className='row '><div class='col-4'><dt>Branch: </dt> </div><div class='col-6'><dd>MPC</dd></div></div>
                          <div className='row '><div class='col-4'><dt>Duration: </dt> </div><div class='col-6'><dd>2015-2017</dd></div></div>
                      </dl>
               </div>
                   </Tab>
                 <Tab eventKey="Tenth" title="Tenth">
                 <dl className='container'>
                          <div className='row'><div className='col-4 offset=2'>
                          <dt>School: </dt> </div>
                          <div class='col-6'><dd>Nellore's Ravindra Bharathi School</dd></div></div>
                          <div className='row'><div class='col-4'><dt>CGPA: </dt> </div><div class='col-6'><dd>10</dd></div></div>
                          <div className='row '><div class='col-4'><dt>Degree </dt> </div><div class='col-6'><dd>Tenth</dd></div></div>
                          <div className='row '><div class='col-4'><dt>Board: </dt> </div><div class='col-6'><dd>AndhraPradesh State Board</dd></div></div>
                          <div className='row '><div class='col-4'><dt>Duration: </dt> </div><div class='col-6'><dd>2014-2015</dd></div></div>
                      </dl>
                 </Tab>
               </Tabs>
                      
            </div>
        </div>
        <br/>
        <div className='Row'>
            <div className='col-12'>
            <div class="table-responsive">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>&nbsp;</th>
                                <th>BTECH</th>
                                <th>Intermediate</th>
                                <th>Tenth</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>CGPA</th>
                                <td>9.3</td>
                                <td>97.2%</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <th>Branch</th>
                                <td>CSE</td>
                                <td>MPC</td>
                                <td>--</td>
                            </tr>
                            <tr>
                                <th>PassOut</th>
                                <td>2021</td>
                                <td>2017</td>
                                <td>2015</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
        </>
          )
       }
   }

export default Education;