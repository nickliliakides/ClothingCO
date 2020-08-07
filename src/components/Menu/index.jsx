import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMenuSections } from '../../store/selectors/menu.selectors';
import './index.scss';
import MenuItem from './MenuItem';

const Menu = ({ sections }) => {
  return (
    <div className='menu'>
      {sections.map(({ id, ...otherSecProps }) => (
        <MenuItem key={id} {...otherSecProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectMenuSections,
});

export default connect(mapStateToProps)(Menu);
