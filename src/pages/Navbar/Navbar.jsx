import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import {RiArrowDropDownLine} from 'react-icons/ri'
const Navbar = () => {
  const [feature, setFeature] = useState(false);
  const [downArrow, setArrow] = useState(false);
  
  let navigate = useNavigate();

 
  
  const homepath = () => {
    navigate('/');
  };



    return (
    <div className='navbar__container lg:flex '>
          <div className='navbar__logo' onClick={homepath}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg" className=' m-auto h-10 w-48 my-3 hover:cursor-pointer' alt="logo" />
          </div>

      <div className="navbar__buttons text-sm lg:flex">
              <Link to='/integrations' className='navbar__links '>INTEGRATIONS</Link>
              <Link to='/blog' className='navbar__links '>BLOG</Link>
              
        <div className='feature__container'>
                  
        <div style={{ display: 'flex', justifyContent: 'center',alignItems:'center' }}>
            <p style={{display:"flex"}} className='navbar__links' onMouseEnter={() => setFeature(!feature)} 
            >FEATURES
           </p>  <img width="16px" height="1px" src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/arrow-icon.png" alt="" />
            
        </div>
        

                  
<div onMouseLeave={()=>setFeature(false)
            } className={feature ? "feature__menu feature__menu-open" : "feature__menu feature__menu-close"}>
    <ul className='feature__list'>
        <li className='feature__item'>
            <Link to='/features/timetracker' className='navbar__links Fitem'>Time Tracker</Link>
        </li>
        <li className='feature__item'>
            <Link to='/features/projectmanagement' className='navbar__links Fitem'>Project Management</Link>
        </li>
        <li className='feature__item'>
            <Link to='/features/onlinetimesheet' className='navbar__links Fitem'>Online Timesheet</Link>
        </li>
        <li className='feature__item'>
            <Link to='/features/timecards' className='navbar__links Fitem'>Time cards</Link>
        </li>
        <li className='feature__item'>
            <Link to='/features/attendancetracking' className='navbar__links Fitem'>Attendance tracking</Link>
        </li>
          <li className='feature__item'>
              <Link to='/' className='navbar__links Fitem'>Time reporting</Link>
          </li>
      </ul>
  </div>
                </div>  
              <button className='navbar__tryit '><Link to="/signup" >TRY IT FOR FREE </Link> </button>
              <button className='navbar__tryit navbar__links' id='Login__button' ><Link to = "/login"> Login </Link></button>
              </div>
        
 </div>

  )
};


export default Navbar;
