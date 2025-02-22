import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import User from 'components/icons/User';
import Store from 'components/icons/Store';
import Checkbox from 'components/Checkbox';
import FormInput from 'components/FormInput';

import { PATHS } from 'routes/PathConstants';

type RegType = 'user' | 'service-provider';

const Register = () => {
  const navigate = useNavigate();
  const [regType, setRegType] = useState<RegType>('user');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const {
    AUTH: { LOGIN, VERIFY_OTP },
  } = PATHS;

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    // simulation of signing up
    const formElement = e.target as EventTarget & HTMLFormElement;
    const form = new FormData(formElement);
    const { email, termsAgreed } = Object.fromEntries(form.entries());
    if (!termsAgreed) {
      return window.alert('Please kindly agree to the terms and conditions');
    }

    setTimeout(() => {
      sessionStorage.setItem('email', email as string);
      navigate(VERIFY_OTP);
    }, 3000);
  };

  return (
    <>
      <div className='flex flex-col gap-3'>
        <p className='form-subheading'>Sign up for free!</p>
        <p className='form-heading'>Get started</p>
      </div>

      <div className='flex justify-between gap-9 mt-8'>
        <button
          onClick={() => setRegType('user')}
          className={`register-type flex-[1_0_206px] ${regType === 'user' && 'active'}`}>
          <User />
          <span>Regular user</span>
        </button>
        <button
          onClick={() => setRegType('service-provider')}
          className={`register-type flex-[1_0_243px] ${
            regType === 'service-provider' && 'active'
          }`}>
          <Store />
          <span>Service provider</span>
        </button>
      </div>

      <form className='flex flex-col mt-15' onSubmit={handleSignUp}>
        <div className='form-field'>
          <label htmlFor='fullName'>Full name</label>
          <FormInput required id='fullName' name='fullName' autoComplete='name' type='text' />
        </div>

        <div className='form-field mt-6'>
          <label htmlFor='email'>Email</label>
          <FormInput
            required
            id='email'
            name='email'
            type='email'
            inputMode='email'
            autoComplete='email'
          />
        </div>

        <div className='form-field mt-6'>
          <label htmlFor='phoneNumber'>Phone number</label>
          <FormInput
            required
            type='tel'
            inputMode='tel'
            id='phoneNumber'
            name='phoneNumber'
            autoComplete='tel'
          />
        </div>

        <div className='form-field mt-6'>
          <label htmlFor='password'>Password</label>
          <FormInput
            required
            id='password'
            name='password'
            extraInputClass='!pr-13'
            autoComplete='new-password'
            type={passwordVisible ? 'text' : 'password'}>
            <button
              type='button'
              onClick={() => setPasswordVisible(prev => !prev)}
              className={`w-6 h-6 bg-center bg-no-repeat absolute top-1/2 -translate-y-1/2 right-4 ${
                passwordVisible
                  ? 'bg-[url(./assets/icons/eye.svg)]'
                  : 'bg-[url(./assets/icons/eye-slash.svg)]'
              }`}
            />
          </FormInput>
        </div>

        <div className='form-field mt-6'>
          <label htmlFor='confirmPassword'>Re-enter password</label>
          <FormInput
            required
            id='confirmPassword'
            name='confirmPassword'
            extraInputClass='!pr-13'
            autoComplete='new-password'
            type={confirmPasswordVisible ? 'text' : 'password'}>
            <button
              type='button'
              onClick={() => setConfirmPasswordVisible(prev => !prev)}
              className={`w-6 h-6 bg-center bg-no-repeat absolute top-1/2 -translate-y-1/2 right-4 ${
                confirmPasswordVisible
                  ? 'bg-[url(./assets/icons/eye.svg)]'
                  : 'bg-[url(./assets/icons/eye-slash.svg)]'
              }`}
            />
          </FormInput>
        </div>

        <div className='flex gap-2.5 items-center mt-3'>
          <Checkbox id='termsAgreed' name='termsAgreed' />
          <p>
            I agree to Dutiful's&nbsp;
            <Link to='/' className='text-pastel-purple'>
              terms and conditions
            </Link>
          </p>
        </div>

        <button className='btn-primary mt-13'>Sign up</button>

        <p className='mt-3 text-center text-gull-gray font-medium text-base -tracking-[0.5%]'>
          Already have an account?&nbsp;
          <Link to={LOGIN} className='text-pastel-purple'>
            Login
          </Link>
        </p>
      </form>
    </>
  );
};

export default Register;
