import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundImage: 'url(/bgImage.png)' }}
    >
      <NavBar></NavBar>

      <Outlet></Outlet>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
