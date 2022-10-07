
import React from 'react'
import { Alert, AlertIcon, AlertTitle, Box, Button, Flex, FormControl,Text, Image,Input} from "@chakra-ui/react"

import { Checkbox} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch,} from 'react-redux'
import { getdata, postApi } from './Reducer/action'
import { useNavigate } from 'react-router-dom'
import login from "../../assets/login.png"

const Signup = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  // const {data} = useSelector((state)=>state.login)
  const [correct, setcorrect] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd=async()=>{ 
    const datas ={
      email:email,
      password:password
    }

    const da = await dispatch(getdata())
    let flag =  da.find((el)=>(
       el.email === email 
    ))
     if(flag){
      setcorrect(true)
     }
      else{
       setcorrect(false)
       dispatch(postApi(datas))
       navigate("/login")
      }




 
   
}
const handlelog =()=>{
 navigate("/login")
}
       
  return (
    <Box>

      {correct&&<Alert status='error'>
    <AlertIcon />
    <AlertTitle>User already exist</AlertTitle>
  </Alert>}
        <Flex >
         <Box bg={"RGBA(0, 0, 0, 0.92)"} >
        <Image src={login} alt='Dan Abramov'  boxSize='650px' h="650px" />

        </Box>
        <Box display={'block'} margin='auto'>
          <Flex
            direction={'column'}
            alignItems='center'
            justifyContent={'center'}
          >
            <Text fontSize={'20px'}>
              TRACKING{' '}
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>TIME</span>
            </Text>


           <Button w="250px"  bg={"none"}  border={"1px solid RGBA(0, 0, 0, 0.16)"} marginBottom="12px">
             <Flex justifyContent={"space-around"} alignItems="center">
              <Image src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" boxSize={"20px"}/>
              <Text p="5px" fontSize="12px" fontWeight="500">Sign up with Goggle</Text>
             </Flex>
           </Button>

           <Button border={"1px solid RGBA(0, 0, 0, 0.16)"} w="250px" bg={"none"} marginBottom="12px">
             <Flex justifyContent={"space-around"} alignItems="center">
              <Image src="https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png" boxSize={"18px"}/>
              <Text p="5px" fontSize="12px" fontWeight="500">Sign up with apple</Text>
             </Flex>
           </Button>
           <Button border={"1px solid RGBA(0, 0, 0, 0.16)"} w="250px" bg={"none"} marginBottom="12px"> 
             <Flex justifyContent={"space-around"} alignItems="center">
              <Image src="https://pbs.twimg.com/profile_images/1268237607147728896/1CRvsTJ1_400x400.png" boxSize={"20px"}/>
          <Text p="5px" fontSize="12px" fontWeight="500">Sign up with microsoft</Text>
             </Flex>
           </Button>
          
            <Text p="5px" fontSize="14px" fontWeight="500">Sign up with your email</Text>
            <Box >
              <FormControl marginBottom={"15px"}>
                <Input placeholder='Email' type="email" onChange={(e)=>setemail(e.target.value)} required/>
                
              </FormControl>
              <FormControl marginBottom={"15px"}>
              <Input placeholder='Password' type="password" onChange={(e)=>setpassword(e.target.value)} required/>

              </FormControl>
            </Box>
            <Box>
            <Text>I agree with the Terms of service & Privacy Policy  <Checkbox margin="5px"></Checkbox></Text>
             

            </Box>
            <Button
              w='250px'
              bg='RGBA(0, 0, 0, 0.92)'
              color={'white'}
              onClick={handleAdd}
            >
              Sign Up
            </Button>
          </Flex>
          <Text
            fontSize={'12px'}
            fontWeight='bold'
            color={'grey'}
            cursor={'pointer'}
          >
            Already have account{' '}
            <span
              style={{
                fontSize: '13px',
                fontWeight: '600',
                color: 'black',
                textDecoration: 'underLine',
              }}
              onClick={handlelog}
            >
              Login
            </span>
          </Text>
          <Text
            fontSize={'15px'}
            fontWeight='400'
            marginTop={'40px'}
            textDecoration='underLine'
          >
            Terms of service / Privacy Policy
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Signup
