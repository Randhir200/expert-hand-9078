import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AutoPlay from './Slicker';
const SlideShowComp = () => {

  return (
    <Box width="100%" bgColor="white" height="300px" paddingTop="30px" display="flex"
      flexDirection="column" boxSizing="bor">
         <Text fontWeight="bold" fontSize="16px" color="#7f8488" textAlign="center" >
            Companies of all shapes and sizes use TrackingTime:
        </Text>
        {/* slider */}
        <AutoPlay />
    </Box>
  )
}

export default SlideShowComp