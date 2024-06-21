import axiosService from './axios-service';

export const articleApi = {
  getArticle: async (articleId: string) => {
    const response = await axiosService.get<IResponseSuccess<IArticle>>(`/article/${articleId}`);

    return response.data.data;
  },
  getAll: async () => {
    const response = await axiosService.get<IResponseSuccess<IArticle[]>>(`/article`);

    return response.data.data;
  }
};
