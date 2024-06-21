import { useTranslation } from 'react-i18next';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { useState } from 'react';
import viFlag from '~/assets/svg/vi-circle.svg';
import enFlag from '~/assets/svg/en-circle.svg';

export default function LanguageMenu() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<string>(localStorage.getItem('language') || 'vi');

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
    setLanguage(language);
  };

  return (
    <Popover>
      <PopoverButton className='text-xl font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white mr-3'>
        {language == 'vi' ? (
          <img
            src={viFlag}
            alt='Vietnamese'
            onClick={() => setLanguage('vi')}
            className='w-[40px] h-[40px] cursor-pointer'
          />
        ) : (
          <img
            src={enFlag}
            alt='English'
            onClick={() => setLanguage('en')}
            className='w-[40px] h-[40px] cursor-pointer'
          />
        )}
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
              onClick={() => handleChangeLanguage('vi')}
              className='text-sm hover:bg-dark-slate-gray hover:text-white text-gray-900 group flex w-full items-center px-4 py-2 whitespace-nowrap'
            >
              <img
                src={viFlag}
                alt='Vietnamese'
                onClick={() => setLanguage('vi')}
                className='w-[40px] h-[40px] cursor-pointer mr-4'
              />
              vi
            </button>
            <button
              onClick={() => handleChangeLanguage('en')}
              className='text-sm hover:bg-dark-slate-gray hover:text-white text-gray-900 group flex w-full items-center px-4 py-2 whitespace-nowrap'
            >
              <img
                src={enFlag}
                alt='English'
                onClick={() => setLanguage('en')}
                className='w-[40px] h-[40px] cursor-pointer mr-4'
              />
              en
            </button>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}
