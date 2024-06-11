import { Center } from '~/components/form';
import { ArticlePart, ArticleTitle } from '~/components/ui';

export default function Article() {
  return (
    <Center isFullScreen={false} className='flex-col my-10 px-16'>
      <ArticleTitle
        title={'asdfasdfasd'}
        content={'asdfasdfasfd'}
        thumbnail={'https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg'}
      ></ArticleTitle>
      <ArticlePart
        heading={'sdfsa'}
        content={'dsfasdfsad'}
        image={'https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg'}
        index={0}
      ></ArticlePart>
    </Center>
  );
}
