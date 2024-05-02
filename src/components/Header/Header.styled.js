import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  padding: 10px 5px;
  background-color: white;
  border-bottom: 1px solid rgb(158 64 186 / 75%);
  position: fixed;
  top: 0;
  z-index: 1000;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 68px;
  }
  @media screen and (min-width: 1280px) {
    height: 80px;
  }
`;

export const LogoBox = styled.div`
  display: flex;
`;

export const Image = styled.img`
  display: inline-block;
  width: 100px;

  @media screen and (min-width: 768px) {
    width: 150px;
  }
  @media screen and (min-width: 1280px) {
    width: 200px;
  }
`;
