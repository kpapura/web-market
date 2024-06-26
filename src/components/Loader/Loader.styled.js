import styled from 'styled-components';

export const LoaderItem = styled.span`
  position: relative;
  width: 100px;
  height: 100px;
  &::before,
  &::after {
    content: '';
    border-radius: 50%;
    position: absolute;
    inset: 0;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3) inset;
  }
  &::after {
    box-shadow: 0 2px 0 #ff3d00 inset;
    animation: rotate 2s linear infinite;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
