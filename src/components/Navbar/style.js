import styled from "styled-components";

export const Container = styled.div``

export const Navbarcon = styled.div`
  display: flex;
  background-color: #212121;
`
 export const Left = styled.div`
 flex: 1;
 padding: 1%;
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
 @media only screen and (min-width: 1921px) {
 width: 70px;
 height: 70px;  
}
 @media only screen and (max-width: 1024px) {
 width: 50px;
 height: 50px;  
}
@media only screen and (max-width: 425px) {
 width: 35px;
 height: 35px;  
}
@media only screen and (max-width: 375px) {
 width: 25px;
 height: 25px;  
}
@media only screen and (max-width: 320px) {
 width: 20px;
 height: 20px;  
}
 `

 export const Right = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding-right: 5%;

.link {
 text-decoration: none;
}
 `

 export const Pagename = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  :hover{
    cursor: pointer;
    font-weight: 700;
  }
  @media only screen and (min-width: 1921px) {
  font-size: 23px;  
}
@media only screen and (max-width: 1024px) {
  font-size: 15px;  
}
@media only screen and (max-width: 768px) {
  display: none;
}
`


