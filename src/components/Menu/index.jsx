import React, { useState } from 'react';
import './index.scss';
import MenuItem from './MenuItem';

const Menu = () => {
  const [state, setState] = useState({
    sections: [
      {
        title: 'Accessories',
        imageUrl:
          'https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        id: 1,
        linkUrl: 'shop/accessories',
      },
      {
        title: 'Jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets',
      },
      {
        title: 'Shoes',
        imageUrl:
          'https://images.unsplash.com/photo-1496579538151-212636d0b01c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        id: 3,
        linkUrl: 'shop/shoes',
      },
      {
        title: 'Women',
        imageUrl:
          'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        size: 'large',
        id: 4,
        linkUrl: 'shop/women',
      },
      {
        title: 'Men',
        imageUrl:
          'https://images.unsplash.com/photo-1584940121258-c2553b66a739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        size: 'large',
        id: 5,
        linkUrl: 'shop/men',
      },
    ],
  });
  return (
    <div className='menu'>
      {state.sections.map(({ id, ...otherSecProps }) => (
        <MenuItem key={id} {...otherSecProps} />
      ))}
    </div>
  );
};

export default Menu;
