import { useState } from 'react';
import { Link } from 'react-router-dom';

import FormInput from 'components/FormInput';
import { PATHS } from 'routes/PathConstants';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const {
    AUTH: { LOGIN, VERIFY_OTP },
  } = PATHS;

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    // simulation of sending an email
    setTimeout(() => {
      localStorage.setItem('email', email);
      setEmailSent(true);
    }, 3000);
  };

  return (
    <>
      {emailSent ? (
        <>
          <div className='mt-14 mx-auto w-[139px] h-[139px] rounded-1/2 bg-center bg-no-repeat bg-[url(./assets/icons/mail-2.svg)]' />
          <p className='mt-3 text-base text-center text-granite-gray max-w-[408px] mx-auto'>
            An OTP code has been sent to&nbsp;
            <span className='font-medium'>{email}</span>. Check your email to get the code
          </p>
          <Link to={VERIFY_OTP} className='btn-primary mt-8'>
            Next
          </Link>
        </>
      ) : (
        <>
          <Link
            to={LOGIN}
            className='w-8 h-8 mb-11 bg-center bg-no-repeat bg-[url(./assets/icons/back-circled.svg)]'
          />

          <div className='flex flex-col-reverse gap-3'>
            <p className='form-subheading'>
              Enter your email and we'll send you a mail on how to reset your password.
            </p>
            <p className='form-heading'>Forgot password</p>
          </div>

          <form className='flex flex-col mt-15' onSubmit={sendEmail}>
            <div className='form-field'>
              <label htmlFor='email'>Email</label>
              <FormInput
                required
                id='email'
                name='email'
                type='email'
                value={email}
                inputMode='email'
                autoComplete='email'
                extraInputClass='!pr-13'
                onChange={e => setEmail(e.target.value)}>
                <div className='w-6 h-6 absolute top-1/2 -translate-y-1/2 right-4 bg-center bg-no-repeat bg-[url(./assets/icons/mail-1.svg)]' />
              </FormInput>
            </div>

            <button className='btn-primary mt-13'>Send email</button>

            <p className='mt-5 text-center text-gull-gray font-medium text-base -tracking-[0.5%]'>
              Or&nbsp;
              <Link to={LOGIN} className='text-cyber-grape'>
                Login
              </Link>
            </p>
          </form>
        </>
      )}
    </>
  );
};

export default ForgotPassword;
