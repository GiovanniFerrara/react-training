import { useEffect, useState } from 'react';
import { Post } from '../../entities/post';
import client from '../../utils/client';
import { endpoints } from '../../constants/endpoints';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    client<Post[]>(endpoints.posts)
      .then((res) => setPosts(res))
      .then(() => setLoading(false))
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { posts, loading, error };
}
