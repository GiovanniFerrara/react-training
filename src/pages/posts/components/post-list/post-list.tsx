import styled from '@emotion/styled';
import Post from '../post/post';

interface PostProps {
  posts: {
    id: number;
    title: string;
    body: string;
  }[];
}

function PostList(props: PostProps) {
  return (
    <PostsWrapper>
      {props.posts.map((post) => (
        <Post title={post.title} body={post.body} key={post.id} />
      ))}
    </PostsWrapper>
  );
}

export default PostList;

const PostsWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
