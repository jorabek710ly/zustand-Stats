import React from 'react';
import { useRoutes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './home/Home';
import Login from './login/Login';
import Auth from './auth/Auth';
// import Stats from './statistics/Statistics';
import Statistics from './statistics/Statistics';
const MainRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Auth />,
      children: [
        {
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: 'home',
              element: <Home />,
            },
            {
              path: 'statistics',
              element: <Statistics/>
            }
        
          ],
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return routes;
};

export default React.memo(MainRoutes);