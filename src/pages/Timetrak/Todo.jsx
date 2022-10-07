import React from 'react'
import Friday from './Friday'
import Monday from './Monday'

import Tuesday from './Tuesday'
import Wednesday from './Wednesday'
import Thursday from './thursday'

import TaskMapy from '../Private/TaskMapy';



const Todo = () => {
    let curr = new Date 
    let week = []
for (let i = 1; i <=5; i++) {
    let first = curr.getDate() - curr.getDay() + i 
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
    week.push(day)
  }

//  function x(){
//    const time = new Date()
//    sethours(time.getHours())
   
//    setmin(time.getMinutes())
  
//    setsec(time.getSeconds())
   
//  }
//  useEffect(()=>{
  
//   setInterval(()=>{
//    x()
//   },1000)

//  },[])

  return (
    <>
    <TaskMapy/>
  <div>

   {/* <h3>{hour}:{min}:{sec}</h3> */}
   <div className=" flex space-between w-11/12 m-auto gap-2">
     <Monday  week={week[0]} />
     <Tuesday  week={week[1]}/>
     <Wednesday week={week[2]}/>
     <Thursday week={week[3]}/>
     <Friday week={week[4]}/>
   </div>
  </div>
  </>
  )
}

export default Todo