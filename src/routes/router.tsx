import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from '../lib/constants';
import HomeLayout from '../layouts/HomeLayout';

// RRD 6.4 bought two new cool things
// loaders - allow to pre-load the data
// actions - allow us to handle the form submissions

const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <HomeLayout />,
  },
]);

export default router;
