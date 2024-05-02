import styled from "styled-components";

export const StyledList = styled.div`
display: flex;
list-style: none;
flex-direction: row;
align-items: center;
max-width: 320px;
flex-wrap: wrap;
gap: 20px;
padding-bottom: 30px;

@media screen and (min-width: 768px) {
    justify-content: center;
    max-width: 550px;
  }
 @media screen and (min-width: 1280px) {
    max-width: 2080px;
  }
`
export const SearchButton = styled.button`
background-image: linear-gradient(to right, rgb(255 199 39 / 82%), rgb(158 64 186 / 75%), rgb(112 0 255 / 82%));
width: 120px;
padding: 9px 0;
border: none;
font-size: 12px;
border-radius: 7px;
margin: 0 auto;
margin-top: 20px;
margin-bottom: 30px;
display: block;
&:hover{
background-image: linear-gradient(to left, rgb(255 199 39 / 82%), rgb(158 64 186 / 75%), rgb(112 0 255 / 82%));
color: white;
cursor: pointer;
}
@media screen and (min-width: 768px) {
margin-top: 30px;
  }
  @media screen and (min-width: 1280px) {
margin-top: 30px;
width: 150px;
padding: 12px 0;
font-size: 14px;
}
`