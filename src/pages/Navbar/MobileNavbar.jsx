import { Box, Button, Drawer, DrawerBody, DrawerCloseButton,
     DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, 
     Image, Input,  Text, useDisclosure, useMediaQuery } from "@chakra-ui/react"
import React, {useRef} from "react"
import {Link} from "react-router-dom"
import ButtonComp from "../Home/ButtonComp"
import { GiHamburgerMenu } from "react-icons/gi"

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [isLargerThan500, isLargerThan300] = useMediaQuery([
      '(min-width: 500px)',
      '(min-width: 300px)',
    ])

    function DetermineMobile(){
      if(isLargerThan500){
        return (
        
          <HStack  display="flex" justifyContent="space-between" width="100%"  height="70px" 
          position="fixed" top="0%"  backgroundColor="#F6F8F9" zIndex="3" flexShrink="2" boxSizing="border-box"
          paddingLeft="20px" paddingRight="60px">
              <Box>
                  <Image width="200px"
                   src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg"
                    />
              </Box>
              
              <Box>
              <Button ref={btnRef}  onClick={onOpen}>
            <GiHamburgerMenu fill="black" size="30px"/>
          </Button>
          <Drawer
            isOpen={isOpen}
            placement='top'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
              <Image width="200px"
                   src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg"
                    />
              </DrawerHeader>
              <DrawerBody lineHeight="3.2">
                 <Text color="#242954" _hover={{color:"#ed565a", cursor:"pointer"}}  fontWeight="bold"><Link to="/integrations"  style={{textDecoration:"none"}}> Integrations </Link> </Text>
                <Text color="#242954" _hover={{color:"#ed565a", cursor:"pointer"}}  fontWeight="bold"><Link to="/blog" style={{textDecoration:"none"}}> Blog         </Link> </Text>
               <Text color="#242954" _hover={{color:"#ed565a", cursor:"pointer"}}  fontWeight="bold">Features</Text>
                <Box marginLeft="10px" lineHeight="3.4" >
                   <Text _hover={{color:"#ed565a", cursor:"pointer"}} color="#242954;"><Link to="/features/timetracker" style={{textDecoration:"none"}}  >Time Tracker       </Link>  </Text>
                  <Text _hover={{color:"#ed565a", cursor:"pointer"}} color="#242954;"><Link to="/features/projectmanagement" style={{textDecoration:"none"}}  >Project Management </Link>  </Text>
                  <Text _hover={{color:"#ed565a", cursor:"pointer"}} color="#242954;"><Link to="/features/onlinetimesheet"  style={{textDecoration:"none"}}>Online Timesheet   </Link>  </Text>
                  <Text _hover={{color:"#ed565a", cursor:"pointer"}} color="#242954;"><Link  to="/features/timecards" style={{textDecoration:"none"}}  >Timecard           </Link>  </Text>
                  <Text _hover={{color:"#ed565a", cursor:"pointer"}} color="#242954;"><Link to="/features/attendancetracking"style={{textDecoration:"none"}}  >Attendance Tracking</Link>  </Text>
                  <Text _hover={{color:"#ed565a", cursor:"pointer"}} color="#242954;"> Time Reporting </Text>

                  <ButtonComp refer="/signup" words="Your Work Email" s="210px" bg="white" bord="0.5px solid black" />
                  <ButtonComp refer="/login" bg="#ed565a" words="Start For Free" s="210px" clr="white" hov="#646cc7" />
  
                </Box>
              </DrawerBody> 
    
              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          </Box>
          </HStack>
        
      )
      }
      else if(isLargerThan300){
        return (
       
          <HStack  display="flex" justifyContent="space-between"   height="60px" width="100%" 
          position="fixed" top="0%"  backgroundColor="#F6F8F9" zIndex="3" flexWrap="wrap"
          paddingLeft="20px" paddingRight="10px">
              <Box>
                  <Image width="200px"
                   src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg"
                    />
              </Box>
   
              <Box>
              <Button ref={btnRef}  onClick={onOpen}>
            <GiHamburgerMenu fill="black" size="30px"/>
          </Button>
          <Drawer
            isOpen={isOpen}
            placement='top'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
              <Image width="200px"
                   src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg"
                    />
              </DrawerHeader>
              <DrawerBody lineHeight="3.2">
                 <Text color="#242954" _hover={{color:"#ed565a", cursor:"pointer"}}  fontWeight="bold"><Link to="/integrations"  style={{textDecoration:"none"}}> Integrations </Link> </Text>
                <Text color="#242954" _hover={{color:"#ed565a", cursor:"pointer"}}  fontWeight="bold"><Link to="/blog" style={{textDecoration:"none"}}> Blog         </Link> </Text>
               <Text color="#242954" _hover={{color:"#ed565a", cursor:"pointer"}}  fontWeight="bold">Features</Text>
                <Box marginLeft="10px" lineHeight="3.4" >
                   <Text _hover={{color:"#ed565a", cursor:"pointer"}} color="#242954;"><Link to="/features/timetracker" style={{textDecoration:"none"}}  >Time Tracker       </Link>  </Text>
                  <Text _hover={{color:"#ed565a", cursor:"pointer"}} color="#242954;"><Link to="/features/projectmanagement" style={{textDecoration:"none"}}  >Project Management </Link>  </Text>
                  <Text _hover={{color:"#ed565a", cursor:"pointer"}} color="#242954;"><Link to="/features/onlinetimesheet"  style={{textDecoration:"none"}}>Online Timesheet   </Link>  </Text>
                  <Text _hover={{color:"#ed565a", cursor:"pointer"}} color="#242954;"><Link  to="/features/timecards" style={{textDecoration:"none"}}  >Timecard           </Link>  </Text>
                  <Text _hover={{color:"#ed565a", cursor:"pointer"}} color="#242954;"><Link to="/features/attendancetracking"style={{textDecoration:"none"}}  >Attendance Tracking</Link>  </Text>
                  <Text _hover={{color:"#ed565a", cursor:"pointer"}} color="#242954;"> Time Reporting </Text>

                  <ButtonComp refer="/signup" words="Your Work Email" s="210px" bg="white" bord="0.5px solid black" />
                  <ButtonComp refer="/login" bg="#ed565a" words="Start For Free" s="210px" clr="white" hov="#646cc7" />
  
                </Box>
              </DrawerBody> 
    
    
              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                  Cancel
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          </Box>
          </HStack>
        
      )
      }
    }
    
    return DetermineMobile()
    
  }
  export default DrawerExample;