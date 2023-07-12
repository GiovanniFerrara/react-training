import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsPage from './pages/posts-page/posts-page.tsx';
import { GlobalStyle } from './theme.tsx';
import PostPage from './pages/post-page/post-page.tsx';
import PostCreationPage from './pages/post-creation-page/post-creation-page.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoginPage from './pages/login-page/login-page.tsx';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path="/" Component={PostsPage} />
            <Route path="/posts/:id" Component={PostPage} />
            <Route path="/posts/new" Component={PostCreationPage} />
            <Route path="/login" Component={LoginPage} />
            <Route path="*" Component={() => <h1>Not Found</h1>} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
