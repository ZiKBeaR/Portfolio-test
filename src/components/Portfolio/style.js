import styled from "styled-components";

export const Container = styled.div`
text-align: center;
padding-top: 2%;
background: #1E1E1E;
padding-bottom: 3%;
`

export const Works = styled.div`
padding-top: 2%;
background: #1E1E1E;
display: grid;
 gap: 20px;
 grid-template-areas: 'a a a a';
flex-direction: column;
align-items: center;
justify-content: center;
`


export const Bold = styled.div`
font-weight: 700;
font-size: 24px;
line-height: 29px;
letter-spacing: 0.1em;
margin-bottom: 1%;
`
export const Divlarge = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
margin-bottom: 1%;
`

export const Large = styled.div`
font-weight: 400;
font-size: 24px;
line-height: 29px;
margin: 0 3%;
:hover {
  cursor: pointer;
  border-bottom: 3px solid #FF3535;
  padding-bottom: 10px;
}
`
export const Test = styled.img`
:hover{
  cursor: pointer;
  transform: scale(1.05);
}
`
