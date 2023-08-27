import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from '@/lib/constants';
import HomeLayout from '@/layouts/HomeLayout';
import DashboardLayout from '@/layouts/DashboardLayout';
import { LoginPage, RegisterPage } from '@/pages';
import AuthLayout from '@/layouts/AuthLayout';

const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <HomeLayout />,
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
