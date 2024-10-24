import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

import OtpInput from 'components/OtpInput';

import { PATHS } from 'routes/PathConstants';

const VerifyOTP = () => {
  const OTP_LENGTH = 4;
  const {
    AUTH: { LOGIN, RESET_PASSWORD },
  } = PATHS;

  const navigate = useNavigate();
  const [enteredOtp, setEnteredOtp] = useState('');
  const email: string | null = useMemo(() => localStorage.getItem('email'), []);

  useEffect(() => {
    if (!email) navigate(LOGIN);
  }, [email]);

  const removeEmail = async (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      try {
        localStorage.removeItem('email');
        resolve(true);
      } catch (error) {
        reject(false);
      }
    });
  };

  const confirmOTP = (e: React.FormEvent) => {
    e.preventDefault();

    if (enteredOtp.length < OTP_LENGTH) {
      window.alert('Please fill in OTP completely');
      return;
    }

    // simulation of confirming the OTP
    setTimeout(() => {
      // verify OTP here and then remove email
      removeEmail()
        .then(removed => {
          if (removed) navigate(RESET_PASSWORD);
        })
        .catch(() => window.alert('Failed to remove '));
    }, 3000);
  };

  return (
    <>
      <form onSubmit={confirmOTP} className='flex flex-col'>
        <OtpInput numberOfDigits={OTP_LENGTH} otp={enteredOtp} setOtp={setEnteredOtp} />
        <p className='mt-3 font-450 text-base text-center text-granite-gray mx-auto'>
          Enter OTP code that was sent to your email,
          <br />
          <span className='font-medium'>segunsolaru@gmail.com.</span>
        </p>
        <button className='btn-primary mt-8'>Confirm OTP</button>

        <p className='mt-5 text-center text-gull-gray font-medium text-base -tracking-[0.5%]'>
          Didn't get a code?&nbsp;
          <button className='text-cyber-grape'>Resend</button>
        </p>
      </form>
    </>
  );
};

export default VerifyOTP;
