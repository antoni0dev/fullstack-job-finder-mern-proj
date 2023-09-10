import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from '@/lib/constants';
import HomeLayout from '@/layouts/HomeLayout';
import DashboardLayout from '@/layouts/DashboardLayout';
import {
  LandingPage,
  LoginPage,
  RegisterPage,
  AddJobPage,
  AllJobsPage,
  StatsPage,
  ProfilePage,
  AdminPage,
} from '@/pages';
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
    children: [
      {
        index: true,
        element: <AddJobPage />,
      },
      {
        path: PATHS.stats,
        element: <StatsPage />,
      },
      {
        path: PATHS.profile,
        element: <ProfilePage />,
      },
      {
        path: PATHS.admin,
        element: <AdminPage />,
      },
      {
        path: PATHS.allJobs,
        element: <AllJobsPage />,
      },
    ],
  },
]);

export default router;
