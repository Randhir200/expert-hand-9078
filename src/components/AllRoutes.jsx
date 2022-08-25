import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Timetracker from '../pages/Features/Timetracker'
import Home from '../pages/Home/Home'

const AllRoutes = () => {
  return (
    <Routes>
          <Route path='/' element={<Home />} />     
          <Route path='/integrations' element={<Home />} />     
          <Route path='/blog' element={<Home />} />     
          <Route path='/timetracker' element={<Timetracker />} />     
          <Route path='/projectmanagement' element={<Home />} />     
          <Route path='/onlinetimesheet' element={<Home />} />     
          <Route path='/timecards' element={<Home />} />     
    </Routes>
  )
}

export default AllRoutes