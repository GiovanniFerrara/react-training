import { createContext, useReducer } from 'react';
import {
  AuthContextData,
  AuthContextAction,
  AuthContextActionType,
  AuthReducerState,
} from './auth-context.types';

const AuthContext = createContext<null | AuthContextData>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

const reducer = (state: AuthReducerState, action: AuthContextAction) => {
  switch (action.type) {
    case AuthContextActionType.LOGIN:
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      };
    case AuthContextActionType.LOGOUT:
      return {
        ...state,
        user: null,
        accessToken: undefined,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    accessToken: undefined,
  });

  const login = (user: { email: string; id: string }, accessToken: string) => {
    dispatch({
      type: AuthContextActionType.LOGIN,
      payload: {
        user,
        accessToken,
      },
    });

    localStorage.setItem('accessToken', accessToken);
  };

  const logout = () => {
    dispatch({
      type: AuthContextActionType.LOGOUT,
    });

    localStorage.removeItem('accessToken');
  };

  return (
    <AuthContext.Provider value={{ login, logout, ...state }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
