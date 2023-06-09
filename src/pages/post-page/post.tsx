import { useParams } from 'react-router-dom';

function PostPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Post Page id: {id}</h1>
    </div>
  );
}

export default PostPage;
