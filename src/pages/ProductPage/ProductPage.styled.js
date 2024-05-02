import styled from 'styled-components';

export const ProductSection = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 10px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-left: 20px;
  }
  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
    gap: 50px;
  }
`;
