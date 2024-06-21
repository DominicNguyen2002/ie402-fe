import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import APP_PATH from '~/constants/app-path';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { UserIcon } from '../icon';
import { useUserDispatch } from '~/context/user.context';
import toast from 'react-hot-toast';

export default function SubMenu() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useUserDispatch();

  const handleLogout = () => {
    localStorage.removeItem('userId');
    dispatch({ type: 'LOGOUT' });
    navigate(APP_PATH['sign-in']);
    toast.success('Đăng xuất thành công.');
  };
  return (
    <Popover>
      <PopoverButton className='text-xl font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white mr-3'>
        <UserIcon />
      </PopoverButton>
      <Transition
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'
      >
        <PopoverPanel
          anchor='bottom'
          className='divide-y divide-white/5 rounded-xl bg-slate-50 text-sm/6 [--anchor-gap:var(--spacing-5)]'
        >
          <div>
            <button
              onClick={() => navigate(APP_PATH['user-profile'])}
              className='text-sm hover:bg-dark-slate-gray hover:text-white text-gray-900 group flex w-full items-center px-4 py-2 whitespace-nowrap'
            >
              {t('profile')}
            </button>
            <button
              onClick={() => navigate(APP_PATH['change-password'])}
              className='text-sm hover:bg-dark-slate-gray hover:text-white text-gray-900 group flex w-full items-center px-4 py-2 whitespace-nowrap'
            >
              {t('change-password')}
            </button>
            <button
              onClick={() => navigate(APP_PATH['declaration-form'])}
              className='text-sm hover:bg-dark-slate-gray hover:text-white text-gray-900 group flex w-full items-center px-4 py-2 whitespace-nowrap'
            >
              {t('declare-disease')}
            </button>
            <button
              onClick={handleLogout}
              className='text-sm hover:bg-dark-slate-gray hover:text-white text-gray-900 group flex w-full items-center px-4 py-2 whitespace-nowrap'
            >
              {t('sign-sign-out')}
            </button>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}
