import { useState } from 'react';
import { Link } from 'react-router-dom';

import { PATHS } from 'routes/PathConstants';
import FormInput from 'components/FormInput';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    AUTH: { REGISTER, FORGOT_PASSWORD },
  } = PATHS;

  return (
    <main className='flex flex-col max-w-[486px] mx-auto pt-18 pb-20'>
      <div className='flex flex-col gap-3'>
        <p className='form-subheading'>Jump right back in</p>
        <p className='form-heading'>Login</p>
      </div>

      <form className='flex flex-col mt-15'>
        <div className='form-field'>
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
          <label htmlFor='password'>Password</label>
          <FormInput
            required
            id='password'
            name='password'
            autoComplete='off'
            extraInputClass='!pr-14'
            type={passwordVisible ? 'text' : 'password'}>
            <button
              type='button'
              onClick={() => setPasswordVisible(prev => !prev)}
              className='w-6 h-6 bg-center bg-no-repeat bg-[url(./assets/icons/eye.svg)] absolute top-1/2 -translate-y-1/2 right-6'
            />
          </FormInput>
        </div>

        <Link
          to={FORGOT_PASSWORD}
          className='text-pastel-purple block w-fit ml-auto mt-3 text-sm -tracking-[1%]'>
          Forgot password?
        </Link>

        <button className='btn-primary mt-13'>Login</button>

        <p className='mt-3 text-center text-gull-gray font-medium text-base -tracking-[0.5%]'>
          Don't have an account?&nbsp;
          <Link to={REGISTER} className='text-pastel-purple'>
            Sign Up
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
