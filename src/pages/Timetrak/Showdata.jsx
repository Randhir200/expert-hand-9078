import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteApi, getApi, ToggleApi } from './Reducer/action'
import { ImCross } from "react-icons/im"
import { MdTimer } from "react-icons/md"
const Showdata = ({ day }) => {
    const { data } = useSelector((state) => state.task)
    let p = data.filter((el) => (el.day === day))
    const dispatch = useDispatch()




    const handleDelete = (id) => {
        dispatch(DeleteApi(id))

    }
    const handleToggle = (id, status) => {
        dispatch(ToggleApi(id, status))
    }



    useEffect(() => {
        dispatch(getApi())
    }, [])




    return (

        <div >
            {p.map((e) => (
                <div className=" bg-teal-100 rounded-xl px-2 py-2 my-2">
                    <div className="flex justify-between">
                        <div className="flex align-"><div><MdTimer style={{ width: "20px", height: "20px", color: "red" }} /></div><div className='text-sm '>{e.time} hours </div></div>
                        <button onClick={() => handleDelete(e.id)} ><ImCross style={{ color: "red" }} /></button></div>
                    <div className=" font-bold text-2xl my-3">{e.title}</div>
                    <div className=' text-sm'>{e.dis}</div>
                    <div className='flex justify-start'>
                      <div className='my-3 '>
                    <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                        <input type="checkbox" value="" id="default-toggle" class="sr-only peer" onClick={()=>handleToggle(e.id,e.status)}/>
                        <div class="w-7 h-3 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{e.status ? "completed" : "Pending"}</span>
                    </label>
                   </div>
                   </div>
                </div>
            ))}
        </div>
    )
}

export default Showdata