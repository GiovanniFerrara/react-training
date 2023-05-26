import { GlobalStyle } from './theme.tsx';
import styled from '@emotion/styled';
import client from './utils/client.ts';
import { endpoints } from './constants/endpoints.ts';
import { useEffect, useState } from 'react';
import Posts from './pages/posts/index.tsx';

interface Post {
  id: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    client<Post[]>(endpoints.posts)
      .then((res) => setPosts(res))
      .then(() => setLoading(false))
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <AppWrapper>
      <div className="post-container">
        {!loading && <Posts posts={posts} />}
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <GlobalStyle />
      </div>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .post-container {
    max-width: 800px;
  }
`;
