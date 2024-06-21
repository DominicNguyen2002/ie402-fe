import { Button, DatePicker, Form, Input, Select } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { userApi } from '~/api/user.api';
import { useUserDispatch, useUserState } from '~/context/user.context';
import toast, { Toaster } from 'react-hot-toast';

export default function UserProfile() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const { user } = useUserState();
  const dispatch = useUserDispatch();
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState(user?.name);
  const [address, setAddress] = useState(user?.address);
  const [birthday, setBirthday] = useState(user?.birthday);
  const [email, setEmail] = useState(user?.email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!window.confirm('Bạn có chắc chắn muốn cập nhật thông tin người dùng?')) {
      return;
    }

    try {
      const updatedUser = await userApi.update(user?.id || '', {
        name: name,
        email: email,
        birthday: birthday,
        address: address
      });
      toast.success('Cập nhật thông tin thành công!');
      setDisabled(true);
      dispatch({ type: 'FETCH_USER_SUCCESS', payload: updatedUser });
    } catch (error) {
      toast.error(`Update failed with error: ${error}`);
    }
  };
  return (
    <>
      <Toaster />
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
                <Input
                  placeholder={user?.name}
                  disabled={disabled}
                  className='h-9 text-sm font-semibold text-date'
                  onChange={(e) => {
                    setName(e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </Form.Item>
              <Form.Item label={t('address')} name='address' className='text-xl'>
                <Input
                  placeholder={user?.address}
                  disabled={disabled}
                  className='h-9 text-sm font-semibold text-date'
                  onChange={(e) => {
                    setAddress(e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </Form.Item>
            </div>
            <div className='user-profile__content--item grid grid-cols-2 gap-10'>
              <Form.Item label={t('birthday')} name='dob' className='text-xl'>
                <DatePicker
                  placeholder={user?.birthday}
                  disabled={disabled}
                  className='h-9 w-full'
                  allowClear={false}
                  onChange={(date) => {
                    setBirthday(date.toString);
                    console.log(date.toString);
                  }}
                />
              </Form.Item>
              <Form.Item label={t('email')} name='email' className='text-xl'>
                <Input
                  placeholder={user?.email}
                  disabled={disabled}
                  className='h-9 text-sm font-semibold text-date'
                  onChange={(e) => {
                    setEmail(e.target.value);
                    console.log(e.target.value);
                  }}
                />
              </Form.Item>
            </div>
            <div className='user-profile__content--item grid grid-cols-2 gap-10'>
              <Form.Item label={t('sign-phone-title')} name='phone_number' className='text-xl'>
                <Input placeholder={user?.phone} disabled className='h-9 text-sm font-semibold text-date' />
              </Form.Item>
              <Form.Item label={t('gender')} name='gender' className='text-xl'>
                <Select placeholder={user?.gender || 'Nam'} disabled className='h-9 text-sm font-semibold text-date'>
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
                    <Button htmlType='submit' type='primary' onClick={handleSubmit}>
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
