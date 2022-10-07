import React, { useState } from 'react'
import { Button, createIcon,Stack, HStack, Input, FormControl,Container, Box, Image,Text, VStack, Heading, border, textDecoration, Spacer, color} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'
import { styles } from './styles';

const img = [
    require("../Features/Images/google-key.png"),
    require("../Features/Images/attendancetracking/img1.jpg"),
    require("../Features/Images/attendancetracking/img2.jpg"),
    require("../Features/Images/attendancetracking/img3.jpg"),
    require("../Features/Images/attendancetracking/img4.jpg"),
    require("../Features/Images/attendancetracking/img5.jpg"),
    require("../Features/Images/attendancetracking/img6.jpg") 
]

const btnimg = [
    require("../Features/Images/attendancetracking/imgA.jpg"),
    require("../Features/Images/attendancetracking/imgB.jpg"),
    require("../Features/Images/attendancetracking/imgC.jpg"),
]


export const img1=[
    require("../Features/Images/timetracking/img6-1.jpg"), //[5]
    require("../Features/Images/timetracking/img7-1.jpg"),  //[6]
    require("../Features/Images/timetracking/img8-1.jpg"), //[7]
    require("../Features/Images/timetracking/img9-1.jpg"),
]

const logo1 = "https://trackingtime.co/wp-content/uploads/2020/07/Home-office-and-remote-working-solutions-for-team-collaboration.svg";

const Attendancetracking = () => {
    
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
            <Text style={styles.lastHeading}>ATTENDANCE TRACKER FOR EVERY BUSINESS</Text>

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
                            <Heading style={styles.infoDescHeading}>The online attendance tracker your team will actually use</Heading>
                            <Text style={styles.infoDescText}> TrackingTime allow you to track time and attendance, all in one place. 
                            Use attendance tracker to create company-wide
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > online timesheets. </Text>
                             Reporting has never been easier!</Text>
                        </VStack>
                    </Stack>
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >                   
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}> Team Management </Heading>
                            <Text style={styles.infoDescText}> Your team can easily fill and submit timesheets that you can export into 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} >  professional reports.  </Text>
                            Manage access levels for different users and define your own rules with a flexible set of roles and permissions. </Text>
                        </VStack>
                        <Image src={img[2]} w={{base:"100%", lg:"70%"}} /> 

                    </Stack>
                    
                    
                </VStack>
                <Text>
                    
                    <Stack direction={{base:"column",lg:"row"}} w="85%"  margin="auto" mt="20px" >
                        <VStack w={{base:"100%",lg:"50%"}} >
                         <Button style={styles.dispBtn} shadow="md" onClick={handleClick1} bg={status1? "black":"white"} color={status1? "white":"black"}  >Breaks and overtime extimation </Button>
                         <Button style={styles.dispBtn} shadow="md" onClick={handleClick2} bg={status2? "black":"white"} color={status2? "white":"black"}  >Absence reporting and management</Button>
                         <Button style={styles.dispBtn} shadow="md" onClick={handleClick3} bg={status3? "black":"white"} color={status3? "white":"black"} > Employees attendnace control</Button>
                        </VStack>
                        <Stack w={{base:"100%",lg:"50%"}} >
                           <Image src={btnimg[id]} />
                        </Stack>
                    </Stack>

                </Text>
                <VStack >
                <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Keep up your pace with employee attendance tracker</Heading>
                            <Text style={styles.infoDescText}>
                            Handle your team’s performance across projects and get accurate productivity reports. 
                            The 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} >  Pace Board  </Text> 
                            gives you a daily overview of both scheduled and tracked hours by every team member at a glance.                            </Text>
                        </VStack>
                        <Image src={img[3]} w={{base:"100%", lg:"70%"}} /> 
                    </Stack>
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >                
                        <Image src={img[4]} w={{base:"100%", lg:"70%"}} /> 
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Time cards for attendance management</Heading>
                            <Text style={styles.infoDescText}> 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} >  Time cards  </Text> 
                             allow you and your team to easily track clock in 
                            and clock out times and create 
                            <Text as="span" fontWeight="bold" > monthly employee attendance reports. </Text> 
                           </Text>
                        </VStack>
                    </Stack>
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}> Make sure your timesheets are always complete </Heading>
                            <Text style={styles.infoDescText}>
                            The more hours you track with a <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > time tracker, </Text> 
                            the more accurate your reports will be. 
                            That’s why TrackingTime ensures that your team keeps tracking all their work hours consistently, every day.
                            </Text>
                        </VStack>
                        <Image src={img[5]} w={{base:"100%", lg:"70%"}} /> 
                    </Stack>
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >                
                        <Image src={img[6]} w={{base:"100%", lg:"70%"}} /> 
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}> Working On! </Heading>
                            <Text style={styles.infoDescText}> See what everybody is tracking on the activity tab and avoid unnecessary interruptions with non-invasive 
                            <Text as="span" fontWeight="bold" > employee monitoring. </Text> 
                            </Text>
                        </VStack>
                    </Stack>
                              
                </VStack>
                <Text style={styles.lastHeading}>KEEP YOUR TEAM TRACKING ALL THEIR WORK HOURS CONSISTENTLY WITH TRACKINGTIME!</Text>
                <Button style={styles.formButton} width={{base:"80%", lg:"20%"}} margin="auto" mb="50px"> TRY TRACKING TIME FREE!</Button>
                
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

export default Attendancetracking