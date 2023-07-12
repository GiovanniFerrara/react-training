import { Link } from 'react-router-dom';
import PageWithCenteredContent from '../../components/page-layout/page-with-centered-content.tsx';
import { usePosts } from '../../hooks/services/usePosts.ts';
import PostList from './components/post-list/post-list.tsx';
import useAuthData from '../../hooks/auth/useAuthData.tsx';

function PostsPage() {
  const { data: posts, isLoading, error } = usePosts();

  const authData = useAuthData();

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
      <h1>Welcome {authData?.user?.email}!</h1>
      <br />
      {authData?.user?.id && (
        <Link to="/posts/new">
          <button>Create New Post</button>
        </Link>
      )}
      <br />
      <Link to="/login">
        <button>Login</button>
      </Link>
      <PostList posts={posts} />
    </PageWithCenteredContent>
  );
}

export default PostsPage;
