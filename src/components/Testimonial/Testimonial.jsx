import React from 'react' 
import { Bold, Btn, Centertext, Container, Down, Leftbtn, Light, Normal, Rightbtn, Scrol, Small, Testimonialcon, Up } from './style'
import up from '../../assets/qoshtirnoqup.png'
import down from '../../assets/qoshtirnoqdown.png'
import lefticon from '../../assets/lefticon.png'
import righticon from '../../assets/righticon.png'

const Testimonial = () => {
  return (
    <Container>
    <Testimonialcon>
      <Bold>Testimonial</Bold>
    <Centertext> 
      <Normal>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Normal>
      <Light>Ronald Richards <Small>5/19/12</Small> </Light>
    </Centertext> 
      <Btn>
        <Leftbtn><Scrol src={lefticon}></Scrol></Leftbtn>
        <Rightbtn><Scrol src={righticon}></Scrol></Rightbtn>
      </Btn>
      <Up src={up}></Up>
      <Down src={down}></Down>
    </Testimonialcon>
    </Container>
  )
}

export default Testimonial