import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Center } from '~/components/form';
import { useDiseaseState } from '~/context/disease.context';

export default function Disease() {
  const { diseaseId } = useParams();
  const { diseases } = useDiseaseState();
  const [disease, setDisease] = useState<IDisease>();
  useEffect(() => {
    setDisease(diseases.find((item) => item.id === diseaseId));
  }, []);
  return (
    <Center className='flex-col my-10 px-16'>
      <h1 className='text-5xl mb-2.5'>{disease?.name}</h1>
      <img src={disease?.image} alt={`Thumbnail title`} className='w-[30%] h-auto mb-10' />
      <div>
        <h2 className='mb-2 text-xl'>Mô tả</h2>
        <p className='text-xl text-gray-700 mb-2.5 text-justify'>{disease?.description}</p>
      </div>
    </Center>
  );
}
