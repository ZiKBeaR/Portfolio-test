import styled from "styled-components";

export const Container = styled.div``

export const Navbarcon = styled.div`
  display: flex;
  height: 100px;
  background-color: #212121;
`
 export const Left = styled.div`
 flex: 1;
 padding-left: 5%;
 display: flex;
 align-items: center;
 justify-content: left;
 `

 export const Logo = styled.img`
  :hover{
    cursor: pointer;
    transform: scale(1.05);
 }
 `

 export const Right = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding-right: 5%;
 `

 export const Pagename = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  :hover{
    cursor: pointer;
    font-weight: 700;
  }
 `
