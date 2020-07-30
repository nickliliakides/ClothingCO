import React from 'react';
import './index.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='menu'>
        <div className='menu__item'>
          <div className='content'>
            <h1 className='title'>Hats</h1>
            <span className='subtitle'>Shop Now</span>
          </div>
        </div>
        <div className='menu__item'>
          <div className='content'>
            <h1 className='title'>Jackets</h1>
            <span className='subtitle'>Shop Now</span>
          </div>
        </div>
        <div className='menu__item'>
          <div className='content'>
            <h1 className='title'>Sneakers</h1>
            <span className='subtitle'>Shop Now</span>
          </div>
        </div>
        <div className='menu__item'>
          <div className='content'>
            <h1 className='title'>Women</h1>
            <span className='subtitle'>Shop Now</span>
          </div>
        </div>
        <div className='menu__item'>
          <div className='content'>
            <h1 className='title'>Men</h1>
            <span className='subtitle'>Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
