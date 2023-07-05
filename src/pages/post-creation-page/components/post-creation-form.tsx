import React, { useEffect, useState } from 'react';
import { useCreatePost } from '../../../hooks/services/useCreatePost';
import { PostCreationFormWrapper } from './post-creation-form.styles';
import { useNavigate } from 'react-router-dom';

function PostCreationForm() {
  const { mutate: createPost, loading, error, success } = useCreatePost();

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');

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
      navigate('/');
    }
  });

  return (
    <PostCreationFormWrapper>
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
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option disabled selected value="">
              Select a category
            </option>
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="typescript">TypeScript</option>
          </select>
        </div>

        <button disabled={loading} type="submit">
          {loading ? 'Creating Post' : 'Create Post'}
        </button>

        <p className="error-message">{error?.message}</p>
      </form>
    </PostCreationFormWrapper>
  );
}

export default PostCreationForm;
