import axiosService from './axios-service';

export const userDiseaseApi = {
  getUserDisease: async (id: string) => {
    const response = await axiosService.get<IResponseSuccess<IUserDisease>>(`/user-disease/${id}`);

    return response.data.data;
  },
  declare: async (data: IUserDisease) => {
    const response = await axiosService.post<IResponseSuccess<IUserDisease>>(`/user-disease`, data);

    return response.data.data;
  }
};
