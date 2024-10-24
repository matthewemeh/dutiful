import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Loading from 'components/Loading';

const AuthLayout = () => {
  return (
    <div>
      <Header />

      <main className='flex flex-col max-w-[486px] mx-auto pt-18 pb-20'>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default AuthLayout;
