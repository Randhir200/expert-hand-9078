import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { useWindowSize } from '../../hooks/useWindowSize'

const SearchPanel = () => {
  const size = useWindowSize()
 
  return (
    <div className=' lg:text-left mt-10 md:text-center'>
        <p className=' lg:text-xl text-base font-semibold lg:font-bold tracking-widest'>
        TRACKING TIME BUTTON FOR CHROME
        </p>
        <p className=' lg:text-6xl text-4xl mt-6 font-bold'>
        TrackingTime
        </p>
        <p className='lg:text-6xl text-4xl mt-2 font-bold'>
        Integrations
        </p>
    <p className=' text-xl font-bold mt-10 tracking-widest'>
    TIME TRACKING INTEGRATIONS THAT YOU'LL LOVE

    </p>

{/* search bar */}
  {
    (size.width > 920) && 
    (<>
      <div className="flex">
    <input placeholder='SEARCH YOUR FAVOURITE APP!' className=' border-2 mt-16 w-2/4 placeholder:text-black placeholder:font-bold
     p-6 shadow-lg ' />
     <FaSearch className=' mt-24 -ml-8' />
</div>
<div className=' text-gray-500 font-semibold text-lg mt-10'>
  <p >
  Improve your time tracking and increase your productivity with these Integrations.
  </p>
<p >
See how much time you spend on each task or project! TrackingTime's integrations make it easy to keep track of your billable and non-billable tasks by integrating with more than 30 apps.
</p>
<p className='mt-5'>
TrackingTime can be integrated with other apps, such as project management, accounting, and customer support. Get instant timesheets and analytics with TrackingTime!
</p>
</div>
    </>) 
}
        </div>
  )
}

export default SearchPanel