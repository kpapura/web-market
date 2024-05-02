import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: rgb(158 64 186 / 75%);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(112 0 255 / 82%);
  }
`;
