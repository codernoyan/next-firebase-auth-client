import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

// init firebase auth
const auth = getAuth(app);
const AuthProvider = ({children}) => {

  const authInfo = {
    user: {
      email: "john.doe@gmail.com"
    }
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;