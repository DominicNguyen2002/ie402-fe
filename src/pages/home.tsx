import { useTranslation } from 'react-i18next';
import { Center } from '~/components/form';
import { ArticleCard } from '~/components/ui';
import { Banner } from '~/components/ui/banner/banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import DiseaseCard from '~/components/ui/disease-card';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/swiper.min.css';
// import 'swiper/modules/pagination/pagination.min.css';
import { Grid, Pagination } from 'swiper/modules';

export default function Home() {
  const { t } = useTranslation();
  const diseases = [
    {
      _id: 'ds',
      name: 'Covid-19',
      subTitle: 'Gây ra hội chứng hô hấp cấp tính nặng, lây lan nhanh chóng và có thể dẫn đến tử vong.',
      image:
        'https://cdn-images.vtv.vn/zoom/640_400/2023/1/3/03012023-covid-1672723503382272631593-crop-1672723509078616220674.jpg'
    },
    {
      _id: 'ds1',
      name: 'Cúm mùa',
      subTitle: 'Gây ra các triệu chứng như sốt, ho, đau họng, đau nhức cơ và mệt mỏi.',
      image:
        'https://rafflesmedical.vn/wp-content/uploads/2021/10/sick-woman-with-rheum-headache-holding-napkin-sitting-sofa-with-coverlet-pills-home-1000x667.jpg'
    },
    {
      _id: 'ds2',
      name: 'Bệnh lao',
      subTitle: 'Gây ho kéo dài, sốt, sụt cân, và có thể lây lan qua không khí.',
      image: 'https://www.labiotech.eu/wp-content/uploads/2023/03/Tuberculosis.jpg'
    },
    {
      _id: 'ds3',
      name: 'Covid-19',
      subTitle: 'Gây ra hội chứng hô hấp cấp tính nặng, lây lan nhanh chóng và có thể dẫn đến tử vong.',
      image: 'https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg'
    },
    {
      _id: 'ds4',
      name: 'Covid-19',
      subTitle: 'Gây ra hội chứng hô hấp cấp tính nặng, lây lan nhanh chóng và có thể dẫn đến tử vong.',
      image: 'https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg'
    },
    {
      _id: 'ds5',
      name: 'Covid-19',
      subTitle: 'Gây ra hội chứng hô hấp cấp tính nặng, lây lan nhanh chóng và có thể dẫn đến tử vong.',
      image: 'https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg'
    },
    {
      _id: 'ds6',
      name: 'Covid-19',
      subTitle: 'Gây ra hội chứng hô hấp cấp tính nặng, lây lan nhanh chóng và có thể dẫn đến tử vong.',
      image: 'https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg'
    },
    {
      _id: 'ds7',
      name: 'Covid-19',
      subTitle: 'Gây ra hội chứng hô hấp cấp tính nặng, lây lan nhanh chóng và có thể dẫn đến tử vong.',
      image: 'https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg'
    }
  ];
  const articles = [
    {
      title: 'Tăng cường năng lực kiểm soát dịch bệnh động vật và bảo đảm an toàn thực phẩm động vật',
      description: 'adsfasdfasdf',
      imageUrl: 'https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg'
    },
    {
      title: 'Số ca COVID-19 giảm 7 ngày liên tiếp; Hà Nội đã kiểm soát được tình hình dịch bệnh',
      description: 'adsfasdfasdf',
      imageUrl:
        'https://bcp.cdnchinhphu.vn/zoom/270_169/334894974524682240/2022/3/18/hn-1647575713465634043473-31-0-531-800-crop-16475757726101335451927.jpg'
    },
    {
      title: 'VỤ VIỆT Á: Khởi tố thêm nhiều cán bộ thuộc Bộ Y tế, Bộ KHCN và Giám đốc CDC 2 tỉnh',
      description: 'adsfasdfasdf',
      imageUrl: 'https://bcp.cdnchinhphu.vn/zoom/270_169/Uploaded/tranducmanh/2021_12_31/Vieta.jpg'
    },
    {
      title: 'Bác tin TPHCM xuất hiện ca mắc biến thể Omicron',
      description: 'adsfasdfasdf',
      imageUrl: 'https://bcp.cdnchinhphu.vn/zoom/270_169/Uploaded/tranducmanh/2021_12_27/omicron-1-4708.jpg'
    },
    {
      title: 'test',
      description: 'adsfasdfasdf',
      imageUrl: 'https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg'
    },
    {
      title: 'test',
      description: 'adsfasdfasdf',
      imageUrl: 'https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg'
    },
    {
      title: 'test',
      description: 'adsfasdfasdf',
      imageUrl: 'https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg'
    },
    {
      title: 'test',
      description: 'adsfasdfasdf',
      imageUrl: 'https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg'
    },
    {
      title: 'test',
      description: 'adsfasdfasdf',
      imageUrl: 'https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg'
    },
    {
      title: 'test',
      description: 'adsfasdfasdf',
      imageUrl: 'https://img.freepik.com/free-vector/online-article-concept-illustration_114360-5193.jpg'
    }
  ];
  return (
    <Center className='flex-col my-10'>
      <Banner />
      <div className='mt-20 px-[35px] mb-[100px] w-full'>
        <Swiper slidesPerView={3} spaceBetween={25} modules={[Pagination]} pagination={{ clickable: true }} loop={true}>
          {diseases.length > 0 &&
            diseases.map((item) => (
              <SwiperSlide key={item._id}>
                <DiseaseCard _id={item._id} image={item.image} title={item.name} subTitle={item.subTitle} />
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
                <ArticleCard title={item.title} description={item.description} imageUrl={item.imageUrl}></ArticleCard>
              ))}
          </div>
        </div>
      </Center>
    </Center>
  );
}
