import React from 'react';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import { SignInUpPageContainer } from './sign-in-up.styles';

const SignInUp = () => {
  return (
    <SignInUpPageContainer>
      <SignIn />
      <SignUp />
    </SignInUpPageContainer>
  );
};

export default SignInUp;
