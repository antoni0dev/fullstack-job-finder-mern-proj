import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from '@/lib/constants';
import HomeLayout from '@/layouts/HomeLayout';
import DashboardLayout from '@/layouts/DashboardLayout';
import { LandingPage, LoginPage, RegisterPage } from '@/pages';
import AuthLayout from '@/layouts/AuthLayout';
import ErrorPage from '@/pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <LandingPage />,
        index: true,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: PATHS.register,
        element: <RegisterPage />,
      },
      {
        path: PATHS.login,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: PATHS.dashboard,
    element: <DashboardLayout />,
    children: [],
  },
]);

export default router;
