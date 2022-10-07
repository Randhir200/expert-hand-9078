import "./home.css"
import React from 'react'
import {Box, Button, Heading, Text, useMediaQuery, VStack}  from "@chakra-ui/react"
import ButtonComp from "./ButtonComp"
import { useWindowSize } from "../Integrations/useWindowSizeHook"
const Header = () => {
  const size = useWindowSize();
  
  const [isLargerThanHD, isDisplayingInBrowser, mobileView] = useMediaQuery([
    '(min-width: 1024px)',
    '(min-width: 500px)',
    '(min-width: 200px)'
  ])

       
    function determineText() {
      if (isLargerThanHD) {
       return  (
        <VStack  width={size.width} display="flex" flexWrap="wrap" flexDirection="column" margin="auto" alignItems="center" justifyContent="center">
        <Box >
          <Text color="#ed565a;" fontWeight="bold" letterSpacing="2.52px"
             fontSize="12px" textAlign="center" margin="0 0 15px" >
              <Text as="span">TRACKINGTIME TIME</Text><Text as="span">TRACKER SOFTWARE</Text>
             
          </Text>
  
          <Text color="#242954;" fontWeight="800" letterSpacing="2.52px"
             fontSize="20px" textAlign="center" margin="0 0 15px" line-height=" 24px">
            SET AND FORGET TIME TRACKING
          </Text>
  
         <Text fontSize="50px" color="#242954;" letterSpacing=".01em"
                fontWeight="700" textAlign="center">
                Bring your productivity
                to   the next level.
         </Text>
         <Box display="flex" justifyContent="center" marginBottom="10px" gap="10px" maxWidth="100%" margin="auto">
         <ButtonComp words="Your Work Email" s="265px" bg="white" bord="0.5px solid black" refer="/signup"/>
          <ButtonComp bg="#ed565a" words="Start For Free" s="210px" clr="white" hov="#646cc7" refer="/login" />
         </Box>
        
        </Box>
      </VStack>)
    
      }
  
      
        else if (isDisplayingInBrowser){
          return (
            <VStack  width={size.width} display="flex" flexWrap="wrap" flexDirection="column" margin="auto" alignItems="center" justifyContent="center">
            <Box display="flex" flexWrap="wrap" flexDirection="column" margin="auto">
              <Text color="#ed565a;" fontWeight="bold" letterSpacing="2.52px"
                 fontSize="18px" textAlign="center" margin="0 0 15px">
                TRACKINGTIME TIME TRACKER SOFTWARE
              </Text>
      
              <Text color="#242954;" fontWeight="800" letterSpacing="2.52px"
                 fontSize="24px" textAlign="center" margin="0 0 15px" line-height="24px">
                SET AND FORGET TIME TRACKING
              </Text>
      
             <Text fontSize="40px" color="#242954;" letterSpacing=".01em" 
                                 fontWeight="700" textAlign="center">
                    Bring your productivity
                    to   the next level.
             </Text>

             <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" marginBottom="10px" gap="10px" margin="auto">
                <ButtonComp refer="/signup" words="Your Work Email" s="400px" bg="white" bord="0.5px solid black" />
                <ButtonComp refer="/login" bg="#ed565a" words="Start For Free" s="400px" clr="white" hov="#646cc7" />
            </Box>
            </Box>
          </VStack>
          )
        }

        else if (mobileView){
          return (
            <VStack  width={size.width} display="flex" flexWrap="wrap" flexDirection="column" margin="auto" alignItems="center" justifyContent="center">
            <Box display="flex" flexWrap="wrap" flexDirection="column" margin="auto">
              <Text color="#ed565a;" fontWeight="bold" letterSpacing="2.52px"
                 fontSize="14px" textAlign="center" margin="0 0 15px">
                TRACKINGTIME TIME TRACKER SOFTWARE
              </Text>
      
              <Text color="#242954;" fontWeight="800" letterSpacing="2.52px"
                 fontSize="20px" textAlign="center" margin="0 0 15px" line-height=" 24px">
                SET AND FORGET TIME TRACKING
              </Text>
      
             <Text fontSize="30px" color="#242954;" 
                    fontWeight="700" textAlign="center" display="flex" flexWrap="wrap">
                    Bring your productivity
                    to   the next level.
             </Text>
            
             <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" marginBottom="10px" gap="10px">
                <ButtonComp refer="/signup" words="Your Work Email" s="400px" bg="white" bord="0.5px solid black" />
                <ButtonComp refer="/login" bg="#ed565a" words="Start For Free" s="400px" clr="white" hov="#646cc7" />
            </Box>
            </Box>
            </VStack>
         
          )
        }
        
      
    }
  
    return determineText()
  }


export default Header