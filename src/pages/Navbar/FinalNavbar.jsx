import { Text, useMediaQuery } from "@chakra-ui/react"
import DrawerExample from "./MobileNavbar"
import Navbar from "./Navbar"

function Example() {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1024px)')
  
  return (
    <Text>
      {isLargerThan1280 ? <Navbar /> : <DrawerExample />  } 
    </Text>

  )
}

export default Example