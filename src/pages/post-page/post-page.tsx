import { useParams } from 'react-router-dom';
import { usePost } from '../../hooks/services/usePost';
import PageWithCenteredContent from '../../components/page-layout/page-with-centered-content';
import PostDetails from './components/post-details';

function PostPage() {
  const { id } = useParams<{ id: string }>();
  const { post, loading, error } = usePost(id);

  if (loading) {
    return <PageWithCenteredContent>Loading...</PageWithCenteredContent>;
  }

  if (error || post === null) {
    return (
      <PageWithCenteredContent>
        Something went wrong: {error?.message}
      </PageWithCenteredContent>
    );
  }

  return (
    <PageWithCenteredContent>
      <PostDetails post={post} />
    </PageWithCenteredContent>
  );
}

export default PostPage;
