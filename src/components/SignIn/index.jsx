import React, { useState } from 'react';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import {
  SignInContainer,
  SignInTitleContainer,
  SignInButtonsContainer,
} from './signin.styles';

const initialState = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [state, setState] = useState(initialState);

  const { email, password } = state;

  const handleChange = (e) => {
    const { value, name } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setState({ ...state, email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
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
          <CustomButton type='button' isGoogleSignIn onClick={signInWithGoogle}>
            Sign In With Google
          </CustomButton>
        </SignInButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
