import { Outlet } from 'react-router-dom';
import { Footer, Header } from '~/components/ui';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <div className='mx-8 my-5'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
