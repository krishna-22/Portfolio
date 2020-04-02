import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loc from './imgs/loc.png'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';




class Contact extends Component {

    render()
    {
        
    return(
        
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content align-items-center">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-0">
                        <h5>Address</h5>
                        <address>
		              Shapur Nagar<br />
		              Near Zeedimaetla,Quthbullapur,Hyderabad<br />
		              Telangana<br />
		              <i className="fa fa-phone fa-lg"></i>: +7013751741<br />
		              <i className="fa fa-envelope fa-lg"></i>:<a href="mailto:goginenisaikiran31677@gmail.com">goginenisaikiran31677@gmail.com</a><br/>
		              <i className="fa fa-envelope fa-lg"></i>:<a href="mailto:goginenikiran11@gmail.com">
                         goginenikiran11@gmail.com</a><br/>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of Location</h5>
                    <img heiht='300px' width='100%' src={loc}></img>
                 </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+7013751741"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:goginenisaikiran31677@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>

               
        </div>
    );}
}

export default Contact;