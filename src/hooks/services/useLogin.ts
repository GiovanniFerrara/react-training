import { useMutation } from 'react-query';
import client from '../../utils/client';

type LoginResponse = {
  accessToken: string;
  user: {
    id: string;
    email: string;
  };
};

type LoginVariables = {
  email: string;
  password: string;
};

type LoginError = string;

export function useLogin() {
  const query = useMutation<LoginResponse, LoginError, LoginVariables>({
    mutationFn: (variables: LoginVariables) =>
      client('login', { data: variables, method: 'POST' }),
  });

  return query;
}
