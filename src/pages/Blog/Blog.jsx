import React from 'react'
import BlogBanner from './BlogBanner'
import BlogGrid from './BlogGrid'
import { BlogNav } from './BlogNav'

const Blog = () => {
document.title = 'Blog | Tracking Time'

  return (
    <div>
    <BlogNav />
    <BlogBanner line={'TIMEKEEPING AND PRODUCTIVITY ARTICLES'} />
    <BlogGrid count={0} />
    </div> 
  )
}

export default Blog