import React from 'react'
import BlogBanner from '../BlogBanner'
import BlogGrid from '../BlogGrid'
import { BlogNav } from '../BlogNav'

const Practices = () => {
  document.title = 'Practices | Tracking Time'

  return (
    <div>
      <BlogNav  />
    <BlogBanner line={'BEST PRACTICES ARTICLES WITH TIPS AND RECOMMENDATIONS OF BEST PRACTICES AT WORK.'} />
    <BlogGrid count={25} />
    
    </div>
  )
}

export default Practices