import { useState, type FC, useRef, useLayoutEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { apiMutate } from '../api/fetcher';
import type User from '../types/User';
import type LoginData from '../types/LoginData';
import './Login.scss';

interface Props {
  onUserLogin: (user: User) => void;
}

const Login: FC<Props> = ({ onUserLogin }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    passwordInputRef.current?.focus();
  }, []);

  const mutation = useMutation({
    mutationFn: (data: LoginData) => {
      return apiMutate<User[], LoginData>('POST', 'rpc/login', data);
    },

    onError: (error) => {
      setErrorMessage(error.message);
    },

    onSuccess: (data: User[]) => {
      onUserLogin(data[0]);
      navigate('/profile', { replace: true });
    },
  });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    mutation.mutate({
      u_email: formData.get('email') as string,
      u_password: formData.get('password') as string,
    });
  };

  return (
    <>
      <div className="login-wrapper">
        <title>Login | MyShop</title>
        <h1>Login</h1>
        <p className="text-dimmed">
          Login using <strong>test@example.com</strong> and any password.
        </p>

        <form onSubmit={handleLogin}>
          <label className="label" htmlFor="emailId">
            Email<span className="required">*</span>:
          </label>
          <input
            type="email"
            id="emailId"
            name="email"
            className="input"
            placeholder="Email"
            autoComplete="email"
            disabled={mutation.isPending}
            defaultValue="test@example.com"
          />

          <label className="label" htmlFor="passwordId">
            Password<span className="required">*</span>:
          </label>
          <input
            type="password"
            id="passwordId"
            name="password"
            className="input"
            placeholder="Password"
            autoComplete="current-password"
            disabled={mutation.isPending}
            ref={passwordInputRef}
          />

          <p className="login-error">{errorMessage}</p>

          <input
            type="submit"
            value="Login"
            className="btn-link btn-link__secondary"
            disabled={mutation.isPending}
          />
        </form>
      </div>
    </>
  );
};

export default Login;
