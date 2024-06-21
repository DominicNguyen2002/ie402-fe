import { useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '~/components/form/button/button';
import Dropdown from '~/components/form/dropdown';
import { XMap } from '~/components/ui';
import { adminstrative } from '~/constants/adminstrative';
import { useDiseaseState } from '~/context/disease.context';

export default function Map() {
  const { t } = useTranslation();
  const [permission, setPermission] = useState<boolean>(true);
  const [selectedProvince, setSelectedProvince] = useState<string>();
  const [selectedDistrict, setSelectedDistrict] = useState<string>();
  const [selectedWard, setSelectedWard] = useState<string>();
  const [selectedState, setSelectedState] = useState<number>(1);
  const [selectedDisease, setSelectedDisease] = useState<string>();
  const { diseases } = useDiseaseState();
  const [position, setPosition] = useState<IPoint>({
    longitude: 106.67698403739985,
    latitude: 15.821353493741581
  });
  const [error, setError] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const [stateOptions] = useState([t('being-sick'), t('recovered'), t('passed-away-sickness')]);
  const province = adminstrative.map((province) => province.provinceName);
  const [district, setDistrict] = useState<string[]>([]);
  const [ward, setWard] = useState<string[]>([]);

  const showPosition = (position: GeolocationPosition) => {
    setPosition({
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    });
  };

  const showError = (error: GeolocationPositionError) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setError('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        setError('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        setError('The request to get user location timed out.');
        break;
      default:
        break;
    }
  };

  useLayoutEffect(() => {
    if (permission && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
      setPermission(false);
    }
  }, [position]);
  return (
    <div className='flex justify-between items-start'>
      <div className='flex justify-between items-center flex-col w-[800px] bg-slate-50 mr-5 p-3'>
        <h1 className='text-4xl my-6 text-teal-700'>{t('filter-by')}</h1>

        <div className='flex items-center justify-between mb-5 text-lg'>
          <h3 className='w-[400px]'>{t('type-of-disease')}</h3>
          <Dropdown
            className='w-full p-2 border border-gray-400 text-sm'
            options={diseases.map((item) => item.name)}
            onSelect={(option) => {
              setSelectedDisease(option);
            }}
          />
        </div>

        <div className='flex items-center justify-between mb-5 text-lg'>
          <h3 className='w-[400px]'>{t('province')}</h3>
          <Dropdown
            className='w-full p-2 border border-gray-400 text-sm'
            options={province}
            onSelect={(option) => {
              setSelectedProvince(option);
              setSelectedLevel(2);
              const _province = adminstrative.find((item) => item.provinceName == option);
              setDistrict(_province ? _province?.districts.map((district) => district.districtName) : []);
              setSelectedDistrict(t('default'));
              setSelectedWard(t('default'));
            }}
          />
        </div>

        <div className='flex items-center justify-between mb-5 text-lg'>
          <h3 className='w-[400px]'>{t('district')}</h3>
          <Dropdown
            className='w-full p-2 border border-gray-400 text-sm'
            disabled={selectedLevel < 2}
            options={district}
            onSelect={(option) => {
              setSelectedDistrict(option);
              setSelectedLevel(3);
              const _district = adminstrative.find((item) => item.provinceName == selectedProvince);

              const _ward = _district?.districts.find((item) => item.districtName == option)?.wards;
              setWard(_ward ? _ward?.map((ward) => ward.wardName) : []);
              setSelectedWard(t('default'));
            }}
          />
        </div>

        <div className='flex items-center justify-between mb-5 text-lg'>
          <h3 className='w-[400px]'>{t('ward')}</h3>
          <Dropdown
            className='w-full p-2 border border-gray-400 text-sm'
            disabled
            options={ward}
            onSelect={(option) => {
              setSelectedWard(option);
            }}
          />
        </div>

        <div className='flex items-center justify-between mb-5 text-lg'>
          <h3 className='w-[400px]'>{t('state')}</h3>
          <Dropdown
            className='w-full p-2 border border-gray-400 text-sm'
            options={stateOptions}
            onSelect={(option) => {
              switch (option) {
                case stateOptions[0]: {
                  setSelectedState(1);
                  break;
                }
                case stateOptions[1]: {
                  setSelectedState(0);
                  break;
                }
                default: {
                  setSelectedState(-1);
                  break;
                }
              }
            }}
          />
        </div>
        <Button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          title='Filter'
          variant='secondary'
          className='px-5 py-2 my-3 capitalize'
        />
      </div>
      <XMap className='w-full h-[500px]' center={position} state={selectedState} polygon={[]} />
    </div>
  );
}
