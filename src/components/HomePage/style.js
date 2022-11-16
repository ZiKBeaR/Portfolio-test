import styled from "styled-components";

export const Container = styled.div``

export const Homepagecon = styled.div`
background-color: #1E1E1E;
display: flex;
align-items: center;
justify-content: center;
`

export const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding-left: 5%;
padding-top: 5%;
margin-top: 3%;
margin-bottom: 5%;
`

export const Bigtext = styled.div`
font-family: 'Gilroy';
font-weight: 700;
font-size: 72px;
line-height: 89px;
width: 70%;
margin-bottom: 2%;
`
export const Smalltext = styled.div`
font-weight: 400;
font-size: 18px;
line-height: 150%;
width: 50%;
`
export const Btns = styled.div`
display: flex;
margin-top: 3%;
margin-bottom: 4%;
`

export const Redbtn = styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 141px;
height: 69px;
border: 2px solid #FF3535;
border-radius: 50px;
font-family: 'Montserrat';
font-weight: 700;
font-size: 18px;
line-height: 150%;
color: #FF3535;
margin-right: 5%;
:hover{
  cursor: pointer;
  background: #FF3535;
border-radius: 50px;
font-weight: 700;
font-size: 18px;
line-height: 150%;
color: white;
}
`
export const Borderredbtn = styled.div`
display:flex;
align-items: center;
justify-content: center;
width: 200px;
height: 69px;
border: 2px solid #FF3535;
border-radius: 50px;
font-family: 'Montserrat';
font-weight: 700;
font-size: 18px;
line-height: 150%;
color: #FF3535;
:hover{
  cursor: pointer;
  background: #FF3535;
border-radius: 50px;
font-weight: 700;
font-size: 18px;
line-height: 150%;
color: white;
}
`

export const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
`
export const Foto = styled.img`
box-sizing: border-box;
position: absolute;
left: 64%;
top: 16%;
`

export const Leftellipse = styled.img`
box-sizing: border-box;
position: absolute;
left: 61%;
top: 16%;
background: url(./assets/leftcircle.png);
`

export const Rightellipse = styled.img`
box-sizing: border-box;
position: absolute;
left: 63%;
top: 16%;
`

