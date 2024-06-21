import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { articleApi } from '~/api/article.api';

interface State {
  articles: IArticle[];
  loadingArticle: boolean;
  errorArticle: string | null;
}

const initialState: State = {
  articles: [],
  loadingArticle: true,
  errorArticle: null
};

type Action =
  | { type: 'FETCH_ARTICLE_SUCCESS'; payload: IArticle[] }
  | { type: 'FETCH_ARTICLE_FAILURE'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_ARTICLE_SUCCESS':
      return { ...state, articles: action.payload, loadingArticle: false };
    case 'FETCH_ARTICLE_FAILURE':
      return { ...state, errorArticle: action.payload, loadingArticle: false };
    case 'SET_LOADING':
      return { ...state, loadingArticle: action.payload };
    default:
      return state;
  }
};

const ArticleContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export const ArticleProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const response = await articleApi.getAll();
        dispatch({ type: 'FETCH_ARTICLE_SUCCESS', payload: response });
      } catch (error) {
        dispatch({ type: 'FETCH_ARTICLE_FAILURE', payload: 'Failed to fetch disease' });
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    fetchData();
  }, []);

  return <ArticleContext.Provider value={{ state, dispatch }}>{children}</ArticleContext.Provider>;
};

export const useArticleState = () => {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error('useArticleState must be used within a ArticleProvider');
  }
  return context.state;
};

export const useArticleDispatch = () => {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error('useArticleDispatch must be used within a ArticleProvider');
  }
  return context.dispatch;
};
