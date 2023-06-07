import styled from '@emotion/styled';
import { Theme } from '../../../../theme';

interface PostProps {
  title: string;
  body: string;
}

export default function Post({ title, body }: PostProps) {
  return (
    <PostContainer>
      <PostTitle>{title}</PostTitle>
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

const PostTitle = styled.h2`
  font-size: ${Theme.fontSize.xlarge};
  color: ${Theme.colors.primary};
  margin-bottom: 10px;
`;

const PostContent = styled.p`
  font-size: ${Theme.fontSize.medium};
  color: ${Theme.colors.textPrimary};
`;
