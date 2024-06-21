import axiosService from './axios-service';

export const contentpi = {
  getByArticle: async (articleId: string) => {
    const response = await axiosService.get<IResponseSuccess<IContent[]>>(`/content/article/${articleId}`);

    return response.data.data;
  }
};
