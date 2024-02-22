import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from '../utils/ScrollToTop';

const MainLayout = () => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundImage: 'url(/bgImage.png)' }}
    >
      <ScrollToTop />
      <NavBar></NavBar>
      <Toaster position="top-right" reverseOrder={false} />
      <Outlet></Outlet>

      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
