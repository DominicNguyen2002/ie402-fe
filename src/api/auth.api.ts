import axiosService from './axios-service';

interface UserInfoRes {
  _id: string;
  name: string;
}
export const authApi = {
  signIn: async (body: IUserSign) => {
    const response = await axiosService.post<IResponseSuccess<IUser>>(`/auth/sign-in`, body);

    return response.data.data;
  },
  signUp: async (body: IUserSign) => {
    const response = await axiosService.post<IResponseSuccess<UserInfoRes>>(`/auth/sign-up`, body);
    console.log(response);
    return response.data.data;
  }
};
