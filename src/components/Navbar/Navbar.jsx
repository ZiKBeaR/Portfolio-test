import React from 'react'
import { Container, Left, Logo, Navbarcon, Pagename, Right } from './style'
import logo from '../../../src/assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Container>



    <Navbarcon>

      <Left>
        <Logo src={logo} ></Logo>
      </Left>
      
      <Right>
        <Link className='link' to='/home'><Pagename>Home</Pagename></Link>
        <Link className='link' to='/about'><Pagename>About</Pagename></Link>
        <Link className='link' to='/portfolio'><Pagename>Portfolio</Pagename></Link>
        <Link className='link' to='/testimonial'><Pagename>Testimonial</Pagename></Link>
        <Link className='link' to='/contact'><Pagename>Contact</Pagename></Link>
      </Right>

    </Navbarcon>



    </Container>
  )
}

export default Navbar