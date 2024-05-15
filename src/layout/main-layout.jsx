import { Outlet } from 'react-router-dom';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
