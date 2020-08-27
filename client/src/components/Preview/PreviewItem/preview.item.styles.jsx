import styled from 'styled-components';
import CustomButton from '../../CustomButton';

export const CollectionPreviewItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  @media screen and (max-width: 991px) {
    width: 100%;
    margin-top: 10px;
  }

  &:hover {
    button {
      display: flex;
      opacity: 0.85;
    }

    .image {
      opacity: 0.8;
    }
  }
`;

export const CollectionPreviewItemImageContainer = styled.img`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionPreviewItemFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionPreviewItemFooterNameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const CollectionPreviewItemFooterPriceContainer = styled.span`
  width: 10%;
`;

export const CollectionPreviewItemButtonContainer = styled(CustomButton)`
  width: 75%;
  opacity: 0.7;
  position: absolute;
  top: 250px;
  display: none;
`;
