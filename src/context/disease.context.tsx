import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { diseaseApi } from '~/api/disease.api';

interface State {
  diseases: IDisease[];
  loadingDisease: boolean;
  errorDisease: string | null;
}

const initialState: State = {
  diseases: [],
  loadingDisease: true,
  errorDisease: null
};

type Action =
  | { type: 'FETCH_DISEASE_SUCCESS'; payload: IDisease[] }
  | { type: 'FETCH_DISEASE_FAILURE'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_DISEASE_SUCCESS':
      return { ...state, diseases: action.payload, loadingDisease: false };
    case 'FETCH_DISEASE_FAILURE':
      return { ...state, errorDisease: action.payload, loadingDisease: false };
    case 'SET_LOADING':
      return { ...state, loadingDisease: action.payload };
    default:
      return state;
  }
};

const DiseaseContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export const DiseaseProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const response = await diseaseApi.getAll();
        dispatch({ type: 'FETCH_DISEASE_SUCCESS', payload: response });
      } catch (error) {
        dispatch({ type: 'FETCH_DISEASE_FAILURE', payload: 'Failed to fetch disease' });
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    fetchData();
  }, []);

  return <DiseaseContext.Provider value={{ state, dispatch }}>{children}</DiseaseContext.Provider>;
};

export const useDiseaseState = () => {
  const context = useContext(DiseaseContext);
  if (!context) {
    throw new Error('useDiseaseState must be used within a DiseaseProvider');
  }
  return context.state;
};

export const useDiseaseDispatch = () => {
  const context = useContext(DiseaseContext);
  if (!context) {
    throw new Error('useDiseaseDispatch must be used within a DiseaseProvider');
  }
  return context.dispatch;
};
