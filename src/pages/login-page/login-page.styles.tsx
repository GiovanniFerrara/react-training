import styled from '@emotion/styled';
import { Theme } from '../../theme';

export const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${Theme.colors.background};

  h1 {
    color: ${Theme.colors.primary};
    font-size: ${Theme.fontSize.xxlarge};
    margin-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    label {
      color: ${Theme.colors.textSecondary};
      font-size: ${Theme.fontSize.large};
      width: 20rem;

      input {
        margin-top: 0.5rem;
      }
    }

    button {
      margin-top: 1rem;
    }
  }
  .error {
    color: red;
  }
`;
