import PageWithCenteredContent from '../../components/page-layout/page-with-centered-content';
import { usePosts } from '../../hooks/services/usePosts';
import PostList from '../posts-page/components/post-list/post-list';
import PostCreationForm from './components/post-creation-form';

function PostCreationPage() {
  const { posts } = usePosts();

  return (
    <PageWithCenteredContent>
      <h1>Post Creation Page</h1>
      <PostCreationForm />
      <div>
        <h2>Posts Preview</h2>
        <div className="column">
          <PostList posts={posts} />
        </div>
      </div>
    </PageWithCenteredContent>
  );
}

export default PostCreationPage;
