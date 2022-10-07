import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';

import Integrations from '../pages/Integrations/Integrations';
import Blog from '../pages/Blog/Blog';
import Timetracker from '../pages/Features/Timetracker';
import Timemanagement from '../pages/Features/Timemanagement';
import Onlinetimesheet from '../pages/Features/OnlineTimeSheet';
import Login from '../pages/login/Login';
import Signup from '../pages/login/Signup';
import Todo from '../pages/Timetrak/Todo';
import { Productivity } from '../pages/Blog/BlogPages/Productivity';
import RemoteWork from '../pages/Blog/BlogPages/RemoteWork';
import Practices from '../pages/Blog/BlogPages/Practices';
import Resources from '../pages/Blog/BlogPages/Resources';
import Timecards from '../pages/Features/Timecards';
import Attendancetracking from '../pages/Features/Attendancetracking';
import Mapy from '../pages/mapy/Mapy';
import PrivateRout from './PrivateRout';

const AllRoutes = () => {
  return (
    <Routes>
          <Route path='/' element={<Home />} />     
          <Route path='/integrations' element={<Integrations />} />     
          <Route path='/blog' element={<Blog />} />     
          <Route path='/features/timetracker' element={<Timetracker />} />     
          <Route path='/features/projectmanagement' element={<Timemanagement />} />     
          <Route path='/features/onlinetimesheet' element={<Onlinetimesheet/>} />     
          <Route path='/features/timecards' element={<Timecards />} />  
          <Route path='/features/attendancetracking' element={<Attendancetracking />} />  
          <Route  path = "/login" element={<Login/>}/>   
          <Route path ="/Signup" element={<Signup/>} />
              {/*  Blog navbar routes */}
          <Route path='/productivity' element={<Productivity />} />     
          <Route path='/remotework' element={<RemoteWork />} />     
          <Route path='/practices' element={<Practices />} />     
          <Route path='/resources' element={<Resources />} />    
          <Route path='/task' element={<PrivateRout><Todo /></PrivateRout>} />
          <Route path='/workout' element={<PrivateRout><Mapy /></PrivateRout>} />

    </Routes>
  );
};

export default AllRoutes;
