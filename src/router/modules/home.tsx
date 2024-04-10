import Layout from '@/layout/default'
import type { RouteObject } from 'react-router-dom'
import Home from '@/pages/Welcome';

// 首页模块
const homeRouter: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/welcome',
        element: <Home />
      },
    ],
  },
];

export default homeRouter;
