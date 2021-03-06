import styled from 'styled-components';

export const MenuContainer = styled.div`
  width: 100%;
  max-width: 1292px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
