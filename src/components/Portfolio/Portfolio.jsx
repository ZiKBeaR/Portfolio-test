import React from 'react'
import { Bold, Container, Divlarge, Large, Test, Works } from './style'
import treetree from '../../assets/treetree.png'
import yellowbckg from '../../assets/yellowbckg.png'
import treeonmountain from '../../assets/treeonmountain.png'
import yellowtree from '../../assets/yellowtree.png'
import pumpkin from '../../assets/pumpkin.png'
import cofee from '../../assets/cofee.png'
import spagetti from '../../assets/spagetti.png'
import appels from '../../assets/appels.png'

const Portfolio = () => {
  return (
    <Container>
      <Bold>Portfolio</Bold>
      <Divlarge>
        <Large>Web design</Large>
        <Large>Graphic design</Large>
        <Large>Motion design</Large>
      </Divlarge>
    <Works>
      
       <Test src={treetree}></Test> 
       <Test src={yellowbckg}></Test>
       <Test src={treeonmountain}></Test>
       <Test src={yellowtree}></Test>
       <Test src={pumpkin}></Test>
       <Test src={cofee}></Test>
       <Test src={spagetti}></Test>
       <Test src={appels}></Test>
             
    </Works>

    </Container>
  )
}

export default Portfolio