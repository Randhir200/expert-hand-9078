import React from 'react'
import {Link} from 'react-router-dom'
export const BlogNav = () => {
  return (
    <div className=' flex gap-8 m-auto my-6 w-1/2 font-semibold'>
      <Link to='/blog'>BLOG</Link>
      <Link to='/productivity'>PRODUCTIVITY WORK</Link>
      <Link to='/remotework'>REMOTE WORK</Link>
      <Link to='/practices'>BEST PRACTICES</Link>
      <Link to='/resources'>RESOURCES</Link>
    </div>
  )
}
