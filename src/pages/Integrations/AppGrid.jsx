import React from 'react'
import { AppGridData } from './AppGrid.data'
function AppGrid() {
  return (
    <div className=' grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 mt-10 gap-8'>
        {
            AppGridData.map((e)=>
            <div className='text-left mt-10 cursor-pointer '>
                <div className=' p-4 shadow-xl w-20 h-20 rounded-lg'>
                <img src={e.img} className=' lg:ml-0 md:ml-0 ' />
                </div>
                <p className=' font-bold text-3xl mt-6 mb-6'>{e.name}</p>
                <p className=' font-medium text-base text-gray-500'>{e.des}</p>
            </div>
            )
        }
    </div>
  )
}

export default AppGrid