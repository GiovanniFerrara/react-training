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

  useEffect(() => {
    client<Post[]>(endpoints.posts).then((res) => setPosts(res));
  }, []);

  return (
    <AppWrapper>
      <div className="post-container">
        <Posts posts={posts} />
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
