import React, { useEffect, useState } from 'react';
import { LoginPageWrapper } from './login-page.styles';
import { useLogin } from '../../hooks/services/useLogin';
import { useNavigate } from 'react-router-dom';
import useAuthData from '../../hooks/auth/useAuthData';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { mutateAsync: login, error, isSuccess } = useLogin();

  const { login: storeLoginData, user } = useAuthData();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await login({ email, password });
    storeLoginData(response.user, response.accessToken);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess, navigate]);

  return (
    <LoginPageWrapper>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Log In</button>
      </form>
    </LoginPageWrapper>
  );
};

export default LoginPage;
