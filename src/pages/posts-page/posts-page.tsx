import { Link } from 'react-router-dom';
import PageWithCenteredContent from '../../components/page-layout/page-with-centered-content.tsx';
import { usePosts } from '../../hooks/services/usePosts.ts';
import PostList from './components/post-list/post-list.tsx';

function PostsPage() {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return <PageWithCenteredContent>Loading...</PageWithCenteredContent>;
  }

  if (error) {
    return (
      <PageWithCenteredContent>Error: {error.message}</PageWithCenteredContent>
    );
  }

  return (
    <PageWithCenteredContent>
      <Link to="/posts/new">
        <button>Create New Post</button>
      </Link>

      <PostList posts={posts} />
    </PageWithCenteredContent>
  );
}

export default PostsPage;
