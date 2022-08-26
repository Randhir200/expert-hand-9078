import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Onlinetimesheet from '../pages/Features/OnlineTimeSheet'
import Timemanagement from '../pages/Features/Timemanagement'
import Timetracker from '../pages/Features/Timetracker'
import Home from '../pages/Home/Home'
import Integrations from '../pages/Integrations/Integrations'
const AllRoutes = () => {
  return (
    <Routes>
          <Route path='/' element={<Home />} />     
          <Route path='/integrations' element={<Integrations />} />     
          <Route path='/blog' element={<Home />} />     
          <Route path='/timetracker' element={<Timetracker />} />     
          <Route path='/projectmanagement' element={<Timemanagement />} />     
          <Route path='/onlinetimesheet' element={<Onlinetimesheet/>} />     
          <Route path='/timecards' element={<Home />} />     
    </Routes>
  )
}

export default AllRoutes