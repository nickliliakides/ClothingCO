import React from 'react';
import './index.scss';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

const SignInUp = () => {
  return (
    <div className='sign-in-up-wrapper'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInUp;
