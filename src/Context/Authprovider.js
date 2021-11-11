import React, { createContext } from "react";
import UseFirebase from "../Hooks/UseFirebase";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const allContext = UseFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
