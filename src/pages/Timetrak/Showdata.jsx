import React, { useEffect } from 'react'
import { ImCross } from "react-icons/im"
import { MdTimer } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { DeleteApi, getApi, ToggleApi } from './Reducer/action'
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
                        <div className="flex align-"><div><MdTimer style={{ width: "20px", height: "20px", color: "teal" }} /></div><div className='text-sm '>{e.time} hours </div></div>
                        <button onClick={() => handleDelete(e.id)} ><ImCross style={{ color: "teal" }} /></button></div>
                    <div className=" font-bold text-2xl my-3">{e.title}</div>
                    <div className=' text-sm'>{e.dis}</div>
                    <div className='flex justify-start'>
                    <button onClick={()=>handleToggle(e.id,e.status)} style={{color:e.status?"green":"tomato"}} className=" font-medium">{e.status?"Completed":"Pending"}</button>
                   </div>
                </div>
            ))}
        </div>
    )
}

export default Showdata