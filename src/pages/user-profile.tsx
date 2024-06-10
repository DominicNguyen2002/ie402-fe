import { Button, DatePicker, Form, Input, Select } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function UserProfile() {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const [disabled, setDisabled] = useState(true);
  
  return (
    <>
        <div className="user-profile py-2 w-[80%] mx-auto mt-5">
            <h3 className='text-center text-xl font-semibold'>HỒ SƠ CỦA TÔI</h3>
            <div className="user-profile__header flex items-baseline justify-between">
                <span onClick={() => setDisabled(false)} className="text-base font-medium transition-colors duration-200 cursor-pointer hover:text-text2 ml-auto">
                    Chỉnh sửa thông tin
                </span>
            </div>
            <div className="user-profile__content mt-5 flex flex-col gap-10">
                <Form
                    form={form}
                    name="edit-user"
                    layout="vertical"
                    autoComplete="off"
                >
                    <div className="user-profile__content--item grid grid-cols-2 gap-10">
                        <Form.Item
                            label="Họ và tên"
                            name="name"
                        >
                            <Input
                                placeholder="Họ và tên"
                                disabled={disabled}
                                className="h-9 text-sm font-medium text-date"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Địa chỉ"
                            name="address"
                        >
                            <Input
                                placeholder="Địa chỉ"
                                disabled={disabled}
                                className="h-9 text-sm font-medium text-date"
                            />
                        </Form.Item>
                    </div>
                    <div className="user-profile__content--item grid grid-cols-2 gap-10">
                        <Form.Item
                            label="Ngày sinh của bạn"
                            name="dob"
                        >
                            <DatePicker
                                placeholder="Ngày sinh của bạn"
                                disabled={disabled}
                                className="h-9 w-full"
                                allowClear={false}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Email của bạn"
                            name="email"
                        >
                            <Input
                                placeholder="Email của bạn"
                                disabled={disabled}
                                className="h-9 text-sm font-medium text-date"
                            />
                        </Form.Item>
                    </div>
                    <div className="user-profile__content--item grid grid-cols-2 gap-10">
                        <Form.Item
                            label="Số điện thoại"
                            name="phone_number"
                        >
                            <Input
                                placeholder="Số điện thoại"
                                disabled={disabled}
                                className="h-9 text-sm font-medium text-date"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Giới tính"
                            name="gender"
                        >
                            <Select
                                placeholder="Giới tính"
                                disabled={disabled}
                                className="h-9 text-sm font-medium text-date"
                            >
                                <Select.Option value="Nam">Nam</Select.Option>
                                <Select.Option value="Nữ">Nữ</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>
                    {disabled === false && (
                        <div className="user-profile__content--btn flex items-center justify-center gap-5">
                            <Form.Item>
                                <Button
                                    htmlType="button"
                                    danger
                                    type="primary"
                                    onClick={() =>
                                        setDisabled(true)
                                    }
                                >
                                    Hủy
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    htmlType="submit"
                                    type="primary"
                                >
                                    Thay đổi
                                </Button>
                            </Form.Item>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    </>
  );
}
