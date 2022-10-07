import React from 'react'
import './footer.css'
import {AiFillLinkedin,AiFillFacebook,AiFillTwitterSquare,AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer__main' style={{backgroundColor:"#f6f8f9"}}>
        <div className='footer__container'>
              <div className='upper__container' >
                  <div className='upper__content'>
                      <h2>Industries</h2>
                      <p>Time tracking for Graphic Designers</p>
                      <p>Time tracking software for Architects</p>
                      <p>Time tracking for Remote Workers</p>
                      <p>Time tracking for Marketing Teams</p>
                      <p>Time tracking for Freelancers</p>
                  </div>
                  
                  
                  <div className='upper__content'>
                      <h2>Product</h2>
                      <p>Plans & Pricing</p>
                      <p>Integrations</p>
                      <p>Product Updates</p>
                      <p>Slack Bot</p>
                      <p>Microsoft Teams</p>
                  </div>
                  
                  
                  <div className='upper__content'>
                      <h2>Features</h2>
                      <p>Online Timesheet For Efficient Companies</p>
                      <p>Time Tracker for every business</p>
                      <p>Reports for billing and payroll to reduce</p>
                      <p>administrative work</p>
                      <p>Attendance tracker for every business</p>
                      <p>Project Management Time Tracking Software</p>
                  </div>
                  
                  <div className='upper__content'>
                      <h2>Apps</h2>
                      <p>Web App</p>
                      <p>Time Tracker app for Mac</p>
                      <p>Time Tracker for Windows</p>
                      <p>iPhone app</p>
                      <p>Android app</p>
                      <p>Time Tracking for Chrome</p>
                      <p>Time Tracking for Firefox</p>
                      <p>Time Tracking for Safari</p>
                  </div>
                  

                  <div className='upper__content'>
                      <h2>Company</h2>
                      <p>About Us</p>
                      <p>Blog</p>
                      <p>Media kit</p>
                      <p>Terms of service</p>
                      <p>Privacy Policy</p>
                      <p>DMCA Policy</p>
                      <p>Impressum</p>
                  </div>

              </div>

              <div className='lower__container'>
                  <div className="footer__logos">
                      <div className='footer__socialIcons'>
                        <i><AiFillTwitterSquare /></i>
                        <i><AiFillLinkedin /></i>
                        <i><AiFillFacebook/></i>                     
                      </div>

                      <a href="#">support@trackingtime.co</a>
                      <p><AiOutlineCopyrightCircle/>2022 TrackingTime, LLC</p>
                  </div>

                  <div>
                    <div className='upper__content'>
                        <h2>Help & Support</h2>
                        <p>Help Center</p>
                        <p>Developers</p>
                        <p>Contact Us</p>

                    </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Footer