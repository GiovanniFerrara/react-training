import PageWithCenteredContent from '../../components/page-layout/page-with-centered-content.tsx';
import { usePosts } from '../../hooks/services/usePosts.ts';
import PostList from './components/post-list/post-list.tsx';

function PostsPage() {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return <PageWithCenteredContent>Loading...</PageWithCenteredContent>;
  }

  if (error) {
    return <PageWithCenteredContent>Error: {error}</PageWithCenteredContent>;
  }

  return (
    <PageWithCenteredContent>
      <PostList posts={posts} />
    </PageWithCenteredContent>
  );
}

export default PostsPage;
