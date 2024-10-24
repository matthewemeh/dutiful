import { useState } from 'react';
import { Link } from 'react-router-dom';

import { PATHS } from 'routes/PathConstants';
import FormInput from 'components/FormInput';

const ResetPassword = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const {
    AUTH: { REGISTER },
  } = PATHS;

  return (
    <main className='flex flex-col max-w-[486px] mx-auto pt-18 pb-20'>
      <div className='flex flex-col-reverse gap-3'>
        <p className='form-subheading'>Set your new password</p>
        <p className='form-heading'>Reset password</p>
      </div>

      <form className='flex flex-col mt-15'>
        <div className='form-field'>
          <label htmlFor='password'>Enter new password</label>
          <FormInput
            required
            id='password'
            name='password'
            extraInputClass='!pr-14'
            autoComplete='new-password'
            type={passwordVisible ? 'text' : 'password'}>
            <button
              type='button'
              onClick={() => setPasswordVisible(prev => !prev)}
              className='w-6 h-6 bg-center bg-no-repeat bg-[url(./assets/icons/eye.svg)] absolute top-1/2 -translate-y-1/2 right-6'
            />
          </FormInput>
        </div>

        <div className='form-field mt-6'>
          <label htmlFor='confirmPassword'>Re-enter new password</label>
          <FormInput
            required
            id='confirmPassword'
            name='confirmPassword'
            extraInputClass='!pr-14'
            autoComplete='new-password'
            type={confirmPasswordVisible ? 'text' : 'password'}>
            <button
              type='button'
              onClick={() => setConfirmPasswordVisible(prev => !prev)}
              className='w-6 h-6 bg-center bg-no-repeat bg-[url(./assets/icons/eye.svg)] absolute top-1/2 -translate-y-1/2 right-6'
            />
          </FormInput>
        </div>

        <button className='btn-primary mt-13'>Reset password</button>

        <p className='mt-5 text-center text-gull-gray font-medium text-base -tracking-[0.5%]'>
          Or&nbsp;
          <Link to={REGISTER} className='text-cyber-grape'>
            Create new account.
          </Link>
        </p>
      </form>
    </main>
  );
};

export default ResetPassword;
