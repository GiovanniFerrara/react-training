import client, { ClientOptions } from '../utils/client';

const useAuthenticatedClient = () => {
  async function authenticatedClient<T>(
    endpoint: string,
    options = {} as ClientOptions,
  ): Promise<T> {
    return client<T>(endpoint, { authenticatedRequest: true, ...options });
  }

  return authenticatedClient;
};

export default useAuthenticatedClient;
