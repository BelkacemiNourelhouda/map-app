import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken ? { token: userToken.token, username: userToken.username } : null;
  };

  const [tokenData, setTokenData] = useState(getToken());

  const saveToken = ({ token, username }) => {
    localStorage.setItem('token', JSON.stringify({ token, username }));
    setTokenData({ token, username });
  };

  const removeToken = () => {
    localStorage.removeItem('token');
    setTokenData(null);
  };

  return {
    setToken: saveToken,
    token: tokenData?.token,
    username: tokenData?.username,
    removeToken
  };
}
