import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SignIn from './pages/sign-in';
import Home from './pages/home';
import SignUp from './pages/sign-up';
import ErrorPage from './pages/error';
import Article from './pages/article';
import MainLayout from './layout/main-layout';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='article' element={<Article />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
