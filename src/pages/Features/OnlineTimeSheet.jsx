import React, { useState } from 'react'
import { Button, createIcon,Stack, HStack, Input, FormControl,Container, Box, Image,Text, VStack, Heading, border, textDecoration, Spacer, color} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'
import { img1 } from './Timemanagement';
import { styles } from './styles';

const img = [
    require("../Features/Images/google-key.png"),
    require("../Features/Images/onlineTimeSheet/img1.jpg"),
    require("../Features/Images/onlineTimeSheet/img2.jpg"),
    require("../Features/Images/onlineTimeSheet/img7.jpg"),
    require("../Features/Images/onlineTimeSheet/img8.jpg"),
    require("../Features/Images/onlineTimeSheet/img9.jpg"),
    require("../Features/Images/onlineTimeSheet/img10.jpg"),
    require("../Features/Images/onlineTimeSheet/img11.jpg"),
    require("../Features/Images/onlineTimeSheet/img12.jpg"),
    
   
    
]

const btnimg = [
    require("../Features/Images/onlineTimeSheet/img4.jpg"),
    require("../Features/Images/onlineTimeSheet/img5.jpg"),
    require("../Features/Images/onlineTimeSheet/img6.jpg"),
    require("../Features/Images/onlineTimeSheet/img3.jpg"),
]



const logo1 = "https://trackingtime.co/wp-content/uploads/2020/07/Home-office-and-remote-working-solutions-for-team-collaboration.svg";

const Onlinetimesheet = () => {
    
    const [id,setId] = useState(0);
    const [status1, setStatus1] = useState(false)
    const [status2, setStatus2] = useState(false)
    const [status3, setStatus3] = useState(false)
    const [status4, setStatus4] = useState(false)

    const handleClick1 =()=>{
        setStatus1(true)
        setStatus2(false)
        setStatus3(false)
        setStatus4(false)
        setId(0)
    }
    const handleClick2 =()=>{
       setStatus1(false)
        setStatus2(true)
        setStatus3(false)
        setStatus4(false)
        setId(1)
    }
    const handleClick3 =()=>{
       setStatus1(false)
        setStatus2(false)
        setStatus3(true)
        setStatus4(false)
        setId(2)
    }
    const handleClick4 =()=>{
        setStatus1(false)
         setStatus2(false)
         setStatus3(false)
         setStatus4(true)
         setId(3)
     }

    
  return (
    <Box>

            <Box style={styles.cont} className={CSS.cont} >
                
            <Image src={logo1} style={styles.logo1Div} />
            <h4 style={styles.headerH4}>Online Timesheet For Efficient Companies</h4>

            <FormControl style={styles.form} flexDirection={{base:"column", lg:"row"}}  >
                <Input style={styles.formInput} type="email" placeholder="Your Work Email"  width={{base:"100%", lg:"30%"}} />
                <Button style={styles.formButton} width={{base:"100%", lg:"30%"}}>START FOR FREE !</Button>
                </FormControl>

                {/* <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} ></Text> */}
                <HStack margin="auto" mt={{base:"10px"}} >
                    <Image src={img[0]} width="20px" height="20px"/>
                    <Text style={styles.googleText} _hover={{color:"#00ad95"}}>Sigin in with Google</Text>
                </HStack>
                <VStack >
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >
                        
                        <Image src={img[1]} w={{base:"100%", lg:"70%"}} /> 
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Manage your work with online timesheet for payroll, invoicing, projects and more</Heading>
                            <Text style={styles.infoDescText}>With 
                            <Text as="span" fontWeight="bold" textDecoration="underline" > online timesheets, </Text>
                             get actionable insights to improve your team’s
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > productivity. </Text>
                            Generate any kind of business report in just a few clicks.</Text>
                        </VStack>
                    </Stack>
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >                   
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}> Professional reports </Heading>
                            <Text style={styles.infoDescText}>
                            Create daily, weekly or monthly timesheets for projects, employees and clients. Combine filters to categorize your time data and create 
                            <Text as="span" fontWeight="bold"   > reports </Text>
                            tailored to your needs. 
                            </Text>
                        </VStack>
                        <Image src={img[2]} w={{base:"100%", lg:"70%"}} /> 
                    </Stack>
                </VStack>
                <Text>
                    
                    <Stack direction={{base:"column",lg:"row"}} w="85%"  margin="auto" mt="20px" >
                        <VStack w={{base:"100%",lg:"50%"}} >
                         <Button style={styles.dispBtn} shadow="md" onClick={handleClick1} bg={status1? "black":"white"} color={status1? "white":"black"}  > A Time Sheet for Every Process</Button>
                         <Button style={styles.dispBtn} shadow="md" onClick={handleClick2} bg={status2? "black":"white"} color={status2? "white":"black"}  > Easy to Customise </Button>
                         <Button style={styles.dispBtn} shadow="md" onClick={handleClick3} bg={status3? "black":"white"} color={status3? "white":"black"} > Manage Your Team's Productivty </Button>
                         <Button style={styles.dispBtn} shadow="md" onClick={handleClick4} bg={status4? "black":"white"} color={status4? "white":"black"} > Proffesional Reporting </Button>

                        </VStack>
                        <Stack w={{base:"100%",lg:"50%"}} >
                           <Image src={btnimg[id]} />
                        </Stack>
                    </Stack>

                </Text>
                <VStack >
                <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >
                        
                        <Image src={img[3]} w={{base:"100%", lg:"70%"}} /> 
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Stay on top of all your projects with online timesheet</Heading>
                            <Text style={styles.infoDescText}>One of the worst things about having multiple projects 
                            going on at any given time is knowing where you’re 
                            at on all of them. 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > TrackingTime </Text>
                            helps you with project reports.</Text>
                        </VStack>

                    </Stack>
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >                
                        <Image src={img[4]} w={{base:"100%", lg:"70%"}} /> 
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Analyzing Data</Heading>
                            <Text style={styles.infoDescText}>
                            Visualize your 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > time data </Text>      
                            in simple, but powerful charts to get instant answers to common business questions.
                            </Text>
                        </VStack>

                    </Stack>
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >                               
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Make sure your timesheets are always complete</Heading>
                            <Text style={styles.infoDescText}>The more hours you track, the more accurate your reports will be. 
                            TrackingTime’s 
                            <Text as="span" fontWeight="bold" textDecoration="underline"  _hover={{textDecoration:"none"}} > timesheets </Text>
                            ensures that your team keeps tracking al their work hours consistently, every day.
                                </Text> 
                        </VStack>
                        <Image src={img[5]} w={{base:"100%", lg:"70%"}} /> 

                    </Stack>            
                </VStack>
                <Text style={styles.lastHeading}> 3 SIMPLE STEPS TO GET YOUR TEAM’S ONLINE TIMESHEETS </Text>
                {/* <Button style={styles.formButton} width={{base:"80%", lg:"20%"}} margin="auto" mb="50px">START FOR FREE TRAIL</Button> */}

                <VStack>
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >  
                        <Image src={img[6]} w={{base:"100%", lg:"70%"}} />                              
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>Invite your team</Heading>
                            <Text style={styles.infoDescText}>
                            Your team will receive your email invitation to start using 
                            <Text as="span" fontWeight="bold" > TrackingTime  </Text>
                            for every work process you request.
                            </Text> 
                        </VStack>
                       

                    </Stack> 
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >  
                                                 
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}>We collect their hours</Heading>
                            <Text style={styles.infoDescText}> We’ll make sure your team completes their
                            <Text as="span" fontWeight="bold"  > timesheets </Text>
                             anywhere they work and keep them up-to-date.
                            </Text> 
                        </VStack>
                        <Image src={img[7]} w={{base:"100%", lg:"70%"}} />     
                    </Stack> 
                    <Stack style={styles.infoMain} flexDirection={{base:"column", lg:"row"}} >  
                        <Image src={img[8]} w={{base:"100%", lg:"70%"}} />                              
                        <VStack style={styles.infoDesc}>
                            <Heading style={styles.infoDescHeading}> Get your reports </Heading>
                            <Text style={styles.infoDescText}>
                            You can access, export and share every
                            <Text as="span" fontWeight="bold"  > timesheets </Text>
                            submited by your team, and turn them into professional reports.
                            </Text> 
                        </VStack>
                       

                    </Stack> 

                </VStack>
                
            </Box>
            <Text style={styles.lastHeading}> DON’T WASTE TIME WITH OLDFASHIONED TIMESHEETS. </Text>
                <Button style={styles.formButton} width={{base:"80%", lg:"20%"}} margin="auto" mb="50px">START FOR FREE TRAIL</Button>

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

export default Onlinetimesheet