import styled from "styled-components";

export const MainContainer = styled.main`
 max-width: 320px;
 margin: 0 auto;
 margin-top: 55px;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    margin-top: 80px;
  }
    @media screen and (min-width: 1280px) {
    max-width: 100%;
    margin-top: 110px;
  }
 `