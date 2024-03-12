import { createContext, useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [currentUsers, setCurrentUsers] = useState("");
  return (
    <UsersContext.Provider value={{ currentUsers, setCurrentUsers}}>
      {children}
    </UsersContext.Provider>
  );
};