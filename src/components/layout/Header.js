import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {Carousel,Row,Col,Card,Nav,Button,Table,ListGroup,Form} from  'react-bootstrap';
import {SidebarData} from './SidebarData';
import './Navbar.css';

function Header() {
    const [sidebar, setSidebar] = useState(false);
    

    const handleClick=()=>{
        console.log("hiiii");
        setSidebar(!sidebar);
    } 

    return (
        <div className="header-nav">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand mr-auto" href="/">
                    <img src="/images/headerLogo.gif"height="30" alt="BungeLogo"/>
                </a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Markets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Products & Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Registration</a>
                        </li>
                    </ul>
                    
                    <div className="my-2 my-lg-0">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="/"> <i className="fa fa-search" aria-hidden="true"></i></a></li>
                            <li className="nav-item"><a className="nav-link" href="/"> <i className="fa fa-cog" aria-hidden="true"></i></a></li>
                            <li className="nav-item"><a className="nav-link" href="/"> <i className="fa fa-map-marker" aria-hidden="true"></i></a></li>
                            <li className="nav-item"><a className="nav-link" href="#">
                                <img src="/images/man.png" alt="userprofile"  height="30" onClick={handleClick} /> </a></li>
                        
                        </ul>
                        

                    </div>
                </div>
            </div>
                
            </nav>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={handleClick}>
              <Row className='mb-3'>
                  <Col className="col-sm-10">
                    <h3>User Profile</h3>
                  </Col>
                  <Col >
                    <i class="fa fa-times " aria-hidden="true" onClick={handleClick}></i>
                  </Col>
              </Row>
            <Row>
                <Col class="col-2">
                    <img src="/images/man.png" size="50" height="70" alt="image"/>
                </Col>
                <Col>
                    <span>Laraib Mushtaq</span><br/>
                    <span>Admin</span><br/>
                    <span>lmushtaq10@gmail.com</span><br/>
                </Col>
            </Row>
            <hr/>
            
            <div className="account-info">
            {SidebarData.map((item, index) => { 
              return (
                    <Link to={item.path}>

                <Row>
                    <Col className="col-sm-3">
                        <span>{item.icon}</span>
                    </Col>
                    <Col>
                        <li key={index} /*className={item.cName}*/>
                            
                            <span> <strong>{item.title}</strong></span><br/>
                            <span><small> {item.description}</small></span>
                            
                        </li>
                    </Col>
                   
                </Row>
                 </Link>
                
              );
            })}
            </div>
            <Button variant="outline-primary">Sign Out</Button>
            <hr/>
            
          <h3 className="mb-2">Recent Notification</h3>
          <Card  className="mb-2" style={{backgroundColor:"rgb(241, 241, 163)"}}>
              <Card.Title className="pl-3">Important Notice</Card.Title>
              <Card.Text clasname="card-text">
                    <span>Lorem ipsum dolor, sit amet consectet ur adipisicing elit.</span>
               </Card.Text>
          </Card>
          <Card  className="mb-2" style={{backgroundColor:"rgb(241, 241, 163)"}}>
              <Card.Title className="pl-3">Important Update</Card.Title>
              <Card.Text clasname="card-text">
                    <span>Lorem ipsum dolor,sit amet consectet ur adipisicing elit. </span>
               </Card.Text>
          </Card>
          <Card  className="mb-2" style={{backgroundColor:"rgb(241, 241, 163)"}}>
              <Card.Title className="pl-3">Important Notice</Card.Title>
              <Card.Text clasname="card-text">
                    <span >Lorem ipsum dolor, sit amet consectet ur adipisicing elit.</span>
               </Card.Text>
          </Card>
          
          </ul>
        </nav>
            

        </div>
    )
}

export default Header
