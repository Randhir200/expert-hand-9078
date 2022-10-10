import {
  Box, Button, Input, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { v4 } from "uuid"

  import { useDisclosure } from "@chakra-ui/hooks"
import { GrAdd } from "react-icons/gr"
import { useDispatch } from 'react-redux'
import { PostApi } from './Reducer/action'
import Showdata from './Showdata'
const Thursday = ({week}) => {
  const dispatch = useDispatch() 
 const { isOpen, onOpen, onClose } = useDisclosure()
 const [title,settitle] = useState("")
 const [dis,setdis] = useState("")
 const [hour,sethour] = useState(1)

 



const handlepost =()=>{
 const datas ={
      title:title,
      dis:dis,
      status:false,
      time:hour,
      id:v4(),
      day:"thursday"
 }
 onClose()
// data.mon.push(datas)
 dispatch(PostApi(datas))

}

  return (
    <div className=' w-1/5 '>
      <div className=" bg-teal-500 text-white rounded-md py-2 font-medium">Thursday {week} </div>
      <Showdata day={"thursday"} />
   
<Button onClick={onOpen} w="250px"><GrAdd /></Button>
<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>{week} Thursday</ModalHeader>
    <ModalCloseButton />
    <ModalBody pb={6}>
        <Box>
        <Input  placeholder="Title of Project" name="task"  onChange={(e)=>settitle(e.target.value)} value={title}/>
        </Box>
     
   <div>
   {/* slider */}
   <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
<select onChange={
  (e)=>sethour(e.target.value)
} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose Duration</option>
  <option value={1} >1 hour</option>
  <option value={2} >2 hour</option>
  <option value={3} >3 hour</option>
  <option value={4} >4 hour</option>
</select>
   </div>
     <div className='mt-4 '>
        <div>
        <textarea rows="5" cols="60" name="text" placeholder="Discription of Project" className=' h-48 w-full placeholder:pt-1 placeholder:pl-1' onChange={(e)=>setdis(e.target.value)} value={dis} />
        </div>
    </div>
    </ModalBody>
    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={handlepost}>
        Save
      </Button>
      {/* <Button onClick={onClose}></Button> */}
    </ModalFooter>
  </ModalContent>
</Modal>
  
    </div>
  )
}

export default Thursday