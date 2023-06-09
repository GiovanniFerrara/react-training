import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsPage from './pages/posts-page/posts-page.tsx';
import { GlobalStyle } from './theme.tsx';
import PostPage from './pages/post-page/post.tsx';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" Component={PostsPage} />
          <Route path="/posts/:id" Component={PostPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
