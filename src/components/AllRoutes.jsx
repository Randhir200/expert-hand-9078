import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../pages/Blog/Blog'
import Practices from '../pages/Blog/BlogPages/Practices'
import { Productivity } from '../pages/Blog/BlogPages/Productivity'
import RemoteWork from '../pages/Blog/BlogPages/RemoteWork'
import Resources from '../pages/Blog/BlogPages/Resources'
import Timemanagement from '../pages/Features/Timemanagement'
import Timetracker from '../pages/Features/Timetracker'
import Home from '../pages/Home/Home'
import Integrations from '../pages/Integrations/Integrations'
import Login from '../pages/login/Login'
import Signup from '../pages/login/Signup'
import Todo from '../pages/Timetrak/Todo'
const AllRoutes = () => {
  return (
    <Routes>
          <Route path='/' element={<Home />} />     
          <Route path='/integrations' element={<Integrations />} />     
          <Route path='/blog' element={<Blog />} />     
          <Route path='/timetracker' element={<Timetracker />} />     
          <Route path='/projectmanagement' element={<Timemanagement />} />     
          <Route path='/onlinetimesheet' element={<Home />} />     
          <Route path='/timecards' element={<Home />} />  
          <Route  path = "/login" element={<Login/>}/>   
          <Route path ="/Signup" element={<Signup/>} />
              {/*  Blog navbar routes */}
          <Route path='/productivity' element={<Productivity />} />     
          <Route path='/remotework' element={<RemoteWork />} />     
          <Route path='/practices' element={<Practices />} />     
          <Route path='/resources' element={<Resources />} />     
           <Route path ="/todo" element={<Todo/>}/>
    </Routes>
  )
}

export default AllRoutes