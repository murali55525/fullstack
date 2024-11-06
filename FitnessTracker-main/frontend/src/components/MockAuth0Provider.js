import React, { createContext, useContext } from 'react';

const Auth0Context = createContext({
  isAuthenticated: true,
  user: { name: 'Test User' },
  loginWithRedirect: () => {},
  logout: () => {},
});

export const MockAuth0Provider = ({ children }) => (
  <Auth0Context.Provider value={{ isAuthenticated: true }}>
    {children}
  </Auth0Context.Provider>
);

export const useAuth0 = () => useContext(Auth0Context);
