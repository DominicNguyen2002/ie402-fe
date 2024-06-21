import { useTranslation } from 'react-i18next';
import { Center } from '~/components/form';
import { ArticleCard } from '~/components/ui';
import { Banner } from '~/components/ui/banner/banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import DiseaseCard from '~/components/ui/disease-card';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDiseaseState } from '~/context/disease.context';
import { useArticleState } from '~/context/article.context';

export default function Home() {
  const { t } = useTranslation();
  const { diseases } = useDiseaseState();
  const { articles } = useArticleState();

  useEffect(() => {}, []);
  return (
    <Center className='flex-col my-10'>
      <Toaster />
      <Banner />
      <div className='mt-20 px-[35px] mb-[100px] w-full'>
        <Swiper slidesPerView={3} spaceBetween={25} modules={[Pagination]} pagination={{ clickable: true }} loop={true}>
          {diseases.length > 0 &&
            diseases.map((item) => (
              <SwiperSlide key={item.id}>
                <DiseaseCard _id={item.id} image={item.image} title={item.name} subTitle={item.description} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <Center className='mb-[100px] flex-col'>
        <div className='mx-auto text-center'>
          <h3 className='mb-4 font-bold text-heading-5'>Bài báo mới nhất về thông tin dịch bệnh</h3>
          <p className='text-body-1 text-philippine-gray'>
            Đây là các bài báo được tổng hợp và thu thập trực tiếp từ các nguồn chính thống
          </p>
        </div>
        <div>
          <div className='flex justify-end items-center w-full text-blue-500 my-4'>{'Xem thêm >>'} </div>
          <div className='grid grid-cols-4 gap-8'>
            {articles.length > 0 &&
              articles.map((item) => (
                <ArticleCard id={item.id} title={item.title} description={item.content} imageUrl={item.thumbnail}></ArticleCard>
              ))}
          </div>
        </div>
      </Center>
    </Center>
  );
}
