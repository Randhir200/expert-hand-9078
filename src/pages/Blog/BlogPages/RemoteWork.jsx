import React from 'react'
import BlogBanner from '../BlogBanner'
import BlogGrid from '../BlogGrid'
import { BlogNav } from '../BlogNav'

const RemoteWork = () => {
document.title = 'Remote Work | Tracking Time'
  
  return (
    <div>
      <BlogNav  />
    <BlogBanner line={'REMOTE WORK ARTICLES FOR REMOTE TEAMS AND PEOPLE THAT DO HOME OFFICE.'}/>
    <BlogGrid count={50} />
    
    </div>
  )
}

export default RemoteWork