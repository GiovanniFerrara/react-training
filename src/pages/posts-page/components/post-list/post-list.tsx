import styled from '@emotion/styled';
import Post from '../../../components/post/post';
import { IPost } from '../../../../entities/post';

interface PostProps {
  posts: IPost[];
}

function PostList(props: PostProps) {
  return (
    <PostsWrapper>
      {props.posts.map((post) => (
        <Post key={post.id} {...post} />
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
