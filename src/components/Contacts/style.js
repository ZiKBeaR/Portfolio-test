import styled from "styled-components";

export const Container = styled.div``

export const Contactcon = styled.div`
background: #1E1E1E;
display: flex;
padding: 5%;
`
export const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
`
export const Bold = styled.div`
font-weight: 700;
font-size: 36px;
line-height: 44px;
margin-bottom: 5%;
`
export const Name = styled.input`
width: 287px;
height: 70px;
background: #212121;
box-shadow: 4px 11px 26px rgba(0, 0, 0, 0.1);
border-radius: 10px;
padding: 0 10px;
border-color: transparent;
font-weight: 400;
font-size: 18px;
line-height: 150%;
margin-bottom: 4%;
:hover {
  border-color: #FF3535;
}
`
export const Email = styled.input`
width: 499px;
height: 70px;
background: #212121;
box-shadow: 4px 11px 26px rgba(0, 0, 0, 0.1);
border-radius: 10px;
padding-left: 10px;
border-color: transparent;
font-weight: 400;
font-size: 18px;
line-height: 150%;
margin-bottom: 4%;
:hover {
  border-color: #FF3535;
}
`
export const Message = styled.textarea`
width: 499px;
height: 200px;
background: #212121;
box-shadow: 4px 11px 26px rgba(0, 0, 0, 0.1);
border-radius: 10px;
padding-left: 10px;
border-color: transparent;
font-weight: 400;
font-size: 18px;
line-height: 150%;
margin-bottom: 4%;
:hover {
  border-color: #FF3535;
}
`
export const Send = styled.div`
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
export const Mapp = styled.img`
:hover {
  cursor: pointer;
}
` 
export const Endbar = styled.div`
height: 200px;
background: #212121;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const Follow = styled.div`
font-weight: 700;
font-size: 24px;
line-height: 29px;
letter-spacing: 0.2em;
margin-bottom: 1%;
`
export const Logos = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const Icons = styled.img`
margin: 0 6%;
:hover {
  cursor: pointer;
  transform: scale(1.05);
}
`