import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionPageTitleContainer = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionPageItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  & .collection-item {
    margin-bottom: 30px;
  }
`;
