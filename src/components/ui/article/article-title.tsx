import { Center } from '~/components/form';

interface ArticleTitleProps {
  title: string;
  content: string;
  thumbnail: string;
}

export const ArticleTitle: React.FC<ArticleTitleProps> = ({ title, content, thumbnail }) => {
  return (
    <Center isFullScreen={false} className='flex-col'>
      <h1 className='text-5xl mb-2.5'>{title}</h1>
      <img src={thumbnail} alt={`Thumbnail title`} className='w-[30%] h-auto' />
      <p className='text-sm text-gray-700 mb-2.5 text-justify'>{content}</p>
    </Center>
  );
};
