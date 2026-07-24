import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyCta from './StickyCta';
import ByqLabelsToggle from './ByqLabelsToggle';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <StickyCta />
      <ByqLabelsToggle />
    </>
  );
}

export default Layout;
