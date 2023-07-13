import { useQuery } from 'react-query';
import { endpoints } from '../../constants/endpoints';
import { IProfile } from '../../entities/profile';
import useAuthenticatedClient from '../useAuthenticatedClient';

const useProfile = () => {
  interface ProfileError {
    message: string;
  }

  const authClient = useAuthenticatedClient();

  const query = useQuery<IProfile, ProfileError>({
    queryKey: [endpoints.profile],
    queryFn: () => authClient(`${endpoints.profile}`),
  });

  return query;
};

export default useProfile;
