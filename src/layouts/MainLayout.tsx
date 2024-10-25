import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Loading from 'components/Loading';

const MainLayout = () => {
  return (
    <div>
      <Header />

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>

      <Footer />
    </div>
  );
};

export default MainLayout;
