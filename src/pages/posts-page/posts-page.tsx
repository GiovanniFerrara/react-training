import { Link } from 'react-router-dom';
import PageWithCenteredContent from '../../components/page-layout/page-with-centered-content.tsx';
import { usePosts } from '../../hooks/services/usePosts.ts';
import PostList from './components/post-list/post-list.tsx';
import useAuthData from '../../hooks/auth/useAuthData.tsx';
import useProfile from '../../hooks/services/useProfile.ts';

function PostsPage() {
  const { data: posts, isLoading, error } = usePosts();

  const { user, logout } = useAuthData();
  const { data: profile } = useProfile();

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
      {profile && <h1>Welcome {profile?.name}!</h1>}
      <br />

      {profile?.id && (
        <Link to="/posts/new">
          <button>Create New Post</button>
        </Link>
      )}

      <br />

      {!user && (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}

      <br />

      {user && <button onClick={logout}>Logout</button>}

      <PostList posts={posts} />
    </PageWithCenteredContent>
  );
}

export default PostsPage;
