import React from 'react'
import {Link} from 'react-router-dom'
import '../Blog/blog.css'
import {HStack, Button} from "@chakra-ui/react"
 const TaskMapy = () => {
  return (
    <HStack mb="10" justifyContent="center">
     <Button bg="#00AD95" color="white"> <Link  to='/task'>Task</Link></Button> 
      <Button bg="#00AD95" color="white"> <Link  to='/workout'>Workout</Link></Button>
    </HStack>
  )
}

export default TaskMapy