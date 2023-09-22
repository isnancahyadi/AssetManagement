import React, {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userToken, setUserToken] = useState('123');
  const [checkSession, setCheckSession] = useState(false);

  return (
    <AuthContext.Provider value={{userToken, checkSession}}>
      {children}
    </AuthContext.Provider>
  );
};
