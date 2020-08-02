import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  const style = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div
      className={`menu__item ${size ? size : ''}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div style={style} className='background-image' />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
