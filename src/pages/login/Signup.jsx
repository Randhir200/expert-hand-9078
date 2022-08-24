import React from 'react'
import { Box, Button, color, Flex, FormControl, Image,Input,Stack,Text, textDecoration } from "@chakra-ui/react"

import { Checkbox} from '@chakra-ui/react'
const Signup = () => {
  return (
    <Box>
        <Flex >
         <Box bg={"RGBA(0, 0, 0, 0.92)"} >
        <Image src='https://pro.trackingtime.co/img/login/1.svg' alt='Dan Abramov'  boxSize='650px' h="650px" />
        </Box>
        <Box display={"block"} margin="auto">
          <Flex  direction={"column"} alignItems="center" justifyContent={"center"} >
           <Text fontSize={"20px"} >TRACKING <span style={{fontSize:"20px",fontWeight:"bold"}} >TIME</span></Text>

           <Button w="250px"  bg={"none"}  border={"1px solid RGBA(0, 0, 0, 0.16)"} marginBottom="12px">
             <Flex justifyContent={"space-around"} alignItems="center">
              <Image src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" boxSize={"20px"}/>
              <Text p="5px" fontSize="12px" fontWeight="500">Sign in with Goggle</Text>
             </Flex>
           </Button>

           <Button border={"1px solid RGBA(0, 0, 0, 0.16)"} w="250px" bg={"none"} marginBottom="12px">
             <Flex justifyContent={"space-around"} alignItems="center">
              <Image src="https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png" boxSize={"18px"}/>
              <Text p="5px" fontSize="12px" fontWeight="500">Sign in with apple</Text>
             </Flex>
           </Button>
           <Button border={"1px solid RGBA(0, 0, 0, 0.16)"} w="250px" bg={"none"} marginBottom="12px"> 
             <Flex justifyContent={"space-around"} alignItems="center">
              <Image src="https://pbs.twimg.com/profile_images/1268237607147728896/1CRvsTJ1_400x400.png" boxSize={"20px"}/>
          <Text p="5px" fontSize="12px" fontWeight="500">Sign in with microsoft</Text>
             </Flex>
           </Button>
          
            <Text p="5px" fontSize="14px" fontWeight="500">Sign in with your email</Text>
            <Box >
              <FormControl marginBottom={"15px"}>
                <Input placeholder='Email'/>
                
              </FormControl>
              <FormControl marginBottom={"15px"}>
              <Input placeholder='Password' />
              </FormControl>
               <Text>I agree with the Terms of service & Privacy Policy
</Text>
              <Checkbox ></Checkbox>
            </Box>
           
            <Button w="250px" bg="RGBA(0, 0, 0, 0.92)" color={"white"} >Sign Up</Button>
          </Flex>
          <Text fontSize={"12px"} fontWeight="bold" color={"grey"}>Do you have Account  <span style={{fontSize:"13px",fontWeight:"600" ,color:"black", textDecoration:"underLine"}} >Sign Up</span></Text>
          <Text fontSize={"15px"} fontWeight="400" marginTop={"40px"} textDecoration="underLine">Terms of service / Privacy Policy</Text>
          </Box>
        </Flex>
    </Box>
  )
}

export default Signup