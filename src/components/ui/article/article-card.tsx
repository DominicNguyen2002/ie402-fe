import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import APP_PATH from '~/constants/app-path';
import { truncateString } from '~/utils/string.util';

interface ArticleCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ id, title, imageUrl }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className='border border-gray-300 rounded-lg overflow-hidden w-[250px] h-[420px]'>
      <img src={imageUrl} alt='Article' className='w-full h-[250px]' />
      <div className='p-4 flex flex-col justify-between h-[170px]'>
        <h2 className='text-lg mb-2.5'>{truncateString(title, 90)}</h2>
        <a
          className='text-blue-500 no-underline text-sm hover:underline flex justify-end cursor-pointer'
          onClick={() => {
            navigate(`${APP_PATH.article}/${id}`);
            window.scrollTo(0, 0);
          }}
        >
          {t('read-article')}
        </a>
      </div>
    </div>
  );
};
