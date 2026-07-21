import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyCta from './StickyCta';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <StickyCta />
    </>
  );
}

export default Layout;
