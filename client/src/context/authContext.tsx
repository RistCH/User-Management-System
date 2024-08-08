import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

export const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => {
     return localStorage.getItem("authToken") || null;
    });


    useEffect(() => {
      if (token) {
        localStorage.setItem("authToken", token);
      } else {
        localStorage.removeItem("authToken");
      }
    }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};