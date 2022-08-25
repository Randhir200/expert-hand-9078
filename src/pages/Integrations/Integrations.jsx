import React from 'react'
import AppGrid from './AppGrid'
import SearchPanel from './SearchPanel'

const Integrations = () => {
  return (
    <div className=' lg:w-3/4 md:w-5/6 sm:w-5/6 m-auto sm:ml-10 md:ml-10 '>
        <SearchPanel />
        <AppGrid />
    </div>
  )
}

export default Integrations