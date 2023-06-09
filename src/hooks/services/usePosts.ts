import { useEffect, useState } from 'react';
import { IPost } from '../../entities/post';
import client from '../../utils/client';
import { endpoints } from '../../constants/endpoints';

export function usePosts() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    client<IPost[]>(endpoints.posts)
      .then((res) => setPosts(res))
      .then(() => setLoading(false))
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { posts, loading, error };
}
