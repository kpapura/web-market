import styled from 'styled-components';

export const StyledInput = styled.div`
  position: relative;
  display: inline-block;

  input {
    padding-left: 30px;
    width: 100%;
    height: 30px;
    border: none;
    margin-bottom: 10px;
    box-shadow: 0 0 10px 2px lightgray;

    &:focus {
      outline: none;
      box-shadow: 0px 10px 35px -2px rgba(0, 0, 0, 0.5);
      transition: box-shadow 0.3s ease;
    }
    &:hover {
      cursor: pointer;
      box-shadow: 0px 10px 35px -2px rgba(0, 0, 0, 0.5);
      transition: box-shadow 0.3s ease;
    }
  }

  svg {
    position: absolute;
    left: 8px;
    top: 37%;
    transform: translateY(-50%);
  }
`;
