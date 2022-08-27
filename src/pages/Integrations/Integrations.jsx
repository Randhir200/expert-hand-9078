import React from 'react'
import AppGrid from './AppGrid'
import SearchPanel from './SearchPanel'

const Integrations = () => {
document.title = 'Time Tracking Integrations - Tracking Time'
 
  return (
    <div className=' lg:ml-44 lg:w-3/4 md:text-center sm:text-center md:w-full m-auto sm:w-full '>
        <SearchPanel />
        <AppGrid />
    </div>
  )
}

export default Integrations