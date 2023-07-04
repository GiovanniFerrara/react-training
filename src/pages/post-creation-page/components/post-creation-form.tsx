import React, { useEffect, useState } from 'react';
import { useCreatePost } from '../../../hooks/services/useCreatePost';
import { PostCreationFormWrapper } from './post-creation-form.styles';

function PostCreationForm() {
  const { mutate: createPost, loading, error, success } = useCreatePost();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');

  const resetForm = () => {
    setTitle('');
    setBody('');
    setCategory('');
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const newPost = {
      title,
      body,
      category,
      id: Math.floor(Math.random() * 1000), // Generating random ID
      authorId: 1, // Hardcoded author ID
      date: new Date().toISOString(),
      likes: 0,
    };

    createPost(newPost);
  };

  useEffect(() => {
    if (success) {
      resetForm();
    }
  }, [success]);

  return (
    <PostCreationFormWrapper>
      <div className="column">
        <h2>Create Post</h2>
        <form onSubmit={submitHandler}>
          <div>
            <label>Title: </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Body: </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Category: </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          <button disabled={loading} type="submit">
            {loading ? 'Creating Post' : 'Create Post'}
          </button>

          <p className="error-message">{error?.message}</p>
        </form>
      </div>
    </PostCreationFormWrapper>
  );
}

export default PostCreationForm;
