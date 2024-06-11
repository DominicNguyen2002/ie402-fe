import { Center } from '~/components/form';

interface ArticlePartProps {
  heading: string;
  content: string;
  image: string;
  index: number;
}

export const ArticlePart: React.FC<ArticlePartProps> = ({ heading, content, image, index }) => {
  return (
    <div className='w-full'>
      <h2 className='text-3xl mb-2.5'>{`${index + 1}. ${heading}`}</h2>
      <Center isFullScreen={false}>
        <img src={image} alt={`Image heading ${index}`} className='w-[20%] h-auto' />
      </Center>
      <p className='text-xl text-gray-700 mb-2.5 text-justify'>{content}</p>
    </div>
  );
};
