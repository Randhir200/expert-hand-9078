import React from 'react'
import BlogBanner from './BlogBanner'
import BlogGrid from './BlogGrid'
import { BlogNav } from './BlogNav'

const Blog = () => {
  return (
    <div>
    <BlogNav />
    <BlogBanner />
    <BlogGrid />
    </div> 
  )
}

export default Blog