import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { userApi } from '~/api/user.api';

interface State {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  user: null,
  loading: true,
  error: null
};

type Action =
  | { type: 'FETCH_USER_SUCCESS'; payload: IUser }
  | { type: 'FETCH_USER_FAILURE'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'LOGOUT' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS':
      return { ...state, user: action.payload, loading: false };
    case 'FETCH_USER_FAILURE':
      return { ...state, error: action.payload, loading: false };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

const UserContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem('userId');
      if (userId) {
        dispatch({ type: 'SET_LOADING', payload: true });
        try {
          const response = await userApi.getUser(userId);
          dispatch({ type: 'FETCH_USER_SUCCESS', payload: response });
        } catch (error) {
          dispatch({ type: 'FETCH_USER_FAILURE', payload: 'Failed to fetch user' });
        }
      } else {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    fetchUser();
  }, []);

  return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};

export const useUserState = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context.state;
};

export const useUserDispatch = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserDispatch must be used within a UserProvider');
  }
  return context.dispatch;
};
