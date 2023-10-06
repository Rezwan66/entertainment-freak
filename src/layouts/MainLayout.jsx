import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const MainLayout = () => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundImage: 'url(/bgImage.png)' }}
    >
      <NavBar></NavBar>
      <div className="max-w-[1440px] mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
