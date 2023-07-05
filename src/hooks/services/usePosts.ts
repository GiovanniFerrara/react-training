import { IPost } from '../../entities/post';
import client from '../../utils/client';
import { endpoints } from '../../constants/endpoints';
import { useQuery } from 'react-query';

interface PostError {
  message: string;
}

export function usePosts() {
  const query = useQuery<IPost[], PostError>({
    queryKey: [endpoints.posts],
    queryFn: () => client(endpoints.posts),
  });

  return query;
}

// import { useCallback, useEffect, useState } from 'react';
// import { IPost } from '../../entities/post';
// import client from '../../utils/client';
// import { endpoints } from '../../constants/endpoints';

// export function usePosts() {
//   const [data, setData] = useState<IPost[]>([]);
//   const [isLoading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<Error | null>(null);
//   const [refetchHash, setRefetchHash] = useState<number>(new Date().getTime());

//   const refetch = useCallback(() => {
//     setRefetchHash(new Date().getTime());
//   }, []);

//   useEffect(() => {
//     setLoading(true);
//     client<IPost[]>(endpoints.posts)
//       .then((res) => setData(res))
//       .then(() => setLoading(false))
//       .catch((err) => {
//         setError(err);
//         setLoading(false);
//       });
//   }, [refetchHash]);

//   return { data, isLoading, error, refetch };
// }
