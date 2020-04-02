import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                    <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/education'>Education</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Address</h5>
                    <address>
		              Shapur Nagar<br />
		              Near Zeedimaetla,Quthbullapur,Hyderabad<br />
		              Telangana<br />
		              <i className="fa fa-phone fa-lg"></i>: +7013751741<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:goginenisaikiran31677@gmail.com">goginenisaikiran31677@gmail.com</a><br/>
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:goginenikiran11@gmail.com">
                         goginenikiran11@gmail.com</a><br/>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-github" href="http://www.facebook.com/profile.php?id="><i className="fa fa-github"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:goginenisaikiran31677@gmail.com"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;