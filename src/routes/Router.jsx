import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import UpcomingEvents from '../pages/UpcomingEvents';
import About from '../pages/About';

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
        path: '/upcoming',
        element: <UpcomingEvents></UpcomingEvents>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
    ],
  },
]);

export default Router;
