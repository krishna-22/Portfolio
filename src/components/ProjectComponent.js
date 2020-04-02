import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem,Modal,ModalBody,ModalHeader } from 'reactstrap';
import {Card,CardImg,Button} from 'react-bootstrap';


class Project extends Component
{
   constructor(props)
   {
       super(props);
       this.state={
           
           isModal1Open:false,
           isModal2Open:false,
           isModal3Open:false,
           isModal4Open:false,
           tool:'It will be difficult to interpret sign language made by dumb people for those who are unaware of it. So, this project converts sign language dynamically to English sentences. Each gesture represents an alphabet. Dataset used: ASL American hand gesture dataset. Concepts used: pruned Faster RCNN to detect hand in an image, GRU to predict the word (recommendation) from hand gestures made so far (recommends ‘television’ if hand gestures made so far are [‘t’, ’e’] to reduce time delay), TD IDF VECTORISER to recommend sentences from the words spelt, pyttsx3 API to spell word, Background subtraction.',
           eye:'Our research work has succeeded in integrating ensemble in to google-net image classification technique aiming higher accuracy and performance than existing models. The convolutional layers are apt for feature extraction from images. In GOOGLENET classifier only 1 fully connected dense layer (weak) is used for classification of class from these outputted features. But we integrated ensemble immediately after convolutional layers for purpose of better classification output. Thus, the output (features of image) of convolutional layers is passed as separate input to both ensemble methods and fully connected layers of GOOGLENET for obtaining the class of image. Final class of image is determined by specific strategy after analyzing outputs of ensemble and google-net fully connected layer. All earlier works focused on eye disease classification. Here, we have also experimented with yolo for detection of location and class of diseases.',
           machine:'Used concepts of Attention and encoder2decoder models. Used GRU as both encoder and decoder to convert sequence of characters of text from English to Hindi.',
           waste:'collected dataset of waste (images) from vicinities and from internet. This waste includes garbage containers, cardboards, garbage bags and plastic (covers and bottles). It will be hard for authorities to find where this waste is actually scattered over the city. We built a website so that whenever a citizen notices waste, he can simply click an image and upload it. The inbuilt AI algorithms will calculate the intensity of waste in an image automatically, tracks the location and report the amount of waste (if greater than threshold) to municipal authorities to dispose it safely. concepts used: yolov3 to detect count of waste in an image, POSTGRESQL to store location and amount of waste in database. Frameworks: AWS S3 to store detected images, Django for website.'
       }
       this.toggle1Modal=this.toggle1Modal.bind(this);
       this.toggle2Modal=this.toggle2Modal.bind(this);
       this.toggle3Modal=this.toggle3Modal.bind(this);
       this.toggle4Modal=this.toggle4Modal.bind(this);
   }

   toggle1Modal() {
      
    this.setState({...this.state,
      isModal1Open: !this.state.isModal1Open
    });
  }
  
  toggle2Modal() {
     
    this.setState({...this.state,
      isModal2Open: !this.state.isModal2Open
    });
  }
  
  toggle3Modal() {
    this.setState({...this.state,
      isModal3Open: !this.state.isModal3Open
    });
  }
  
  toggle4Modal() {
    this.setState({...this.state,
      isModal4Open: !this.state.isModal4Open
    });
  }

  
   
       render()
       {
          return(
              <>
              <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Projects</BreadcrumbItem>
                </Breadcrumb>
                
                </div>
                <div className='row'>
                    <div className='col-12  col-md-6 '>
                <Card style={{ width: '20rem' }} bg='info'>
                 <Card.Img height='300px' width='300px' variant="top" src="assets/images/b.jpg" />
                    <Card.Body>
                           <Card.Title>Better Communication Tool</Card.Title>
                           <Card.Text>
                          Implemented a Better Communication Tool for specially disabled such as dumb to let them speak in public places using Artificial Intelligence And Hand-gestures
                           </Card.Text>
                       <Button onClick={this.toggle1Modal} variant="success">Read More</Button>
                 </Card.Body>
               </Card>
               </div>
               <div className='col-12  col-md-6 '>
               <Card style={{ width: '20rem' }} bg='secondary'>
                 <Card.Img height='300px' width='300px' variant="top" src="assets/images/e.jpg" />
                    <Card.Body>
                           <Card.Title>Eye Disease Detection</Card.Title>
                            <Card.Text>
                            Implemented latest object detection and object classification techniques in the domain of Eye Diseases. Proposed other techniques to attain higher accuracy
                       </Card.Text>
                       
                       <Button onClick={this.toggle2Modal} variant="success">Read More</Button>
                 </Card.Body>
               </Card>
              
               </div>
               </div>
               
               <div className='row'>
               <div className='col-12 col-md-6'>
               <Card style={{ width: '20rem' }} bg='danger'
               >
                 <Card.Img height='300px' width='300px' variant="top" src="assets/images/m.jpg" />
                    <Card.Body>
                           <Card.Title>Machine Translation</Card.Title>
                            <Card.Text>
                            Used concepts of Attention and encoder2decoder models. Used GRU as both encoder and decoder to convert sequence of characters of text from English to Hindi
                       </Card.Text>
                       <Button onClick={this.toggle3Modal} variant="success">Read More</Button>
                 </Card.Body>
               </Card>
               </div>
               <div className='col-12 col-md-6 '>
               <Card style={{ width: '20rem' }} bg='success'>
                 <Card.Img height='300px' width='300px' variant="top" src="assets/images/w.jpg" />
                    <Card.Body>
                           <Card.Title>Urban Waste Management</Card.Title>
                            <Card.Text>
                           Collected Urban Waste Dataset. Implemented Faster RCNN tecniques in order to detect amount of waste present in a location and automatically alert municipal department  
                       </Card.Text>
                       <Button onClick={this.toggle4Modal} variant="primary">Read More</Button>
                 </Card.Body>
               </Card>
               </div>
              
            </div>

            <Modal isOpen={this.state.isModal1Open} toggle={this.toggle1Modal}>
              <ModalHeader  toggle={this.toggle1Modal}>Better Communication Tool</ModalHeader>
                    <ModalBody >
                    
               <Card style={{ width: '25rem' }} bg='info'>
               <Card.Img height='300px' width='300px' variant="top" src="assets/images/b.jpg" />
                    <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                {this.state.tool}
                            </Card.Text>
                 </Card.Body>
               </Card>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModal2Open} toggle={this.toggle2Modal}>
              <ModalHeader  toggle={this.toggle2Modal}>Eye Disease Detection</ModalHeader>
                    <ModalBody >
                    
               <Card style={{ width: '25rem' }} bg='secondary'>
               <Card.Img height='300px' width='300px' variant="top" src="assets/images/e.jpg" />
                    <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                {this.state.eye}
                            </Card.Text>
                 </Card.Body>
               </Card>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModal3Open} toggle={this.toggle3Modal}>
              <ModalHeader  toggle={this.toggle3Modal}>Machine Translation</ModalHeader>
                    <ModalBody >
                    
               <Card style={{ width: '25rem' }}bg='danger'>
               <Card.Img height='300px' width='300px' variant="top" src="assets/images/m.jpg" />
                    <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                {this.state.machine}
                            </Card.Text>
                 </Card.Body>
               </Card>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModal4Open} toggle={this.toggle4Modal}>
              <ModalHeader  toggle={this.toggle4Modal}>Urban Waste Management</ModalHeader>
                    <ModalBody >
                    
               <Card style={{ width: '25rem' }} bg='success'>
               <Card.Img height='300px' width='300px' variant="top" src="assets/images/w.jpg" />
                    <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                {this.state.waste}
                            </Card.Text>
                 </Card.Body>
               </Card>
                    </ModalBody>
                </Modal>
     </div>

     </>
          )
       }
    }
export default Project;