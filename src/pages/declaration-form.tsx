import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { userDiseaseApi } from '~/api/user-disease.api';
import { Center } from '~/components/form';
import Button from '~/components/form/button/button';
import Dropdown from '~/components/form/dropdown';
import { useDiseaseState } from '~/context/disease.context';
import { useUserState } from '~/context/user.context';

export default function DeclarationForm() {
  const { user } = useUserState();
  const { diseases } = useDiseaseState();
  const [location, setLocation] = useState<string>('');
  const [diseaseId, setDiseaseId] = useState<string>('');
  const [state, setState] = useState<number>(1);
  const { t } = useTranslation();
  const options = ['Đã mất', 'Đã hết bệnh', 'Chưa bệnh', 'Đang bị bệnh'];

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setLocation('Geolocation is not supported by this browser.');
    }
  };

  const showPosition = (position: GeolocationPosition) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation(`[${latitude}, ${longitude}]`);
  };

  const showError = (error: GeolocationPositionError) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setLocation('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        setLocation('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        setLocation('The request to get user location timed out.');
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      await userDiseaseApi.declare({
        userId: user?.id || '',
        diseaseId: diseaseId,
        location: location,
        state: state,
        status: 0
      });
      toast(t('common-submit-success'));
    } catch (error) {
      toast.error(`Error with ${error}`);
    }
  };

  const handleSelect = (option: string) => {
    const selectedDisease = diseases.find((item) => item.name === option);
    if (selectedDisease) {
      setDiseaseId(selectedDisease.id);
    }
  };
  const handleSelectState = (option: string) => {
    switch (option) {
      case options[0]: {
        setState(-2);
        break;
      }
      case options[1]: {
        setState(-1);
        break;
      }
      case options[2]: {
        setState(0);
        break;
      }
      default: {
        setState(1);
        break;
      }
    }
  };

  return (
    <Center className='my-6 flex-col'>
      <Toaster />
      <h1 className='text-4xl my-6'>{t('declare-disease-info')}</h1>
      <div className='w-[600px]'>
        <form onSubmit={handleSubmit}>
          <div className='flex items-center justify-start mb-3 text-lg'>
            <label htmlFor='full-name' className='w-[200px]'>
              {t('full-name')}
            </label>
            <input
              className='w-full p-2 border border-gray-400'
              type='text'
              id='full-name'
              value={user?.name}
              readOnly
            />
          </div>

          <div className='flex items-center justify-start mb-3 text-lg'>
            <label htmlFor='phone' className='w-[200px]'>
              {t('sign-phone-title')}
            </label>
            <input className='w-full p-2 border border-gray-400' type='text' id='phone' value={user?.phone} readOnly />
          </div>

          <div className='flex items-center justify-between mb-3 text-lg'>
            <label htmlFor='age' className='w-[200px]'>
              {t('birthday')}
            </label>
            <input
              className='w-full p-2 border border-gray-400'
              type='number'
              id='age'
              value={user?.birthday}
              readOnly
            />
          </div>

          <div className='flex items-center justify-between mb-3 text-lg'>
            <label className='w-[200px]' htmlFor='address'>
              {t('address')}
            </label>
            <input
              className='w-full p-2 border border-gray-400'
              type='text'
              id='address'
              value={user?.address}
              readOnly
            />
          </div>

          <div className='flex justify-between flex-col mb-3 text-lg'>
            <div className='flex items-center justify-between'>
              <label htmlFor='location' className='w-[200px]'>
                {t('current-location')}
              </label>
              <input
                className='w-full p-2 border border-gray-400'
                type='text'
                id='location'
                value={location}
                readOnly
                required
              />
            </div>
            <div className='w-full flex items-center justify-end'>
              <Button
                variant={'primary'}
                className='my-3 p-[5px] hover:bg-teal-700 active:bg-teal-900 text-sm'
                type='button'
                onClick={getCurrentLocation}
                title={t('get-current-location')}
              ></Button>
            </div>
          </div>

          <div className='flex items-center justify-between mb-3 text-lg'>
            <h3 className='w-[200px]'>{t('type-of-disease')}</h3>
            <Dropdown
              className='w-full p-2 border border-gray-400'
              options={diseases.map((item) => item.name)}
              onSelect={handleSelect}
            />
          </div>

          <div className='flex items-center justify-between mb-3 text-lg'>
            <h3 className='w-[200px]'>State</h3>
            <Dropdown className='w-full p-2 border border-gray-400' options={options} onSelect={handleSelectState} />
          </div>

          <Button
            type='submit'
            className='w-full mt-8 py-[15px] px-[25px] hover:bg-teal-700 active:bg-teal-900'
            variant={'primary'}
            title={t('common-submit')}
          ></Button>
        </form>
      </div>
    </Center>
  );
}
