import PostsPage from './pages/posts/index.tsx';
import { GlobalStyle } from './theme.tsx';

function App() {
  const currentPage = window.location.pathname;
  console.log(currentPage);
  return (
    <>
      {currentPage === '/' && <PostsPage />}
      {currentPage.includes('/posts') && <PostsPage />}
      <GlobalStyle />
    </>
  );
}

export default App;
