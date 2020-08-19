import React from 'react';
import {
  FormInputContainer,
  GroupContainer,
  FormInputLabel,
} from './form.input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      {label && (
        <FormInputLabel
          className={`${otherProps.value.length ? 'shrink' : ''}`}
        >
          {label}
        </FormInputLabel>
      )}
      <FormInputContainer onChange={handleChange} {...otherProps} />
    </GroupContainer>
  );
};

export default FormInput;
