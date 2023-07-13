import { IPost } from '../../entities/post';
import client from '../../utils/client';
import { endpoints } from '../../constants/endpoints';
import { useQuery } from 'react-query';

interface PostError {
  message: string;
}

export function usePost(postId?: string) {
  if (!postId) {
    throw new Error('postId is required');
  }

  const query = useQuery<IPost, PostError>({
    queryKey: [endpoints.posts, postId],
    queryFn: () => client(`${endpoints.posts}/${postId}`),
  });

  return query;
}
