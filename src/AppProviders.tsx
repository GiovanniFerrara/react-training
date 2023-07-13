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
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default AppProviders;
