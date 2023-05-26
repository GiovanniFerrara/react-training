import { Theme } from '../../theme.tsx';
import styled from '@emotion/styled';

interface PostProps {
  posts: {
    id: number;
    title: string;
    body: string;
  }[];
}

function Posts(props: PostProps) {
  return (
    <PostsWrapper>
      {props.posts.map((post, index) => (
        <PostContainer key={index}>
          <PostTitle>{post.title}</PostTitle>
          <PostContent>{post.body}</PostContent>
        </PostContainer>
      ))}
    </PostsWrapper>
  );
}

export default Posts;

const PostsWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid ${Theme.colors.border};
  border-radius: ${Theme.borderRadius.medium};
  box-shadow: ${Theme.boxShadow};
  padding: 20px;
  margin-bottom: 20px;
`;

const PostTitle = styled.h2`
  font-size: ${Theme.fontSize.xlarge};
  color: ${Theme.colors.primary};
  margin-bottom: 10px;
`;

const PostContent = styled.p`
  font-size: ${Theme.fontSize.medium};
  color: ${Theme.colors.textPrimary};
`;
