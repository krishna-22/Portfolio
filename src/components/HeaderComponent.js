import React,{Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
        };
        
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">SAIKIRAN</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg"></span> About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/education'><i class="fa fa-graduation-cap fa-lg"></i> Education</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/certificates'><i class="fa fa-certificate fa-lg"></i> Certifactes</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/projects'><i class="fa fa-tasks fa-lg"></i> Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contact'><span className="fa fa-address-card fa-lg"></span> Contact</NavLink>
                            </NavItem>
                            </Nav>
                    
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div class='row align-items-center'>
                            <div className="col-12 offset-2 col-sm-6 offset-sm-0">
                                <h5>SOFTWARE ENGINEER</h5>
                                <img height='150px' width='150px' class="rounded-circle" src="assets/images/img1.jpeg"></img>
                            </div>
                            <div className="col-12 col-sm-6" >
                                <p>Experienced and productive Full stack Data Scientist with significant skills that contribute to development of an organisation. My goal is to team up with like minded people to come up with products that put significant impact towards future in science and technology</p>
                            </div>
                            </div>
                    </div>
                </Jumbotron>
                         </div>
        );
    }
}
export default Header;