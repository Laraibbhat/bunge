import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {Carousel,Row,Col,Card,Nav,Button,Table,ListGroup,Form} from  'react-bootstrap';
import {getWeatherData} from '../store/actions/weatherAction';
import {getFeature} from '../store/actions/homeAction';
import {getCashBid} from '../store/actions/homeAction';
import {getAlert} from '../store/actions/homeAction';
import {getAnnouncement} from '../store/actions/homeAction';
import {getCarousel} from '../store/actions/homeAction';
import {getFuture} from '../store/actions/homeAction';
import {getAgricultureNews} from '../store/actions/homeAction';
import {currentWeather} from '../store/actions/weatherAction';

function Home() { 
    
    const dispatch=useDispatch();
    const[formError,setFormError]=useState(null);
    const [formSubmit,setSubmitForm]=useState(false)
    const [data,setData]=useState({city:"",country:""})
    const weatherData=useSelector((state)=>state.weatherReducer.weather)
    const weatherError=useSelector((state)=>state.weatherReducer.weatherError) 
    const featureData=useSelector((state)=>state.featureReducer.features)
    const cashBidDb=useSelector((state)=>state.featureReducer.cashBidData)
    const alertData=useSelector((state)=>state.featureReducer.alert)
    const carouselData=useSelector((state)=>state.featureReducer.carousel);
    const futureData=useSelector((state)=>state.featureReducer.future);
    const agricultureData=useSelector((state)=>state.featureReducer.agriculture)
    const announcementData=useSelector((state)=>state.featureReducer.announcement)
   
    useEffect(()=>{
        dispatch(currentWeather())
        dispatch(getFeature())
        dispatch(getCashBid())
        dispatch(getAlert())
        dispatch(getAnnouncement())
        dispatch(getCarousel())
        dispatch(getFuture())
        dispatch(getAgricultureNews())
    },[dispatch]) 


  

  const hasvalidation=(e)=>{
      let formIsValid=true;
      let error1={};

      if(!data.city){
          formIsValid=false;
          error1["city"]="City is required";
      }
      if(!data.country){
          formIsValid=false;
          error1["country"]="Country is required";
      }
      setFormError(error1)
      return formIsValid
  }

  

    const handleFormSubmit= async (e)=>{ 
        e.preventDefault();
        setSubmitForm(false);
        if(hasvalidation()){
           dispatch(getWeatherData(data)).then(()=>{
            setSubmitForm(true);
            console.log(formSubmit);
        });
        }
    }
    
     
    return (
        <div className="overlay">
        <Row>
            <Col md={9} > 
                <Carousel >
                    { carouselData && carouselData.map((data)=>{
                        return(
                                <Carousel.Item>
                        <img src={data.image} alt="First slide"/>
                    </Carousel.Item>
                        );
                    }) }

                </Carousel>
            </Col>
            <Col md={3} className="test">
                <Card bg={"warning"} style={{height:"100%"}}>
                    <Card.Header><i className="fa fa-bell" aria-hidden="true"></i> Alerts
                    <span className="float-right"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></span></Card.Header>
                    <Card.Body>
                    <Card.Text clasname="card-text">
                        {alertData && alertData.map((data,key)=>{
                            return(
                                    <li key={key}><span>{data.message}</span></li>
                            )
                        })
                        }
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <br/>
        
             <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link href="#first">Information</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">Map</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#" >Staff</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#1">Marketing Options</Nav.Link>
                        </Nav.Item>
                        
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md >
                        <Card>
                            <img src="/images/map.png" alt="map"/>
                        </Card>
                            
                        </Col>
                        <Col md >
                             <Card>
                                <Card.Img variant="top" src="/images/image1.jpg" />
                                <Card.Body>
                                    <Card.Title style={{color:"blue"}}>Bunge Council Bluffs,IA</Card.Title>
                                <Card.Text>
                                    <Row>
                                        <Col ><b>Address</b></Col>
                                        <Col><b> Office Hours</b> </Col>
                                        <Col><b> Receiving Hours</b> </Col>
                                    </Row>
                                    <Row>
                                        <Col >19560 Bunge Ave<br/> Coucil Bluffs,Lowa<br/>Phone:7123663600<br/><br/><span style={{color:"blue"}}> Get Directions <i className="fa fa-arrow-right" aria-hidden="true"></i></span> </Col>
                                        <Col > Monday - Friday <br/> 8 Am - 5 Pm<br/><br/>Saturday-Sunday  Closed</Col>
                                        <Col >Monday-Friday <br/> 7 Am - 7 Pm<br/><br/>Saturday-Sunday  Closed</Col>
                                    </Row>
                                    
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <br/>
            <Row>
                <Col md={4}>
                    <Card  style={{height:"100%",color:"white",backgroundColor:"orange"}}>
                        <Card.Header>
                            <Row>
                                <Form onSubmit={handleFormSubmit}>
                                    <Form.Row>
                                        <Col sm={5}>
                                            <Form.Control placeholder="City" value={data.city}type="text"onChange={(e)=>setData({...data,city:e.target.value})}/>
                                        </Col>
                                        <Col sm={4}>
                                            <Form.Control placeholder="Country" value={data.country} type="text" onChange={(e)=>setData({...data,country:e.target.value})} />
                                        </Col>
                                        <Col sm={1}>
                                            <Button variant="warning" type="submit">Submit</Button>
                                        </Col>
                                    </Form.Row>
                                </Form>
                                {weatherError && <span className="required" >{weatherError}</span>} 
                                    {
                                        formError && <Row className="required">
                                                        <Col md={5}>
                                                            <span>{formError.city } </span>
                                                        </Col>
                                                        <Col md={6}>
                                                            <span>{ formError.country}</span>
                                                        </Col>
                                                    </Row>
                                    }
                            </Row>
                        </Card.Header>
                   
                   { weatherData && <Card.Body >
                      
                            <center style={{fontSize:"25px"}}>
                            <b>{weatherData.city+" " }
                            { weatherData.country }</b><br/>
                            {weatherData.description }</center>

                        <Row>
                            <Col sm={4}>
                            <span ><i className={weatherData.icon} style={{fontSize:"8rem"}}  aria-hidden="true"></i></span>
                            </Col>
                            <Col >
                                <Card.Text clasname="card-text">
                                    <center><br/>
                                        <b> Today<br/>{weatherData.temp_max}&#176; C<br/><br/>
                                        {weatherData.temp_min }&#176; C<br/>
                                        </b>
                                    </center>
                                </Card.Text>
                            </Col>
                        </Row>

                    </Card.Body>}
                   { weatherData && <Card.Footer>
                        <Row>
                            <Col><span className="text-muted">Sunrise</span>  <br/> {weatherData.sunrise  }  </Col>
                            <Col ><span className="text-muted">Sunset</span>  <br/> {weatherData.sunset}  </Col>
                            <Col><span className="text-muted">Dew pt </span>  <br/> 37F  </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col><span className="text-muted">Feels  Like</span>  <br/> { weatherData.feelslike}   </Col>
                            <Col><span className="text-muted">Humid</span>  <br/> { weatherData.humidity}%   </Col>
                            <Col><span className="text-muted">Barom</span>  <br/> {weatherData.barom } </Col>
                        </Row>
                    </Card.Footer>}
                </Card>
                </Col>
                <Col>

                    <Card md style={{height:"100%"}}>
                        <Card.Header >
                            <span className=""><b>Cash Bid</b></span>
                            <div className="float-right cashBid-icons">
                                
                                <span><i className="fa fa-bars" aria-hidden="true"></i></span>
                                <span><i className="fa fa-window-restore" aria-hidden="true"></i></span>
                                
                                <span><i className="fa fa-ellipsis-v" aria-hidden="true"></i></span>
                            </div>
                                
                                    
                            
                        </Card.Header>
                        <Table responsive="sm" >
                            <thead>
                                <tr>
                                    <th>Date</th><th>Products</th><th>Quota</th><th>Basis</th><th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {cashBidDb && cashBidDb.map((data,key)=>{
                                return(
                                        <tr key={key}>
                                <td>{data.date}</td>
                                <td>{data.products}</td>
                                <td>{data.quota}</td>
                                <td>{data.basis}</td>
                                <td></td>
                            </tr>
                                )
                            }) }
                            
                            </tbody>
                        </Table>
                        <center>
                            <Button  className='mb-2'>Register Now</Button>
                        </center>
                        
                    </Card>
                </Col>
            </Row>
            <br/>
                <Card className="announcement-card" style={{backgroundColor:"rgb(53, 47, 47)",color:"white"}}>
                    <Card.Title>ANNOUNCEMENTS

                        <span className="float-right">View All <i className="fa fa-arrow-right" aria-hidden="true"></i></span>
                    </Card.Title>
                    <Row>
                       { announcementData && announcementData.map((data,key)=>{
                           return(
                                <Col md key={key}>
                            <Card>
                                <Card.Img variant="top" src={data.url} height="200" />

                            </Card>
                            <span>{data.message}</span>
                        </Col>
                           )
                       }) }
                       
                        
                    </Row>
                </Card>
                <br/>
                <Row>
                    <Col md={8}>
                        <Card>
                        <Card.Header>
                            <span><b>Future</b></span>
                        </Card.Header>
                        <Table responsive="md">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Products</th>
                                    <th>Last</th>
                                    <th>Change</th>
                                    <th>Graph</th>
                                </tr>
                            </thead>
                            <tbody>
                            { futureData && futureData.map((data)=>{
                                return(
                                        <tr>
                                <td>{data.date}</td>
                                <td>{data.products}</td>
                                <td>{data.last}</td>
                                <td>{data.change}</td>
                                <td></td>
                            </tr>
                                );
                            }) }
                            
                            </tbody>
                        </Table>
                        <center>
                            
                        <Button className="mb-2">View More Futures</Button>
                        </center>
                    </Card>

                    </Col>
                    <Col md={4}>
                       <Card  style={{height:"100%"}}>
                        <Card.Header style={{backgroundColor:"orange"}} >Featured</Card.Header>
                            <ListGroup variant="flush" className="">
                               { featureData && featureData.map((data,key)=>{
                                   return(
                                        <ListGroup.Item className="mt-3" key={key}>
                                    <Row>
                                        <Col sm={2}>
                                            <span className="round-number">{data.id}</span>
                                        </Col>
                                        <Col>
                                        <b>{data.title}</b><br/>
                                        <span className="text-muted">{data.date}</span>
                                            
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                   )}) }
                                
                            </ListGroup> 
                        </Card>
                    </Col>
                </Row>
                <br/>
                <Card className="p-3">
                    <Card.Title>AGRICULTURAL NEWS
                        <span className="float-right"  style={{color:"blue",fontSize:"18px"}}>View All <i className="fa fa-arrow-right" aria-hidden="true"></i></span>
                    </Card.Title>
                    <Row>
                        { agricultureData && agricultureData.map((data)=>{
                            return(
                                <Col md>
                            <Card >
                                <Card.Img variant="top" src={data.url} height="300" />
                                <Card.Body className="carousel-caption ">
                                    <div className="card-footer " >
                                        <Card.Text>{data.message}</Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                            );}) }
                    </Row>
                </Card>
        </div>
        
    )
}

export default Home
