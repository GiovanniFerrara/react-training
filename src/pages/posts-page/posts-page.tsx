import { Link } from 'react-router-dom';
import PageWithCenteredContent from '../../components/page-layout/page-with-centered-content.tsx';
import { usePosts } from '../../hooks/services/usePosts.ts';
import PostList from './components/post-list/post-list.tsx';

function PostsPage() {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) {
    return <PageWithCenteredContent>Loading...</PageWithCenteredContent>;
  }

  if (error) {
    return (
      <PageWithCenteredContent>Error: {error.message}</PageWithCenteredContent>
    );
  }

  if (!posts) {
    return null;
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
