import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { SignUpContainer, SignUpTitleContainer } from './signup.styles';
import { signUpStart } from '../../store/actions/user.actions';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = ({ signUpStart }) => {
  const [state, setState] = useState(initialState);

  const { displayName, email, password, confirmPassword } = state;

  const handleChange = (e) => {
    const { value, name } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signUpStart(email, password, displayName);

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   await createUserProfileDocument(user, { displayName });

    //   setState(initialState);
    // } catch (error) {
    //   console.log('Error creating user', error);
    // }
  };

  return (
    <SignUpContainer>
      <SignUpTitleContainer>Don't have an account?</SignUpTitleContainer>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit} className='sign-up-form'>
        <FormInput
          name='displayName'
          type='text'
          value={displayName}
          handleChange={handleChange}
          label='Display Name'
          required
        />
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
        <FormInput
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          handleChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password, displayName) =>
    dispatch(signUpStart({ email, password, displayName })),
});

export default connect(null, mapDispatchToProps)(SignUp);
