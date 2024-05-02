import styled from "styled-components";

export const StyledForm = styled.form`
display: flex;
flex-direction: column;

  @media screen and (min-width: 1280px) {
    width: 250px;
  }
`

export const SelectContainer = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
justify-content: space-between;
margin-bottom: 15px;

@media screen and (min-width: 768px) {
    flex-direction: column;
  }
`
export const StyledButton = styled.button`
width: 120px;
padding: 9px 0;
border: none;
font-size: 12px;
border-radius: 7px;
margin: 0 auto;
margin-bottom: 30px;
background-image: linear-gradient(to right, rgb(255 199 39 / 82%), rgb(158 64 186 / 75%), rgb(112 0 255 / 82%));

&:hover{
background-image: linear-gradient(to left, rgb(255 199 39 / 82%), rgb(158 64 186 / 75%), rgb(112 0 255 / 82%));
color: white;
cursor: pointer;
}
`