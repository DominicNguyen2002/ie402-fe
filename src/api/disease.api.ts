import axiosService from './axios-service';

export const diseaseApi = {
  getDisease: async (diseaseId: string) => {
    const response = await axiosService.get<IResponseSuccess<IDisease>>(`/disease/${diseaseId}`);

    return response.data.data;
  },
  getAll: async () => {
    const response = await axiosService.get<IResponseSuccess<IDisease[]>>(`/disease`);

    return response.data.data;
  }
};
