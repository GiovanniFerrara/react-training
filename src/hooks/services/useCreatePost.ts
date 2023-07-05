import { useState } from 'react';
import { IPost } from '../../entities/post';
import client from '../../utils/client';
import { endpoints } from '../../constants/endpoints';

export function useCreatePost() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [isSuccess, setSuccess] = useState<boolean>(false);

  const createPost = (post: IPost) => {
    setLoading(true);

    client<IPost>(endpoints.posts, {
      data: post,
      method: 'POST',
    })
      .then(() => setLoading(false))
      .then(() => setSuccess(true))
      .catch((err) => {
        setError(err);
        setLoading(false);
        setSuccess(false);
      });
  };

  return { mutate: createPost, isLoading, error, isSuccess };
}
