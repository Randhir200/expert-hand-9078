import React from 'react'
import BlogBanner from '../BlogBanner'
import BlogGrid from '../BlogGrid'
import { BlogNav } from '../BlogNav'

const Resources = () => {
document.title = 'Resources | Tracking Time'
  
  return (
    <div>
      <BlogNav  />
    <BlogBanner line={'ARTICLES AND RESOURCES TO IMPROVE YOUR TIMEKEEPING'} />
    <BlogGrid count={10} />
   
    </div>
  )
}

export default Resources