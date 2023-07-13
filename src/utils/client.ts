export interface ClientOptions extends RequestInit {
  method?: 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'PUT';
  headers?: HeadersInit;
  data?: unknown | FormData;
  authenticatedRequest?: boolean;
}

const BASE_URL = import.meta.env.VITE_API_URL;

async function client<T>(
  endpoint: string,
  options = {} as ClientOptions,
): Promise<T> {
  const { data, headers: customHeaders, method } = options;

  const headers = new Headers(customHeaders);

  if (data) {
    headers.set('Content-Type', 'application/json');
  }

  if (options.authenticatedRequest) {
    const token = localStorage.getItem('accessToken');
    headers.set('Authorization', `Bearer ${token}`);
  }

  const config = {
    method,
    ...options,
    headers,
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  return fetch(`${BASE_URL}/${endpoint}`, config).then(async (response) => {
    if (response.status === 401) {
      // logout();
      // refresh the page
      return Promise.reject({ message: 'Please re-authenticate.' });
    }
    const data = await response.json();
    if (response.ok) {
      return data;
    }

    return Promise.reject(data);
  });
}

export default client;
