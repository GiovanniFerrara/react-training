// queste riguardano il context

export interface AuthContextData extends AuthReducerState {
  login: (user: { email: string; id: string }, accessToken: string) => void;
  logout: () => void;
}

// queste riguardano il reducer

export interface AuthReducerState {
  user: null | {
    email: string;
    id: string;
  };
  accessToken?: string;
}

export enum AuthContextActionType {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN',
}
export type AuthContextAction =
  | {
      type: AuthContextActionType.LOGIN;
      payload: {
        user: {
          email: string;
          id: string;
        };
        accessToken: string;
      };
    }
  | {
      type: AuthContextActionType.LOGOUT;
    }
  | {
      type: AuthContextActionType.SET_ACCESS_TOKEN;
      payload: {
        accessToken: string;
      };
    };
