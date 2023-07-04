import PageWithCenteredContent from '../../components/page-layout/page-with-centered-content';
import PostCreationForm from './components/post-creation-form';

function PostCreationPage() {
  return (
    <PageWithCenteredContent>
      <h1>Post Creation Page</h1>
      <PostCreationForm />
    </PageWithCenteredContent>
  );
}

export default PostCreationPage;
