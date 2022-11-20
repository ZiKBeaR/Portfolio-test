import React from 'react'
import { Bigtext, Borderredbtn, Btns, Container, Foto, Homepagecon, Left, Redbtn, Right, Smalltext } from './style'
import photo from '../../assets/photo.png'
// import circlel from '../../assets/leftellipse.png'
// import circler from '../../assets/rightellipse.png'


const Homepage = () => {
  return (

    <Container>

    <Homepagecon>
      <Left>
        <Bigtext>Andriano Smith Web designer </Bigtext>
        <Smalltext>Wide range option of furbitures crafted using the brst selected wood.</Smalltext>
        <Btns>
          <Redbtn>Hire me</Redbtn>
          <Borderredbtn>View portfolio</Borderredbtn>
        </Btns>
      </Left>

      <Right>
       <Foto src={photo}></Foto>
       {/* <Leftellipse src={circlel} ></Leftellipse>
       <Rightellipse src={circler}  ></Rightellipse>   */}
      
      </Right>

    </Homepagecon>

    </Container>
  )
}

export default Homepage