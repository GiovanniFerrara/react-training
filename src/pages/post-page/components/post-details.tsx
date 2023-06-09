import { Theme } from '../../../theme';
import styled from '@emotion/styled';
import PageWithCenteredContent from '../../../components/page-layout/page-with-centered-content';
import { IPost } from '../../../entities/post';

interface PostProps {
  post: IPost;
}

function PostDetails({ post }: PostProps) {
  return (
    <PageWithCenteredContent>
      <PostContainer>
        <PostTitle>{post.title}</PostTitle>
        <PostBody>{post.body}</PostBody>
        <PostMetadata>
          <p>Date: {new Date(post.date).toLocaleDateString()}</p>
          <p>Category: {post.category}</p>
          <p>Likes: {post.likes}</p>
        </PostMetadata>
      </PostContainer>
    </PageWithCenteredContent>
  );
}

export default PostDetails;

const PostContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  width: 800px;
  padding: ${Theme.fontSize.large};
  background-color: ${Theme.colors.background};
  border-radius: ${Theme.borderRadius.medium};
  box-shadow: ${Theme.boxShadow};
`;

const PostTitle = styled.h1`
  margin-bottom: ${Theme.fontSize.medium};
  color: ${Theme.colors.primary};
  font-family: ${Theme.fonts.secondary};
  font-size: ${Theme.fontSize.xxlarge};
`;

const PostBody = styled.p`
  margin-bottom: ${Theme.fontSize.large};
  font-size: ${Theme.fontSize.medium};
  line-height: 1.6;
`;

const PostMetadata = styled.div`
  font-size: ${Theme.fontSize.small};
  color: ${Theme.colors.textSecondary};

  p {
    margin-bottom: ${Theme.fontSize.small};
  }
`;
