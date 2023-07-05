import { IPost } from '../../entities/post';
import client from '../../utils/client';
import { endpoints } from '../../constants/endpoints';
import { useMutation, useQueryClient } from 'react-query';

type PostResponse = IPost;
type PostError = {
  message: string;
};
type PostVariables = IPost;

export function useCreatePost() {
  const queryClient = useQueryClient();

  const query = useMutation<PostResponse, PostError, PostVariables>({
    mutationFn: (post: IPost) =>
      client<IPost>(endpoints.posts, {
        data: post,
        method: 'POST',
      }),
    onSuccess: () => {
      queryClient.invalidateQueries([endpoints.posts]);
    },
  });

  return query;
}
