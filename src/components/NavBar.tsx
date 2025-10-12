import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/Monster_game_Logo-removebg-preview.png'
import ColorModeSwitch from './ColorModeSwitch'
import Searchinput from './Searchinput'

const NavBar = () => {
  return (
   <HStack padding={'10px'}>
    <Image src={logo} boxSize={'60px'}/>
    <Searchinput></Searchinput>
    <ColorModeSwitch/>
   </HStack>
  )
}

export default NavBar