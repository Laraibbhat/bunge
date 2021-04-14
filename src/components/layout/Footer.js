import React from 'react'

function Footer() {
    return (
        <div className="container">
            <div className="row">
                
                <div className="col-4 footer-app">
                    <h5>Want a better Experience?</h5>
                    <h5><b>Download the app</b></h5> 
                    
                    <div className="row">
                        <a className="navbar-brand " href="https://play.google.com/store/apps/details?id=com.whatsapp&hl=en_IN&gl=US" target="_blank" rel="noreferrer"><img src="/images/playstore.png" width="125" alt="BungeLogo" /></a>
                        <a className="navbar-brand " href="https://apps.apple.com/in/app/whatsapp-messenger/id310633997" target="_blank" rel="noreferrer" ><img src="/images/appstore.png" width="125" alt="BungeLogo" /></a>
                    </div>
        
                </div>
                <div className="col-8 footer-card ">
                    <div className="">
                        <div className="row" style={{marginBottom:"50px"}}>
                            <a className="navbar-brand " href="/" ><img src="/images/headerLogo.gif" alt="BungeLogo" /></a>
                        </div>
                        
                    <div className="row">
                        <div className="col">
                            <li><a href="https://www.bunge.com/who-we-are" target="_blank" rel="noreferrer">About</a></li>

                        </div>
                        <div className="col">

                        <span>Help</span>
                        </div>
                        <div className="col">
                           <span>Contact Details</span>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <li><a href="https://www.bunge.com/our-businesses" target="_blank" rel="noreferrer">Our Business</a></li>

                        </div>
                        <div className="col">

                        {/*<span>Contact US</span>*/}
                        
                           <li><a href="https://www.bunge.com/contacts" target="_blank" rel="noreferrer">Contact US</a></li>
                        </div>
                        <div className="col">
                            <span className="text-muted">Call: </span><span>712-366-8831</span>
                        </div>

                    </div> 
                    <div className="row">
                        <div className="col">
                            <li><a href="https://www.bunge.com/careers" target="_blank" rel="noreferrer">Careers</a></li>

                        </div>
                        <div className="col">

                        <span>Mobile</span>
                        </div>
                        <div className="col">
                            <span className="text-muted" >Social Media</span>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <li><a href="https://www.bunge.com/news" target="_blank" rel="noreferrer">News</a></li>

                        </div>
                        <div className="col">
                            <li><a href="https://www.bunge.com/privacy" target="_blank" rel="noreferrer">News</a></li>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col-1">
                                <span><i className="fa fa-facebook"></i></span>
                            </div>
                            <div className="col-1">
                               <span><i className="fa fa-twitter"></i></span> 
                            </div>
                            <div className="col-1">
                                 <span><i className="fa fa-youtube"></i></span>
                            </div>
                            </div>
                            
                             
                            
                           
                        </div>

                    </div>
                    </div>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Footer
