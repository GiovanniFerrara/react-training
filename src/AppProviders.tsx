import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AuthProvider } from './context/auth-context/auth-context.tsx';

const queryClient = new QueryClient();

interface AppProps {
  children: React.ReactNode;
}

function AppProviders({ children }: AppProps) {
  return (
    <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          {children}
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
}

export default AppProviders;
