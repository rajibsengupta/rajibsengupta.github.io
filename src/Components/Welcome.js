import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Carousel, Row, Col, Thumbnail, Image, Grid, Button, Modal, Badge, FormControl, ControlLabel} from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';

import {NavLink} from 'react-router-dom';
import './Custom.css';



export default class About extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }




  render() {
    return (
    <div>
	  <Scrollspy items={ ['section1', 'section2', 'section3'] } currentclassName="is-current">
	  <nav className="navbar navbar-inverse navbar-fixed-top">
	  <div className="container-fluid">
	  <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="/">WebSiteName</a>
    </div>

	  <div>
	      <div className="collapse navbar-collapse" id="myNavbar">
	        <ul className="nav navbar-nav navbar-right">
	          <li><a href="#section0">Home</a></li>
	          <li><a href="#section1">Design</a></li>
	          <li><a href="#section2">Tools</a></li>
	          <li><a href="#section3">Teaching</a></li>
	          <li><a href="#section4">Inspiration</a></li>
	          <li><a href="#section5">Interest</a></li>
	          <li><a href="#section6">Profile</a></li>
	          <li><a href="#section7">Contact</a></li>
	        </ul>
	      </div>
    	</div>
	   </div>
	   </nav>
	  </Scrollspy>
	 <div id="section0" className="container-fluid">
	  		<Grid>
	  		<Row>
	  			<Carousel>
			  <Carousel.Item>
			    <img width={1200} height={300} alt="900x500" src="../assets/slide1.jpg" />
			    <Carousel.Caption>
			      <i>Our Moto</i>
			      <h2>I make heavenly UX come alive thus enabling greater wealth for U & I.</h2>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img width={1200} height={300} alt="900x500" src="../assets/slide2.jpg" />
			    <Carousel.Caption>
			      <i>Our Moto</i>
			      <h2>I make heavenly UX come alive thus enabling greater wealth for U & I.</h2>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item>
			    <img width={1200} height={300} alt="900x500" src="../assets/slide4.jpg" />
			    <Carousel.Caption>
			     <i>Our Moto</i>
			      <h2>I make heavenly UX come alive thus enabling greater wealth for U & I.</h2>
			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>
	  		</Row>
	  		</Grid>
	</div>
	
	<div id="section1" className="container-fluid">
	  <div className="wrapper">
	  <h1>How I Design <Badge>?</Badge></h1>
	   <div className="modal-container" style={{ height: 200 }}>
        <Grid>
        	<Row>
	        <h3 style={{textAlign:"center", "color": "blue" ,  textShadow: "2px 2px 5px red"}}>** Research Work **</h3>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Competetive Analysis
	        </Col>
	        <Col xs={12} md={1} className="glyphicon glyphicon-arrow-right"></Col>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Data Analysis
	        </Col>
	        <Col xs={12} md={1} className="glyphicon glyphicon-arrow-right"></Col>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          User Feedback
	        </Col>
	        </Row>
        </Grid>
        <Grid>
        	<Row>
	        <h3 style={{textAlign:"center", "color": "blue" ,  textShadow: "2px 2px 5px red"}}>** Planning Procedure **</h3>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	        	User Stories
	        </Col>
	        <Col xs={12} md={1} className="glyphicon glyphicon-arrow-right"></Col>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          User flows
	        </Col>
	        <Col xs={12} md={1} className="glyphicon glyphicon-arrow-right"></Col>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Red Routes
	        </Col>
	        </Row>
        </Grid>
        <Grid>
        	<Row>
	        <h3 style={{textAlign:"center", "color": "blue" ,  textShadow: "2px 2px 5px red"}}>** Exploring Ideas **</h3>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Brainstorm & Sketch
	        </Col>
	        <Col xs={12} md={1} className="glyphicon glyphicon-arrow-right"></Col>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Wireframe
	        </Col>
	        <Col xs={12} md={1} className="glyphicon glyphicon-arrow-right"></Col>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Prototype
	        </Col>
	        </Row>
        </Grid>
        <Grid>
        	<Row>
	        <h3 style={{textAlign:"center", "color": "blue" ,  textShadow: "2px 2px 5px red"}}>** Communicate **</h3>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          IA
	        </Col>
	        <Col xs={12} md={1} className="glyphicon glyphicon-arrow-right"></Col>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Language
	        </Col>
	        <Col xs={12} md={1} className="glyphicon glyphicon-arrow-right"></Col>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Accessibility
	        </Col>
	        </Row>
        </Grid>
        <Grid>
        	<Row>
	        <h3 style={{textAlign:"center", "color": "blue" ,  textShadow: "2px 2px 5px red"}}>** Create **</h3>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          UI Elements
	        </Col>
	        <Col xs={12} md={1} className="glyphicon glyphicon-arrow-right"></Col>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Gestures
	        </Col>
	        <Col xs={12} md={1} className="glyphicon glyphicon-arrow-right"></Col>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Responsiveness
	        </Col>
	        </Row>
        </Grid>
        <Grid>
        	<Row>
	        <h3 style={{textAlign:"center", "color": "blue" ,  textShadow: "2px 2px 5px red"}}>** Give Feedback **</h3>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Waiting Times
	        </Col>
	        <Col xs={12} md={1} className="glyphicon glyphicon-arrow-right"></Col>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Errors
	        </Col>
	        <Col xs={12} md={1} className="glyphicon glyphicon-arrow-right"></Col>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Completed Actions
	        </Col>
	        </Row>
        </Grid>
        <Grid>
        	<Row>
	        <h3 style={{textAlign:"center", "color": "blue" ,  textShadow: "2px 2px 5px red"}}>** Finalise **</h3>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Finalise Layout
	        </Col>
	        <Col xs={12} md={1} className="glyphicon glyphicon-arrow-right"></Col>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Use Of Images & Icons 
	        </Col>
	        <Col xs={12} md={1} className="glyphicon glyphicon-arrow-right"></Col>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Fonts & Colors Hierarchy
	        </Col>
	        </Row>
        </Grid>
        <Grid>
        	<Row>
	        <h3 style={{textAlign:"center", "color": "blue" ,  textShadow: "2px 2px 5px red"}}>** Delight **</h3>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Micro Copy
	        </Col>
	        <Col xs={12} md={1} className="glyphicon glyphicon-arrow-right"></Col>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Micro Interactions
	        </Col>
	        <Col xs={12} md={1} className="glyphicon glyphicon-arrow-right"></Col>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Transitions
	        </Col>
	        </Row>
        </Grid>
        <Grid>
	        <h3 style={{textAlign:"center", "color": "blue" ,  textShadow: "2px 2px 5px red"}}>** Analyse **</h3>
	        <Row>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          KPI Set Up
	        </Col>
	        <Col xs={12} md={1} className="glyphicon glyphicon-arrow-right"></Col>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          AB Test Plan
	        </Col>
	        <Col xs={12} md={1} className="glyphicon glyphicon-arrow-right"></Col>
	        <Col xs={12} md={3} className="designdiv hoverable" onClick={() => this.setState({ show: true })}>
	          Test
	        </Col>
	        </Row>
        </Grid>
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
             	Your Process Name
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Add Desired Details as your choice.........
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
	</div>
	</div>
	</div>
	<br/><br/>

	<div id="section2" className="container-fluid">
	  <div className="wrapper">
	  <h1>Tools I Use<Badge>!</Badge></h1>
	  <Grid>
	  	<Row>
	  	<Image src="../assets/tools.png" width={1100} height={700} responsive/>
	  	</Row>
	  </Grid>
	  </div>
	</div>
	<br/><br/>

	<div id="section3" className="container-fluid">
	  <h1>How I Give Back <Badge>?</Badge></h1>
	  <Grid>
	  	<Row>
	  		<Col xs={12} md={3}>
      			<Thumbnail style={{"maxWidth":"100%", "height": "500px"}} alt="171x180" src="../assets/maropost2.png" rounded="true">
      				<h3 style={{textAlign:"center", "color": "blue" ,  textShadow: "2px 2px 5px #006400	"}}>Maropost</h3>
      				<p>I’m currently working on their design system.</p>
      			</Thumbnail>
    		</Col>
    		<Col xs={12} md={3}>
      			<Thumbnail style={{"maxWidth":"100%", "height": "500px"}}  alt="171x180" src="../assets/comingsoon.png" rounded="true">
      				<h3 style={{textAlign:"center", "color": "blue" ,  textShadow: "2px 2px 5px #006400	"}}>UXelerate</h3>
      				<p>A fellowship program for intermediate-level product designers looking to make social impact.</p>
      			</Thumbnail>
    		</Col>
    		<Col xs={12} md={3}>
      			<Thumbnail style={{"maxWidth":"100%", "height": "500px"}} alt="171x180" src="../assets/blockchain.png" rounded="true" >
      				<h3 style={{textAlign:"center", "color": "blue" ,  textShadow: "2px 2px 5px #006400	"}}>BlockchainHub</h3>
      				<p>I’ll be the lead instructor of their Certified Blockchain Designer course.</p>
      			</Thumbnail>
    		</Col>
    		<Col xs={12} md={3}>
      			<Thumbnail style={{"maxWidth":"100%", "height": "500px"}} alt="171x180" src="../assets/crypto.png" rounded="true" >
      				<h3 style={{textAlign:"center", "color": "blue" ,  textShadow: "2px 2px 5px #006400"}}>CryptoCanucks</h3>
      				<p>A part-time freelance gig.</p>
      			</Thumbnail>
    		</Col>
	  	</Row>
	  </Grid>
	</div>
	<br/><br/>

	<div id="section4" className="container-fluid">
	  <div className="wrapper">
	  	<h1>How Do I Inspire <Badge>?</Badge></h1>
	  		<Grid>
	  			<Row>
	  			<Carousel>
				  <Carousel.Item>
				    <img width={1200} height={300} alt="900x500" src="../assets/podcamp.png" />
				    <Carousel.Caption>
				      <h2>PodCamp 2018</h2>
				      <h4>I spoke about blockchain and circular design/economy.</h4>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img width={1200} height={300} alt="" src="../assets/carousel.jpg" />
				    <Carousel.Caption>
				      <h2>Rotaract Club of Toront</h2>
				      <h4> I’ll be giving a virtual meeting all about blockchain and cryptocurrency.</h4>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img width={1200} height={300} alt="" src="../assets/carousel.jpg" />
				    <Carousel.Caption>
				      <h2>University of Toronto Business Association</h2>
				      <h4>I’ll be giving a talk in front of undergraduates about blockchain and cryptocurrency.</h4>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img width={1200} height={300} alt="900x500" src="../assets/ethuoft.png" />
				    <Carousel.Caption>
				      <h2>ETHUofT</h2>
				      <h4>I’ll be a speaker for their inaugural hackathon.</h4>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img width={1200} height={300} alt="900x500" src="../assets/royal.png" />
				    <Carousel.Caption>
				      <h2>The Royal Jungle</h2>
				      <h4>I’ll be a moderator for a panel of blockchain experts.</h4>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img width={1200} height={300} alt="900x500" src="../assets/blockchain2.png" />
				    <Carousel.Caption>
				     <h2>Blockchain & Bitcoin 2018</h2>
				      <h4>I’m an invited speaker.</h4>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img width={1200} height={300} alt="900x500" src="../assets/manymore.jpg" />
				  </Carousel.Item>			  
			</Carousel>
			</Row>
	  		</Grid>
	  </div>
	</div>

	<br/><br/>

	<div id="section5" className="container-fluid">
		<div className="wrapper">
			<h1>How I Unwind <Badge>?</Badge></h1>
			<Grid>
				<Row>
				<Carousel>
				  <Carousel.Item>
				  <div className="container2">
				    <img width={1200} height={500} alt="900x500" className="sillyvalley" src="../assets/carousel2.jpg" />
				     <div className="middle">
    					<div className="text">Coming Soon</div>
  					</div>
  				</div>
				    <Carousel.Caption>
				      <h3>Silly Valley</h3>
				      <p>A multimedia project that’s all about satirizing the worlds of entrepreneurship and entertainment.</p>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img width={1200} height={500} alt="900x500" src="../assets/carousel4.jpg" />
				    <Carousel.Caption>
				      <h3>Presntations</h3>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img width={1200} height={500} alt="900x500" src="../assets//carousel.jpg" />
				    <Carousel.Caption>
				      <h3 >Articles/Blogs. Link Will be there</h3>
				      <a href="https://medium.com/@tosfan4ever/my-current-product-design-portfolio-90d62377473" target="_blank">See Here</a>
				    </Carousel.Caption>
				  </Carousel.Item>
				</Carousel>
				</Row>
			</Grid>
		</div> 
	</div>
	<br/><br/>

	<div id="section6" className="container-fluid">
		<h1>My Profile</h1>
		<Grid>
			<Row>
				<Col xs={12} md={4} className="pro1">
				 <Thumbnail>
				  	<Image style={{"marginLeft":"5px"}} src="../assets/profile.png" alt="242x200" circle/>
			        <p style={{"fontSize":"15px", "color":"blue" , "textAlign":"center"}}>Tian-Yuan Zhao</p>
			     </Thumbnail>
				</Col>
				<Col xs={12} md={8} className="pro2">
					<article>
						<blockquote className="description">
							<span className="dropcap">I </span>love product design, blockchain, and social innovation aspiring to become a digital engineer - someone who lies at the cross-section of data, design, and development. I'm a lifelong learner, passionate about exponential-thinking, design-thinking, and systems-thinking. I am what you may call an "innovation-thinker". I'm also a writer, singer, pianist - artist and performer overall; a comforter, philosopher, and lifelong mate. At the end of the day I'm young, scrappy, and hungry makin' it in the big city of the 6ix.
						</blockquote>
					</article>
				</Col>
			</Row>
		</Grid>  
	</div>




	<div id="section7" className="container-fluid">
	  <h1>Get In Touch <Badge>!</Badge></h1>
	  	<Grid>
	  		<Row>
	  			<Col className="contacts" xs={12} md={8}>
	  			<form action="https://portfolio.us17.list-manage.com/subscribe/post?u=f9422a310acd554d2e1caa631&amp;id=c39a80176a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
	  				<ControlLabel>Connect With Us</ControlLabel>
					  <input type="submit" value="Connect" name="subscribe" id="mc-embedded-subscribe" className="button" bsStyle="success"/>
	  			</form>
	  			</Col>
	  		</Row>
	  	</Grid>
	</div>
	</div>
    );
  }

}
//can refer https://scotch.io/tutorials/build-a-custom-javascript-scrollspy-navigation
//mailchimp account password-> mA123456#
//mailchimp api key----> 9f1418d38335963460238eeb0b1af491-us17 
