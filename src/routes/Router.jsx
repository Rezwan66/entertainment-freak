import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import UpcomingEvents from '../pages/UpcomingEvents';
import About from '../pages/About';
import ServiceDetails from '../pages/ServiceDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/services.json'),
      },
      {
        path: '/service/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: () => fetch('/services.json'),
      },
      {
        path: '/upcoming',
        element: <UpcomingEvents></UpcomingEvents>,
      },
      {
        path: '/about',
        element: <About></About>,
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
