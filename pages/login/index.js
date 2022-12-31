import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
  const { user } = useContext(AuthContext);
  
  return (
    <div>
      <h2>hello login: {user.email}</h2>
    </div>
  );
};

export default Login;