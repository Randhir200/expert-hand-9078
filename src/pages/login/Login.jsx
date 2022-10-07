import React from 'react'
import { Alert, AlertIcon, AlertTitle, Box, Button,Flex, FormControl, Image,Input,Text} from "@chakra-ui/react"
import { useDispatch} from 'react-redux'
import { useState } from 'react'
import login from "../../assets/login.png"
import { getdata } from './Reducer/action'
import { useNavigate } from 'react-router-dom'
import { LOGINFAILURE, LOGINSUCESS } from './actiontype'
const Login = () => {
  
  const dispatch = useDispatch()
  const [mail,setmail] = useState("")
  const [pass,setpass] = useState("")
  const [correct,setcorrect] = useState(true)
  const navigate = useNavigate()
  
  const handlechange =async ()=>{
     const da = await dispatch(getdata())

    let flag =  da.find((el)=>(
       el.email === mail && el.password===pass
    ))
     if(flag){
      dispatch({type:LOGINSUCESS})
      setcorrect(true)
      navigate("/task")


     }
      else{
        dispatch({type:LOGINFAILURE})
        setcorrect(false)
      }
   }

   const handlesignup =()=>{
    navigate("/signup")
   }

  return (
  
    <Box>
        {!correct?<Alert status='error'>
    <AlertIcon />
    <AlertTitle>Wrong Credentials</AlertTitle>
   
  </Alert>:<div></div>}
        <Flex >
         <Box bg={"RGBA(0, 0, 0, 0.92)"} >
        <Image src={login} alt='Dan Abramov'  boxSize='650px' h="650px" />
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
                <Input placeholder='Email' type="email" onChange={(e)=>setmail(e.target.value)} required/>
                
              </FormControl>
              <FormControl marginBottom={"15px"}>
              <Input placeholder='Password' type="password" onChange={(e)=>setpass(e.target.value)} required/>
              </FormControl>
            </Box>
            <Button w="250px" bg="RGBA(0, 0, 0, 0.92)" color={"white"} onClick={handlechange}>Login</Button>
          </Flex>
          <Text fontSize={"12px"} fontWeight="bold" color={"grey"}>Don't you have Account  <span style={{fontSize:"13px",fontWeight:"600" ,color:"black", textDecoration:"underLine",cursor:"pointer"}} onClick={handlesignup}>Sign Up</span></Text>
          <Text fontSize={"15px"} fontWeight="400" marginTop={"40px"} textDecoration="underLine">Terms of service / Privacy Policy</Text>
          </Box>
        </Flex>
    </Box>
  )
}

export default Login