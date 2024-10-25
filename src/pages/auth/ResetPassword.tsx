import { useMemo, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { PATHS } from 'routes/PathConstants';
import FormInput from 'components/FormInput';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const email: string | null = useMemo(() => sessionStorage.getItem('email'), []);

  const {
    AUTH: { REGISTER, LOGIN },
  } = PATHS;

  useEffect(() => {
    if (!email) navigate(LOGIN);
  }, [email]);

  const removeEmail = async (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      try {
        sessionStorage.removeItem('email');
        resolve(true);
      } catch (error) {
        reject(false);
      }
    });
  };

  const resetPassword = (e: React.FormEvent) => {
    e.preventDefault();

    setTimeout(() => {
      // update user password in backend before removing email
      removeEmail().then(removed => {
        if (removed) navigate(LOGIN);
        else window.alert('Could not reset password');
      });
    }, 2000);
  };

  return (
    <>
      <div className='flex flex-col-reverse gap-3'>
        <p className='form-subheading'>Set your new password</p>
        <p className='form-heading'>Reset password</p>
      </div>

      <form className='flex flex-col mt-15' onSubmit={resetPassword}>
        <div className='form-field !hidden'>
          <label htmlFor='email'>Email</label>
          <FormInput
            readOnly
            id='email'
            name='email'
            type='email'
            value={email as string}
            inputMode='email'
            autoComplete='email'
          />
        </div>

        <div className='form-field'>
          <label htmlFor='password'>Enter new password</label>
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
          <label htmlFor='confirmPassword'>Re-enter new password</label>
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

        <button className='btn-primary mt-13'>Reset password</button>

        <p className='mt-5 text-center text-gull-gray font-medium text-base -tracking-[0.5%]'>
          Or&nbsp;
          <Link to={REGISTER} className='text-cyber-grape'>
            Create new account.
          </Link>
        </p>
      </form>
    </>
  );
};

export default ResetPassword;
