import { createContext, useState } from "react";
import { getUser } from "../services/users";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();

  const [user, setUser] = useState(currentUser ? { id: currentUser.id, email: currentUser.email } : {});


  return <UserContext.Provider value={{ user, setUser }}>
  {children}
</UserContext.Provider>
}