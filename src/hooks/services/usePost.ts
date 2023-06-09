import { useEffect, useState } from 'react';
import { IPost } from '../../entities/post';
import client from '../../utils/client';
import { endpoints } from '../../constants/endpoints';

export function usePost(postId?: string) {
  if (!postId) {
    throw new Error('postId is required');
  }

  const [post, setPost] = useState<IPost | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    client<IPost>(endpoints.post(postId))
      .then((res) => setPost(res))
      .then(() => setLoading(false))
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [postId]);

  return { post, loading, error };
}
