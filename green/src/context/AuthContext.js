import React, { useState } from "react";

const AuthContext = React.createContext({
  idToken: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {

  const itemToken = localStorage.getItem('token');

  const [token, setToken] = useState(itemToken);


  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token',token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const userLoggedIn = !!token;

  const contextValue = {
    isToken: token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;