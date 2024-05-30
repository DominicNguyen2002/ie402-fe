import { Outlet } from 'react-router-dom';
import { Footer, Header } from '~/components/ui';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
