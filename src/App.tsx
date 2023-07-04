import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsPage from './pages/posts-page/posts-page.tsx';
import { GlobalStyle } from './theme.tsx';
import PostPage from './pages/post-page/post-page.tsx';
import PostCreationPage from './pages/post-creation-page/post-creation-page.tsx';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" Component={PostsPage} />
          <Route path="/posts/:id" Component={PostPage} />
          <Route path="/posts/new" Component={PostCreationPage} />
          <Route path="*" Component={() => <h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
