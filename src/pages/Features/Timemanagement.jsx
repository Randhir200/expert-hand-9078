import React, { useState } from 'react'
import { Button, createIcon,Stack, HStack, Input, FormControl,Container, Box, Image,Text, VStack, Heading, border, textDecoration, Spacer, color} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'
import { styles } from './styles';

const img = [
    require("../Features/Images/google-key.png"),
    require("../Features/Images/timemanagement/img1.jpg"),
    require("../Features/Images/timemanagement/img2.jpg"),
    require("../Features/Images/timemanagement/img3.jpg"),

    require("../Features/Images/timemanagement/img7.jpg"),  //[6]
    require("../Features/Images/timemanagement/img8.jpg"), //[7]
    require("../Features/Images/timemanagement/img9.jpg"), //[8]
    require("../Features/Images/timemanagement/img10.jpg"), //[8]
    require("../Features/Images/timemanagement/img11.jpg"), //[8]   
]

const btnimg = [
    require("../Features/Images/timemanagement/img4.jpg"),
    require("../Features/Images/timemanagement/img5.jpg"),
    require("../Features/Images/timemanagement/img6.jpg"),
]


export const img1=[
    require("../Features/Images/timetracking/img6-1.jpg"), //[5]
    require("../Features/Images/timetracking/img7-1.jpg"),  //[6]
    require("../Features/Images/timetracking/img8-1.jpg"), //[7]
    require("../Features/Images/timetracking/img9-1.jpg"),
]


const logo1 = "https://trackingtime.co/wp-content/uploads/2020/07/Home-office-and-remote-working-solutions-for-team-collaboration.svg";

const Timemanagement = () => {
    
    const [id,setId] = useState(0);
    const [status1, setStatus1] = useState(false)
    const [status2, setStatus2] = useState(false)
    const [status3, setStatus3] = useState(false)

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

            <Box style={styles.cont} className={CSS.cont} >
                
            {/* <Image src={logo1} style={styles.logo1Div} />
            <h4 style={styles.headerH4}>Time Tracker for every business</h4> */}
            <Text style={styles.lastHeading}>THE SIMPLEST TIME TRACKER TO IMPROVE YOUR PRODUCTIVITY!</Text>

            {/* <FormControl style={styles.form} flexDirection={{base:"column", lg:"row"}}  >
                <Input style={styles.formInput} type="email" placeholder="Your Work Email"  width={{base:"100%", lg:"30%"}} />
                <Button style={styles.formButton} width={{base:"100%", lg:"30%"}}>START FOR FREE !</Button>
                </FormControl> */}

                {/* <HStack margin="auto" mt={{base:"10px"}} >
                    <Image src={img[0]} width="20px" height="20px"/>
                    <Text style={styles.googleText} _hover={{color:"#00ad95"}}>Sigin in with Google</Text>
                </HStack> */}
                <VStack >
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >
                    {/* <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} ></Text> */}
                    {/* <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} ></Text> */}
                        <Image src={img[1]} w={{base:"100%", lg:"70%"}} /> 
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Project Management Time Tracking Software to Improve Teamwork</Heading>
                            <Text style={styles.infoDescText}> <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > Organize your team’s work, </Text> 
                            communication, and leadership. 
                            Assign tasks, delegate responsibilities, and monitor the progress of your projects and tasks.</Text>
                        </VStack>
                    </Stack>
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >                   
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Get a weekly overview of your team’s tasks and activities </Heading>
                            <Text style={styles.infoDescText}>Manage all your time entries per Drag & Drop in a 
                            beautifully designed calendar view with 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > TrackingTime Project Management. </Text>
                            Editing your time entries has never been so easy!</Text>
                        </VStack>
                        <Image src={img[2]} w={{base:"100%", lg:"70%"}} /> 

                    </Stack>
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >
                        
                        <Image src={img[3]} w={{base:"100%", lg:"70%"}} /> 
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Billable hours vs. non-billable hours</Heading>
                            <Text style={styles.infoDescText}>Manage all your time entries per Drag & Drop in a 
                            beautifully designed calendar view with 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > TrackingTime Project Management. </Text>
                            Editing your time entries has never been so easy!</Text>
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
                            <Heading style={styles.infoDescHeading}>Track project due dates</Heading>
                            <Text style={styles.infoDescText}> Set due dates for your projects and tasks and sync them 
                            automatically with your favorite calendar apps like 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > Google Calendar </Text>
                            or 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > Outlook. </Text>

                            </Text>
                        </VStack>

                    </Stack>
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >                               
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Project management and team sync</Heading>
                            <Text style={styles.infoDescText}>Be updated with your
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > team’s projects, </Text>
                            TrackingTime allows you to know which project each person is working on, 
                            you could organize and prioritize it according to the work in the office for a better project tracking. </Text> 
                        </VStack>
                        <Image src={img[5]} w={{base:"100%", lg:"70%"}} /> 

                    </Stack> 
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >                               
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Duplicate common tasks and projects</Heading>
                            <Text style={styles.infoDescText}>
                            Do you often work on similar activities? TrackingTime’s task and 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > project tracking </Text>
                             make it easy to save time on project setup by duplicating existing projects and 
                            tasks–– with just one click.
                            </Text> 
                        </VStack>
                        <Image src={img[6]} w={{base:"100%", lg:"70%"}} /> 

                    </Stack>            
                </VStack>
                <Text style={styles.lastHeading}>TAKE CONTROL OF YOUR PROJECTS AND TASKS.</Text>
                <Button style={styles.formButton} width={{base:"80%", lg:"20%"}} margin="auto" mb="50px">START FOR FREE TRAIL</Button>
                
            </Box>

                <Box>
                    <Stack direction={{base:"column",lg:"row"}} w="85%"  margin="auto" mt="20px" gap="20px">
                        <VStack  >
                            <Image src={img1[0]} />
                            <Text style={styles.cardsHeading}>TimeCards Approval</Text>
                            <Text style={styles.cardDesc}>Track clock in and out times with no effort.</Text>
                        </VStack>
                        <VStack   >
                            <Image src={img1[1]} />
                            <Text style={styles.cardsHeading}>Budgeting</Text>
                            <Text style={styles.cardDesc}>Keep your projects on time and budget.</Text>
                        </VStack>
                        <VStack   >
                            <Image src={img1[2]} />
                            <Text style={styles.cardsHeading}>Work Schedules</Text>
                            <Text style={styles.cardDesc}>Specify when your employees are expected to be at their job.</Text>
                        </VStack>
                        <VStack   >
                            <Image src={img1[3]} />
                            <Text style={styles.cardsHeading}>Timesheet Audits</Text>
                            <Text style={styles.cardDesc}>Avoid data inconsistencies with just one click.</Text>
                        </VStack>


                    </Stack>

                </Box>
    </Box>
  )
}

export default Timemanagement