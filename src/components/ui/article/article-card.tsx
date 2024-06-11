import { useTranslation } from 'react-i18next';

interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, imageUrl }) => {
  const { t } = useTranslation();
  return (
    <div className='border border-gray-300 rounded-lg overflow-hidden w-56'>
      <img src={imageUrl} alt='Article' className='w-full h-auto' />
      <div className='p-4'>
        <h2 className='text-lg mb-2.5'>{title}</h2>
        <p className='text-sm text-gray-700 mb-2.5'>{description}</p>
        <a href='#' className='text-blue-500 no-underline text-sm hover:underline'>
          {t('read-article')}
        </a>
      </div>
    </div>
  );
};
