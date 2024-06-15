import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown from '~/components/form/dropdown';
import { XMap } from '~/components/ui';
import { adminstrative } from '~/constants/adminstrative';

export default function Map() {
  const { t } = useTranslation();

  const [permission, setPermission] = useState<boolean>(true);
  const [selectedProvince, setSelectedProvince] = useState<string>();
  const [selectedDistrict, setSelectedDistrict] = useState<string>();
  const [selectedWard, setSelectedWard] = useState<string>();
  const [selectedState, setSelectedState] = useState<number>(1);
  const [selectedDisease, setSelectedDisease] = useState<string>();
  const [position, setPosition] = useState<IPoint>({
    longitude: 106.67698403739985,
    latitude: 15.821353493741581
  });
  const [error, setError] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const [options] = useState(['Covid-19']);
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

  useEffect(() => {
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
            options={options}
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
            // disabled={selectedLevel < 3}
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
      </div>
      <XMap
        className='w-full h-[500px]'
        center={position}
        state={selectedState}
        polygon={[
          [
            [105.1566, 10.8287],
            [105.1601, 10.7814],
            [105.1395, 10.7712],
            [105.1354, 10.7665],
            [105.137, 10.752],
            [105.1246, 10.7098],
            [105.1147, 10.7197],
            [105.1012, 10.7441],
            [105.0979, 10.7653],
            [105.0888, 10.7607],
            [105.0751, 10.777],
            [105.0643, 10.7813],
            [105.0613, 10.7986],
            [105.0569, 10.8016],
            [105.0586, 10.8191],
            [105.0357, 10.8675],
            [105.0294, 10.8924],
            [105.045, 10.9016],
            [105.0418, 10.9113],
            [105.0449, 10.9144],
            [105.0533, 10.9165],
            [105.0533, 10.9219],
            [105.0508, 10.925],
            [105.0538, 10.9304],
            [105.067, 10.9388],
            [105.071, 10.9394],
            [105.0791, 10.9364],
            [105.0784, 10.9424],
            [105.0802, 10.9546],
            [105.0835, 10.9571],
            [105.0957, 10.9567],
            [105.1123, 10.9621],
            [105.1166, 10.9606],
            [105.1179, 10.9497],
            [105.1167, 10.9442],
            [105.1037, 10.9276],
            [105.1022, 10.9227],
            [105.1067, 10.9192],
            [105.1323, 10.9215],
            [105.133, 10.9168],
            [105.1286, 10.9054],
            [105.1511, 10.8987],
            [105.1566, 10.8287]
          ]
        ]}
      />
    </div>
  );
}
