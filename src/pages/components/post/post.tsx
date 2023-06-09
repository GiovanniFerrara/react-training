import styled from '@emotion/styled';
import { Theme } from '../../../theme';
import { IPost } from '../../../entities/post';
import { Link } from 'react-router-dom';

type PostProps = IPost;

export default function Post({ title, body, id }: PostProps) {
  return (
    <PostContainer>
      <Link to={`/posts/${id}`}>
        <PostTitle>{title}</PostTitle>
      </Link>
      <PostContent>{body}</PostContent>
    </PostContainer>
  );
}

const PostContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid ${Theme.colors.border};
  border-radius: ${Theme.borderRadius.medium};
  box-shadow: ${Theme.boxShadow};
  padding: 20px;
  margin-bottom: 20px;
`;

const PostTitle = styled.h1`
  font-size: ${Theme.fontSize.xlarge};
  color: ${Theme.colors.primary};
  margin-bottom: 10px;
`;

const PostContent = styled.p`
  font-size: ${Theme.fontSize.medium};
  color: ${Theme.colors.textPrimary};
`;
