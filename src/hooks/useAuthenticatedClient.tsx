import client, { ClientOptions } from '../utils/client';
import useAuthData from './auth/useAuthData';

const useAuthenticatedClient = () => {
  const { accessToken } = useAuthData();

  async function authenticatedClient<T>(
    endpoint: string,
    options = {} as ClientOptions,
  ): Promise<T> {
    return client<T>(endpoint, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  return authenticatedClient;
};

export default useAuthenticatedClient;
