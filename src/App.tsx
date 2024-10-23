import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Page404 from 'pages/Page404';
import MainLayout from 'layouts/MainLayout';
import AuthPage404 from 'pages/auth/Page404';

import mainRoutes from 'routes';
import authRoutes from 'routes/auth';

const App = () => {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <Page404 />,
      children: mainRoutes,
    },
    {
      element: <MainLayout />,
      errorElement: <AuthPage404 />,
      children: authRoutes,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
