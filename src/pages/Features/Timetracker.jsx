import React, { useState } from 'react'
import { Button, createIcon,Stack, HStack, Input, FormControl,Container, Box, Image,Text, VStack, Heading, border, textDecoration, Spacer, color} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom';
import { styles } from './styles';

const img = [
    require("../Features/Images/google-key.png"),
    require("../Features/Images/timetracking/img1.jpg"),
    require("../Features/Images/timetracking/img2.jpg"),
    require("../Features/Images/timetracking/img3.jpg"),
    require("../Features/Images/timetracking/img4.jpg"),
    require("../Features/Images/timetracking/img5.jpg"),
    require("../Features/Images/timetracking/img6-1.jpg"), //[5]
    require("../Features/Images/timetracking/img7-1.jpg"),  //[6]
    require("../Features/Images/timetracking/img8-1.jpg"), //[7]
    require("../Features/Images/timetracking/img9-1.jpg"), //[8]  
]

const btnimg = [
    require("../Features/Images/timetracking/img10.jpg"),
    require("../Features/Images/timetracking/img11.jpg"),
    require("../Features/Images/timetracking/img12.jpg"),
]

const logo1 = "https://trackingtime.co/wp-content/uploads/2020/07/Home-office-and-remote-working-solutions-for-team-collaboration.svg";

const Timetracker = () => {
    
    const [id,setId] = useState(0);
    const [status1, setStatus1] = useState(false)
    const [status2, setStatus2] = useState(false)
    const [status3, setStatus3] = useState(false)
    
    const navigate = useNavigate()
   function handleLog(){
    navigate('/login')
  }
    const handleClick1 =()=>{
        setStatus1(true)
        setStatus2(false)
        setStatus3(false)
        setId(0)
    }
    const handleClick2 =()=>{
       setStatus1(false)
        setStatus2(true)
        setStatus3(false)
        setId(1)
    }
    const handleClick3 =()=>{
       setStatus1(false)
        setStatus2(false)
        setStatus3(true)
        setId(2)
    }

    
  return (
    <Box>

            <Box style={styles.cont}  >
                
            <Image src={logo1} style={styles.logo1Div} />
            <h4 style={styles.headerH4}>Time Tracker for every business</h4>

            <FormControl style={styles.form} flexDirection={{base:"column", lg:"row"}}  >
                <Input style={styles.formInput} type="email" placeholder="Your Work Email"  width={{base:"100%", lg:"30%"}} />
                <Button style={styles.formButton} width={{base:"100%", lg:"30%"}} onClick={handleLog}>START FOR FREE !</Button>
                </FormControl>

                <HStack margin="auto" mt={{base:"10px"}} >
                    <Image src={img[0]} width="20px" height="20px"/>
                    <Text style={styles.googleText} _hover={{color:"#00ad95"}}>Sigin in with Google</Text>
                </HStack>
                <VStack >
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >
                        
                        <Image src={img[1]} w={{base:"100%", lg:"70%"}} /> 
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>A functional time tracker</Heading>
                            <Text style={styles.infoDescText}>Easy <Text as="span" fontWeight="bold"> online time tracker </Text>  
                            is only the beginning. 
                            <Text as="span" fontWeight="bold"> TrackingTime </Text> 
                            enables you to organize and <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}}  >plan your time </Text>
                                to    
                            <Text as="span" fontWeight="bold" textDecoration="underline" _hover={{textDecoration:"none"}} > work smarter </Text> 
                            Even when time is tight and pressures are high!</Text>
                        </VStack>
                    </Stack>
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >                   
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Start tracking with just one click</Heading>
                            <Text style={styles.infoDescText}>Try the fastest way to start tracking your activities by simply clicking on the start button. Easily keep track of your team’s working hours with <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > online timesheet </Text>  and simplify your processes.</Text>
                        </VStack>
                        <Image src={img[2]} w={{base:"100%", lg:"70%"}} /> 

                    </Stack>
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >
                        
                        <Image src={img[3]} w={{base:"100%", lg:"70%"}} /> 
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Track Time in real-time</Heading>
                            <Text style={styles.infoDescText}>Today, work happens everywhere. That’s why our <Text as="span" fontWeight="bold"  > time tracker software </Text> allows you and your team to 
                            <Text as="span" fontWeight="bold"  > track time </Text> in real-time wherever you work. 
                            Set due dates to organize and prioritize your projects and tasks and automatically sync them with your employees’ calendar. 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > Never miss a deadline! </Text></Text>
                        </VStack>

                    </Stack>
                    
                </VStack>
                <Text>
                    
                    <Stack direction={{base:"column",lg:"row"}} w="85%"  margin="auto" mt="20px" >
                        <VStack w={{base:"100%",lg:"50%"}} >
                         <Button style={styles.dispBtn} shadow="md" onClick={handleClick1} bg={status1? "black":"white"} color={status1? "white":"black"}  >Easy clock in and clock Out</Button>
                         <Button style={styles.dispBtn} shadow="md" onClick={handleClick2} bg={status2? "black":"white"} color={status2? "white":"black"}  >Add and edit time entries for your whole team</Button>
                         <Button style={styles.dispBtn} shadow="md" onClick={handleClick3} bg={status3? "black":"white"} color={status3? "white":"black"} >Create proffesional time sheets and reports </Button>
                        </VStack>
                        <Stack w={{base:"100%",lg:"50%"}} >
                           <Image src={btnimg[id]} />
                        </Stack>
                    </Stack>

                </Text>
                <VStack >
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >                
                        <Image src={img[4]} w={{base:"100%", lg:"70%"}} /> 
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Track time everywhere</Heading>
                            <Text style={styles.infoDescText}>Download TrackingTime for
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > iOS </Text>  and 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > Android </Text> to 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > track your time </Text> wherever you work. 
                            With the Chrome Button, you can even track your tasks directly in   
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > Asana, </Text>
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > Trello, </Text>
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > Jira, </Text>
                            and more than 30 other project management apps.
                            </Text>
                        </VStack>

                    </Stack>
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >                               
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Desktop App</Heading>
                            <Text style={styles.infoDescText}>Track your time and get an overview of tasks and projects directly from the 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > desktop app. </Text> 
                            Log your hours easier than ever with just one click. </Text> 
                        </VStack>
                        <Image src={img[5]} w={{base:"100%", lg:"70%"}} /> 

                    </Stack>            
                </VStack>
                <Text style={styles.lastHeading}>THE SIMPLEST TIME TRACKER TO IMPROVE YOUR PRODUCTIVITY!</Text>
                <Button style={styles.formButton} width={{base:"80%", lg:"20%"}} margin="auto" mb="50px">START FOR FREE TRAIL</Button>
                
            </Box>

                <Box>
                    <Stack direction={{base:"column",lg:"row"}} w="85%"  margin="auto" mt="20px" gap="20px">
                        <VStack  >
                            <Image src={img[6]} />
                            <Text style={styles.cardsHeading}>TimeCards Approval</Text>
                            <Text style={styles.cardDesc}>Track clock in and out times with no effort.</Text>
                        </VStack>
                        <VStack   >
                            <Image src={img[7]} />
                            <Text style={styles.cardsHeading}>Budgeting</Text>
                            <Text style={styles.cardDesc}>Keep your projects on time and budget.</Text>
                        </VStack>
                        <VStack   >
                            <Image src={img[8]} />
                            <Text style={styles.cardsHeading}>Work Schedules</Text>
                            <Text style={styles.cardDesc}>Specify when your employees are expected to be at their job.</Text>
                        </VStack>
                        <VStack   >
                            <Image src={img[9]} />
                            <Text style={styles.cardsHeading}>Timesheet Audits</Text>
                            <Text style={styles.cardDesc}>Avoid data inconsistencies with just one click.</Text>
                        </VStack>


                    </Stack>

                </Box>
    </Box>
  )
}

export default Timetracker