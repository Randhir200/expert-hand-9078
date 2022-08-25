import React from 'react'
import AppGrid from '../../components/Integrations/AppGrid'
import SearchPanel from '../../components/Integrations/SearchPanel'

const Integrations = () => {
  return (
    <div className=' lg:w-3/4 m-auto'>
        <SearchPanel />
        <AppGrid />
    </div>
  )
}

export default Integrations