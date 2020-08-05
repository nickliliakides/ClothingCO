import React from 'react';
import './index.scss';
import PreviewItem from './PreviewItem';

const Preview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, i) => i < 4)
          .map((item) => (
            <PreviewItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default Preview;
