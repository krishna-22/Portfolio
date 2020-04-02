import React,{ Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Education from './EducationComponent';
import Home from './HomeComponent';
import Certificate from './CertificateComponent';
import Project from './ProjectComponent';
import About from './AboutComponent';

class Main extends Component {
  
  render(){
      return(
      <>
         <Header/>  
          <Switch>
              <Route exact path='/home' component={Home} />} />
              <Route exact path='/about' component={About} />} />
              <Route exact path='/certificates' component={Certificate} />} />
              <Route exact path='/projects' component={Project} />} />
              <Route exact path='/education' component={Education} />} />
              <Route exact path='/contact' component={Contact} />} />
              <Redirect to="/home" />
          </Switch>
          <Footer/>
    </>);
  };
}
export default Main;