import React from 'react'
import {Link} from 'react-router-dom'
import './blog.css'
export const BlogNav = () => {
  return (
    <div className=' flex gap-8 m-auto my-6 w-1/2 font-semibold text-gray-400'>
      <Link className='expand' to='/blog'>BLOG</Link>
      <Link className='expand' to='/productivity'>PRODUCTIVITY WORK</Link>
      <Link className='expand' to='/remotework'>REMOTE WORK</Link>
      <Link className='expand' to='/practices'>BEST PRACTICES</Link>
      <Link className='expand' to='/resources'>RESOURCES</Link>

    </div>
  )
}
