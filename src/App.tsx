import PostPage from './pages/post-page/post.tsx';
import PostsPage from './pages/posts-page/posts-page.tsx';
import { GlobalStyle } from './theme.tsx';

function App() {
  const currentPage = window.location.pathname;
  return (
    <>
      {/* NOTA: questa organizzazione del routing è un approccio provvisiorio e incorretto
       valido solo a titolo dimostrativo */}

      {currentPage === '/' && <PostsPage />}
      {currentPage.includes('/posts') && <PostPage />}
      <GlobalStyle />
    </>
  );
}

export default App;
