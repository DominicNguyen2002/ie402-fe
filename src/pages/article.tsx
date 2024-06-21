import { Center } from '~/components/form';
import { ArticlePart, ArticleTitle } from '~/components/ui';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { contentpi } from '~/api/content.api';
import toast, { Toaster } from 'react-hot-toast';
import { useArticleState } from '~/context/article.context';

export default function Article() {
  const { articleId } = useParams();
  const [contents, setContents] = useState<IContent[]>([]);
  const [article, setArticle] = useState<IArticle>();
  const { articles } = useArticleState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setArticle(articles.find((item) => item.id === articleId));
        const result = await contentpi.getByArticle(articleId || '');
        result.sort((a, b) => a.index - b.index);
        setContents(result);
      } catch (e) {
        toast.error(`Error with ${e}`);
      }
    };

    fetchUser();
  }, []);
  return (
    <Center className='flex-col my-10 px-16'>
      <Toaster />
      <ArticleTitle
        title={article?.title || ''}
        content={article?.content || ''}
        thumbnail={article?.thumbnail || ''}
      ></ArticleTitle>
      {contents.map((item) => (
        <ArticlePart heading={item.heading} content={item.content} image={item.image} index={item.index} />
      ))}
    </Center>
  );
}
