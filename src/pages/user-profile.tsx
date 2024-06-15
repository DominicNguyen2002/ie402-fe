import { Button, DatePicker, Form, Input, Select } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function UserProfile() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [user] = useState<IUser>({
    name: 'Nguyen Van A',
    phone: '0123456789',
    birthday: '01/01/1997',
    address: 'TP HCM',
    age: 22
  });
  const [disabled, setDisabled] = useState(true);

  return (
    <>
      <div className='user-profile py-2 w-[80%] mx-auto mt-5'>
        <h3 className='text-center text-xl font-semibold'>{t('your-profile')}</h3>

        <div className='user-profile__header flex items-baseline justify-between h-[20px]'>
          {disabled && (
            <span
              onClick={() => setDisabled(false)}
              className='text-base font-semibold transition-colors duration-200 cursor-pointer hover:text-text2 ml-auto'
            >
              {t('edit')}
            </span>
          )}
        </div>

        <div className='user-profile__content mt-5 flex flex-col gap-10'>
          <Form form={form} name='edit-user' layout='vertical' autoComplete='off'>
            <div className='user-profile__content--item grid grid-cols-2 gap-10'>
              <Form.Item label={t('full-name')} name='name' className='text-xl'>
                <Input placeholder={user.name} disabled className='h-9 text-sm font-semibold text-date' />
              </Form.Item>
              <Form.Item label={t('address')} name='address' className='text-xl'>
                <Input placeholder={user.address} disabled className='h-9 text-sm font-semibold text-date' />
              </Form.Item>
            </div>
            <div className='user-profile__content--item grid grid-cols-2 gap-10'>
              <Form.Item label={t('birthday')} name='dob' className='text-xl'>
                <DatePicker placeholder={user.birthday.toString()} disabled className='h-9 w-full' allowClear={false} />
              </Form.Item>
              <Form.Item label={t('email')} name='email' className='text-xl'>
                <Input
                  placeholder={user.email ?? ''}
                  disabled={disabled}
                  className='h-9 text-sm font-semibold text-date'
                />
              </Form.Item>
            </div>
            <div className='user-profile__content--item grid grid-cols-2 gap-10'>
              <Form.Item label={t('sign-phone-title')} name='phone_number' className='text-xl'>
                <Input placeholder={user.phone} disabled className='h-9 text-sm font-semibold text-date' />
              </Form.Item>
              <Form.Item label={t('gender')} name='gender' className='text-xl'>
                <Select placeholder='Nam' disabled className='h-9 text-sm font-semibold text-date'>
                  <Select.Option value='Nam'>Nam</Select.Option>
                  <Select.Option value='Nữ'>Nữ</Select.Option>
                </Select>
              </Form.Item>
            </div>
            <div className='h-[30px]'>
              {disabled === false && (
                <div className='user-profile__content--btn flex items-center justify-center gap-5'>
                  <Form.Item>
                    <Button htmlType='button' danger type='primary' onClick={() => setDisabled(true)}>
                      {t('cancel')}
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType='submit' type='primary'>
                      {t('change')}
                    </Button>
                  </Form.Item>
                </div>
              )}
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
