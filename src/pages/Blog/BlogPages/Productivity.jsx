import React from 'react'
import BlogBanner from '../BlogBanner'
import BlogGrid from '../BlogGrid'
import { BlogNav } from '../BlogNav'

export const Productivity = () => {
  document.title = 'Productivity | Tracking Time'

  return (
    <div>
      <BlogNav  />
    <BlogBanner line={'PRODUCTIVITY ARTICLES TO HELP YOU INCREASE PRODUCTIVITY AT WORK.'} />
    <BlogGrid count={40} />
   
    </div>
  )
}
