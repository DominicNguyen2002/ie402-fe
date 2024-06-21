import axiosService from './axios-service';

export const userApi = {
  getUser: async (userId: string) => {
    const response = await axiosService.get<IResponseSuccess<IUser>>(`/user/${userId}`);

    return response.data.data;
  },
  update: async (userId: string, data: IUpdateUser) => {
    const response = await axiosService.put<IResponseSuccess<IUser>>(`/user/${userId}`, data);

    return response.data.data;
  },
  updatePassword: async (userId: string, data: IUserChangePassword) => {
    const response = await axiosService.put<IResponseSuccess<IUser>>(`/user/${userId}/change-password`, data);

    return response.data.data;
  }
};
