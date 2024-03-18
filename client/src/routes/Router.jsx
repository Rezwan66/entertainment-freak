import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import UpcomingEvents from '../pages/UpcomingEvents';
import About from '../pages/About';
import ServiceDetails from '../pages/ServiceDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: () => fetch('/services.json'),
      },
      {
        path: '/category/:id',
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
      {
        path: '/upcoming',
        element: (
          <PrivateRoute>
            <UpcomingEvents></UpcomingEvents>
          </PrivateRoute>
        ),
      },
      {
        path: '/about',
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default Router;
