import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import { Center } from '~/components/form';
import Button from '~/components/form/button/button';
import Dropdown from '~/components/form/dropdown';

interface DeclarationFormProps {
  user: IUser;
}

export default function DeclarationForm(params: DeclarationFormProps) {
  const [user] = useState<IUser>({
    name: 'Nguyen Van A',
    phone: '0123456789',
    birthday: '01/01/1997',
    address: 'TP HCM',
    age: 22
  });
  const [location, setLocation] = useState<string>('');
  const { t } = useTranslation();

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast(t('common-submit-success'));
  };

  const options = ['Covid-19'];

  const handleSelect = (option: string) => {
    console.log('Selected option:', option);
  };

  return (
    <Center className='my-6 flex-col'>
      <h1 className='text-4xl my-6 text-teal-700'>{t('declare-disease-info')}</h1>
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
              value={user.name}
              readOnly
            />
          </div>

          <div className='flex items-center justify-start mb-3 text-lg'>
            <label htmlFor='phone' className='w-[200px]'>
              {t('sign-phone-title')}
            </label>
            <input className='w-full p-2 border border-gray-400' type='text' id='phone' value={user.phone} readOnly />
          </div>

          <div className='flex items-center justify-between mb-3 text-lg'>
            <label htmlFor='age' className='w-[200px]'>
              {t('age')}
            </label>
            <input className='w-full p-2 border border-gray-400' type='number' id='age' value={user.age} readOnly />
          </div>

          <div className='flex items-center justify-between mb-3 text-lg'>
            <label className='w-[200px]' htmlFor='address'>
              {t('address')}
            </label>
            <input
              className='w-full p-2 border border-gray-400'
              type='text'
              id='address'
              value={user.address}
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
            <Dropdown className='w-full p-2 border border-gray-400' options={options} onSelect={handleSelect} />
          </div>

          <Button
            type='submit'
            className='w-full mt-8 py-[15px] px-[25px] hover:bg-teal-700 active:bg-teal-900'
            variant={'primary'}
            title={t('common-submit')}
          ></Button>
        </form>
        <ToastContainer />
      </div>
    </Center>
  );
}
