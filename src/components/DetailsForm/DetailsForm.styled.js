import styled from "styled-components";

export const StyledInfoBox = styled.div`
width: 300px;
margin-top:60px;
height: auto;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

  @media screen and (min-width: 768px) {
  margin-top:40px;
  width: 400px;
}  
  @media screen and (min-width: 1280px) {
    margin-top:0;
    width: 500px;
}  
`
export const StyledTitle = styled.h3`
text-align: center;
margin-bottom: 20px;
`
export const StyledImgBox = styled.div`
box-shadow: 0 0 25px 2px rgba(0, 0, 0, 0.5);
width: 300px;
height: 350px;
margin-bottom: 15px;
  
@media screen and (min-width: 768px) {
width: 400px;
height: 300px;
}  
@media screen and (min-width: 1280px) {
width: 500px;
height: 350px;
}  
&>img{
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
}
`
export const StyledDesc = styled.p`
font-size: 12px;
margin-bottom:10px;

@media screen and (min-width: 1280px) {
font-size: 17px;
margin-bottom:15px;
}
`
export const StyledPrice = styled.div`
display: flex;
justify-content: right;
width: 100%;
margin-bottom: 15px;
&>p{
   color:#da5c5ccc;
   border-bottom: 1px solid black;
   
   @media screen and (min-width: 1280px) {
   font-size: 20px;
}
}
`
export const StyledButton = styled.button`
width: 120px;
padding: 9px 0;
border: none;
font-size: 12px;
border-radius: 7px;
margin: 0 auto;
margin-bottom: 20px;
background-image: linear-gradient(to right, rgb(255 199 39 / 82%), rgb(158 64 186 / 75%), rgb(112 0 255 / 82%));

@media screen and (min-width: 1280px) {
width: 160px;
padding: 15px 0;
font-size: 16px;
}
&:hover{
background-image: linear-gradient(to left, rgb(255 199 39 / 82%), rgb(158 64 186 / 75%), rgb(112 0 255 / 82%));
color: white;
cursor: pointer;
}
`