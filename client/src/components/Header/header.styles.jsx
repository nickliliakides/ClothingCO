import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100px;
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 100px;
  height: 70px;
  margin-left: -20px;

  @media screen and (max-width: 800px) {
    height: 50px;
    width: 70px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 60%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;

  @media screen and (max-width: 800px) {
    padding: 7px;
  }
`;
