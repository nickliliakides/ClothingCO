import React from 'react';
import './index.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className='group'>
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
      <input className='form-input' onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default FormInput;
