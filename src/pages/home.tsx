import { useTranslation } from 'react-i18next';
import { Center } from '~/components/form';
import { ArticleCard } from '~/components/ui';

export default function Home() {
  const { t } = useTranslation();
  return (
    <Center className='flex-col my-10'>
      <ArticleCard
        title={'test'}
        description={'adsfasdfasdf'}
        imageUrl={'https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg'}
      ></ArticleCard>
    </Center>
  );
}
