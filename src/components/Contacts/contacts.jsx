import React from 'react'
import { Bold, Contactcon, Container, Email, Endbar, Follow, Icons, Left, Logos, Mapp, Message, Name, Right, Send } from './style'
import map from '../../assets/map.png'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import behance from '../../assets/behance.png'
import instagramm from '../../assets/instagramm.png'
import youtube from '../../assets/youtube.png' 

const Contact = () => {
  return (
    <Container>
      <Contactcon>
        <Left>
          <Bold>Get in touch.</Bold>
          <Name type={'text'} placeholder='Name'></Name>
          <Email type={'email'} placeholder="Email"></Email>
          <Message placeholder='Massage'></Message>
          <Send>Send message</Send>
        </Left>
        <Right>
          <Mapp src={map}></Mapp>
        </Right>
      </Contactcon>

{/* -----------------------------Endbar------------------------- */}

      <Endbar>
        <Follow>Follow me</Follow>
        <Logos>
          <Icons src={twitter}></Icons>
          <Icons src={facebook}></Icons>
          <Icons src={behance}></Icons>
          <Icons src={instagramm}></Icons>
          <Icons src={youtube}></Icons>
        </Logos>
      </Endbar>

    </Container>
  )
}

export default Contact