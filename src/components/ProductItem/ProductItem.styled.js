import styled from "styled-components"

export const StyledItem = styled.li`
position: relative;
width: 140px;
height: 210px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
box-shadow: 0px 10px 35px -2px rgba(0, 0, 0, 0.5);
border-radius: 15px;
padding: 10px 0;
gap: 5px;

@media screen and (min-width: 768px) {
  width: 250px;
  height: 270px;
  padding: 15px 0;
}
@media screen and (min-width: 1280px) {
  width: 300px;
  height: 330px;
}

&:hover {
      cursor: pointer;
      box-shadow: 0 0 25px 2px rgba(0, 0, 0, 0.5);
      transition: box-shadow 0.3s ease;
    }
& > button {
    display: block;
    text-align: center;
    position: relative; 
    text-decoration: none; 
    color: inherit; 
    width: 100%; 
    height: 100%; 
    background-color:transparent;
    border-style: none;
    cursor: pointer;
}

&> button > img{
    height: 150px;
    width: 120px;
    border-radius: 15px;
    object-fit: cover;
    
    @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
}
@media screen and (min-width: 1280px) {
  width: 250px;
  height: 250px;
}
}
&>button>svg{
    position: absolute;
    left: 113px;
    top: -5px;
    z-index: 10;
    background-color: white;
    width: 23px;
    height: 22px;
    border-style: none;
    padding: 2px;
    border-radius: 12px;
    transition: transform 0.3s ease, color 0.3s ease, border-color 0.3s ease; 
    
    @media screen and (min-width: 768px) {
    left: 214px;
    top: -11px;
    width: 35px;
    height: 35px;
    border-radius: 17px;
}
    @media screen and (min-width: 1280px) {
    left: 250px;
    top: -11px;
    width: 45px;
    height: 45px;
    border-radius: 20px;

}
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        color: #da5c5ccc;
        border-color: #da5c5ccc;
    }
}
`
export const StyledName = styled.p`
font-size: 13px;
margin-bottom: 5px;

@media screen and (min-width: 768px) {
    margin-top: 10px;
    font-size: 15px;
}
@media screen and (min-width: 1280px) {
    font-size: 17px;
}
`
export const StyledPrice = styled.p`
font-size: 10px;
font-weight: bold;
color: #da5c5ccc;

@media screen and (min-width: 768px) {
    font-size: 12px;
}
@media screen and (min-width: 1280px) {
    font-size: 14px;
}
`