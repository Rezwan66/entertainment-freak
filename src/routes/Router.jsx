import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world</div>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [],
  },
]);

export default Router;
