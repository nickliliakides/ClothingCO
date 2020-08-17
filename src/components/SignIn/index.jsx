import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import {
  SignInContainer,
  SignInTitleContainer,
  SignInButtonsContainer,
} from './signin.styles';
import {
  googleSignInStart,
  signInStart,
} from '../../store/actions/user.actions';

const initialState = {
  email: '',
  password: '',
};

const SignIn = ({ googleSignInStart, signInStart }) => {
  const [state, setState] = useState(initialState);

  const { email, password } = state;

  const handleChange = (e) => {
    const { value, name } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signInStart(email, password);
  };

  return (
    <SignInContainer>
      <SignInTitleContainer>Already have an account?</SignInTitleContainer>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <SignInButtonsContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            type='button'
            isGoogleSignIn
            onClick={googleSignInStart}
          >
            Sign In With Google
          </CustomButton>
        </SignInButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  signInStart: (email, password) => dispatch(signInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
