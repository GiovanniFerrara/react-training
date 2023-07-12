import { createContext } from 'react';

interface AuthContextValue {
  user: null | {
    email: string;
    id: string;
  };
  accessToken?: string;
}

const AuthContext = createContext<null | AuthContextValue>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <AuthContext.Provider
      value={{
        user: {
          email: 'gian@marco.com',
          id: '123',
        },
        accessToken: 'test',
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
