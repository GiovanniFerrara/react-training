import { useContext } from 'react';
import { AuthContext } from '../../context/auth-context/auth-context';

const useAuthData = () => {
  const contextData = useContext(AuthContext);
  if (!contextData) {
    throw new Error('You probably forgot to put <AuthProvider>');
  }

  return contextData;
};

export default useAuthData;
