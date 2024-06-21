import { Outlet } from 'react-router-dom';
import { Footer, Header } from '~/components/ui';
import { ArticleProvider } from '~/context/article.context';
import { DiseaseProvider } from '~/context/disease.context';
import { UserProvider } from '~/context/user.context';

export default function MainLayout() {
  return (
    <div>
      <UserProvider>
        <Header />
        <ArticleProvider>
          <DiseaseProvider>
            <div className='mx-8 my-5'>
              <Outlet />
            </div>
          </DiseaseProvider>
        </ArticleProvider>
        <Footer />
      </UserProvider>
    </div>
  );
}
