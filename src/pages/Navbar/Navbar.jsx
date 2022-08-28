import React, { useState } from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import {RiArrowDropDownLine} from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { LOGINFAILURE } from '../login/actiontype'
const Navbar = () => {
  const [feature, setFeature] = useState(false);
  const [downArrow, setArrow] = useState(false);
  const { isAuth } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const homepath = () => {
    navigate('/');
  };

  const handlelogin = () => {
    if (isAuth === true) {
      dispatch({ type: LOGINFAILURE });
    } else {
      navigate('/login');
    }
  };



    return (
    <div className='navbar__container lg:flex '>
          <div className='navbar__logo' onClick={homepath}>
              <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/logo.svg" className=' m-auto h-10 w-48 my-3' alt="logo" />
          </div>

          <div className="navbar__buttons text-sm lg:flex">
                {/* <a href="#" className='navbar__links'>INTEGRATIONS</a> */}
                <Link to='/integrations' className='navbar__links '>INTEGRATIONS</Link>
                <br />
                <Link to='/blog' className='navbar__links '>BLOG</Link>
              {/* <a href="#" className='navbar__links'>BLOG</a> */}
                
                <div className='feature__container'>
                    
                    <div style={{ display: 'flex', justifyContent: 'center',alignItems:'center' }} onClick={() => setArrow(!downArrow)}>
                        <p className='navbar__links' onClick={() => setFeature(!feature)}>FEATURES</p>
                        <i className={downArrow?"downIconUp":"downIconDown"}><RiArrowDropDownLine className='h-10 w-10' style={{color:'#00AD95'}}/></i>
                    </div>
                    
                    <div className={feature ? "feature__menu feature__menu-open" : "feature__menu feature__menu-close"}>
                        <ul className='feature__list'>
                            <li className='feature__item'>
                                {/* <a href="#" className='navbar__links Fitem'>Time Tracker</a> */}
                                <Link to='/timetracker' className='navbar__links Fitem'>Time Tracker</Link>
                            </li>
                            <li className='feature__item'>
                                {/* <a href="#" className='navbar__links Fitem'>Project Management</a> */}
                                <Link to='/projectmanagement' className='navbar__links Fitem'>Project Management</Link>
                            </li>
                            <li className='feature__item'>
                                {/* <a href="#" className='navbar__links Fitem'>Online Timesheet</a> */}
                                <Link to='/onlinetimesheet' className='navbar__links Fitem'>Online Timesheet</Link>
                            </li>
                            <li className='feature__item'>
                                {/* <a href="#" className='navbar__links Fitem'>Time cards</a> */}
                                <Link to='/timecards' className='navbar__links Fitem'>Time cards</Link>
                            </li>
                            <li className='feature__item'>
                                {/* <a href="#" className='navbar__links Fitem'>Attendance tracking</a> */}
                                <Link to='/attendancetracking' className='navbar__links Fitem'>Attendance tracking</Link>
                            </li>
                            <li className='feature__item'>
                                {/* <a href="#" className='navbar__links Fitem'>Time reporting</a> */}
                                <Link to='/timereporting' className='navbar__links Fitem'>Time reporting</Link>
                            </li>
                        </ul>
                    </div>
                </div>  
              <button className='navbar__tryit '>TRY IT FOR FREE</button>
              <button className='navbar__tryit navbar__links' id='Login__button' onClick={handlelogin}>{isAuth?"Logout":"Login"}</button>
              </div>
 </div>
  )

};


export default Navbar;
