import styled from "styled-components";

export const CloseButton = styled.button`
  position: absolute;
  top: 60px;
  right: 7px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  stroke: none;
  z-index: 1;
  stroke: black;

  @media screen and (min-width: 768px) {
  top: 15px;
  right: 15px;
}  
`

export const ModalContent = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
  width: 500px;
  max-height: 550px;
  border-radius: 24px;
  margin-top: 70px;
}  
  @media screen and (min-width: 1280px) {
  width: 600px;
  max-height: 700px;
}  
`

export const ModalWrapper = styled.div`
  position: fixed;
  overflow-y: auto;
  z-index: 999;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(7px);
`