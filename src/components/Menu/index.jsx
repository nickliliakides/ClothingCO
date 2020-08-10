import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMenuSections } from '../../store/selectors/menu.selectors';
import MenuItem from './MenuItem';
import { MenuContainer } from './menu.styles';

const Menu = ({ sections }) => {
  return (
    <MenuContainer>
      {sections.map(({ id, ...otherSecProps }) => (
        <MenuItem key={id} {...otherSecProps} />
      ))}
    </MenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectMenuSections,
});

export default connect(mapStateToProps)(Menu);
