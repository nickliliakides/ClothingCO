import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const CollectionPreviewTitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

export const CollectionPreviewItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
