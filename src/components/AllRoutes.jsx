import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../pages/Blog/Blog'
import Practices from '../pages/Blog/BlogPages/Practices'
import { Productivity } from '../pages/Blog/BlogPages/Productivity'
import RemoteWork from '../pages/Blog/BlogPages/RemoteWork'
import Resources from '../pages/Blog/BlogPages/Resources'
import Timetracker from '../pages/Features/Timetracker'
import Home from '../pages/Home/Home'
import Integrations from '../pages/Integrations/Integrations'
const AllRoutes = () => {
  return (
    <Routes>
          <Route path='/' element={<Home />} />     
          <Route path='/integrations' element={<Integrations />} />     
          <Route path='/blog' element={<Blog />} />     
          <Route path='/timetracker' element={<Timetracker />} />     
          <Route path='/projectmanagement' element={<Home />} />     
          <Route path='/onlinetimesheet' element={<Home />} />     
          <Route path='/timecards' element={<Home />} /> 

              {/*  Blog navbar routes */}
          <Route path='/productivity' element={<Productivity />} />     
          <Route path='/remotework' element={<RemoteWork />} />     
          <Route path='/practices' element={<Practices />} />     
          <Route path='/resources' element={<Resources />} />     

    </Routes>
  )
}

export default AllRoutes