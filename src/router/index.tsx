import { Navigate, useRoutes } from 'react-router-dom'
import homeRoutes from './modules/home'

function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate to="/welcome" />,
    },
    ...homeRoutes,
  ])

  return routes
}

export default Router
