import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const MainLayout = () => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundImage: 'url(/bgImage.png)' }}
    >
      <NavBar></NavBar>

      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
