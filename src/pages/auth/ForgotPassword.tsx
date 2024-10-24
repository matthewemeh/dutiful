import { Link } from 'react-router-dom';

import FormInput from 'components/FormInput';
import { PATHS } from 'routes/PathConstants';

const ForgotPassword = () => {
  const {
    AUTH: { LOGIN },
  } = PATHS;

  return (
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
            extraInputClass='!pr-13'>
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
  );
};

export default ForgotPassword;
