import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const ButtonComp = ({words,s, bg, clr, bord, hov, refer}) => {
  return (
    <div>
        <Button zIndex="1" cursor="pointer" border={bord} width={s} bgColor={bg} _hover={{bgColor:hov}} color={clr} >
         <Link to={refer}>{ words} </Link> 
        </Button>
    </div>
  )
}

export default ButtonComp