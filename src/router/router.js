import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layout/main-layout';
import { SignIn } from '../pages/sign-in';
import { Home } from '../pages/home';
import { SignUp } from '../pages/sign-up';
import { ErrorPage } from '../pages/error';
import { Artical } from '../pages/artical';

const router = createBrowserRouter([
  {
    path: '/sign-in',
    element: <SignIn />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />
      },
      {
        path: 'artical',
        element: <Artical />
      }
    ]
  }
]);

export default router;
