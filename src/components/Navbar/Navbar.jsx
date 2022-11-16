import React from 'react'
import { Container, Left, Logo, Navbarcon, Pagename, Right } from './style'
import logo from '../../../src/assets/logo.png'

const Navbar = () => {
  return (
    <Container>



    <Navbarcon>

      <Left>
        <Logo src={logo} ></Logo>
      </Left>
      
      <Right>
        <Pagename>Home</Pagename>
        <Pagename>About</Pagename>
        <Pagename>Portfolio</Pagename>
        <Pagename>Testimonial</Pagename>
        <Pagename>Contact</Pagename>
      </Right>

    </Navbarcon>



    </Container>
  )
}

export default Navbar