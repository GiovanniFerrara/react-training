import { IPost } from '../../entities/post';
import { endpoints } from '../../constants/endpoints';
import { useMutation, useQueryClient } from 'react-query';
import useAuthenticatedClient from '../useAuthenticatedClient';

type PostResponse = IPost;
type PostError = {
  message: string;
};
type PostVariables = IPost;

export function useCreatePost() {
  const queryClient = useQueryClient();

  const authenticatedClient = useAuthenticatedClient();

  const query = useMutation<PostResponse, PostError, PostVariables>({
    mutationFn: (post: IPost) =>
      authenticatedClient<IPost>(endpoints.posts, {
        data: post,
        method: 'POST',
      }),
    onSuccess: () => {
      queryClient.invalidateQueries([endpoints.posts]);
    },
  });

  return query;
}
