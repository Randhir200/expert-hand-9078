import React from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import { AppGridData } from './AppGrid.data'
function AppGrid() {
  const size = useWindowSize()
console.log(size)
  return (
    <div className=' grid sm:grid lg:grid-cols-3 grid-cols-2 mt-10 md:w-11/12 md:m-auto gap-8 sm:w-11/12 sm:m-auto'>
        {
            AppGridData.map((e,i)=>
            <div className='text-left mt-10 cursor-pointer m-auto ' key={i}>
              <a href={e.link}>
                <div className=' p-4 shadow-xl w-20 h-20 rounded-lg'>
                <img src={e.img} className=' lg:ml-0 md:ml-0 ' />
                </div>
                {
                  (size.width > 920) && (
                    <>
                      <p className=' font-bold text-3xl mt-6 mb-6'>{e.name}</p>
                      <p className=' font-medium text-base text-gray-500'>{e.des}</p>
                    </>
                  )
                }
              </a>
            </div>
            )
        }
    </div>
  )
}

export default AppGrid