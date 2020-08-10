import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  MenuItemContainer,
  MenuItemBackgroundImageContainer,
  MenuItemContentContainer,
  MenuItemContentTitleContainer,
  MenuItemContentSubtitleContainer,
} from './menu.item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <MenuItemBackgroundImageContainer
        className='background-image'
        imageUrl={imageUrl}
      />
      <MenuItemContentContainer className='content'>
        <MenuItemContentTitleContainer>
          {title.toUpperCase()}
        </MenuItemContentTitleContainer>
        <MenuItemContentSubtitleContainer>
          SHOP NOW
        </MenuItemContentSubtitleContainer>
      </MenuItemContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
