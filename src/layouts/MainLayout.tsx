import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loading from 'components/Loading';

const MainLayout = () => {
  return (
    <main className='h-screen grid grid-cols-2'>
      <header></header>

      <div className=''>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>

      <footer></footer>
    </main>
  );
};

export default MainLayout;
