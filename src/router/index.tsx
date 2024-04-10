import { useRoutes, Navigate } from 'react-router-dom'
import homeRoutes from './modules/home'

const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate to="/welcome" />,
    },
    ...homeRoutes
  ])

  return routes
}

export default Router
