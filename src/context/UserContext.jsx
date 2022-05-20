import { createContext, useEffect, useState } from "react";
import { getUser } from "../services/users";
import { getProfile } from "../services/profiles";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();

  const [user, setUser] = useState(currentUser ? { id: currentUser.id, email: currentUser.email } : {});
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadingProfile = async () => {
      setIsLoading(false);

    try {
      if (!user) return setProfile();

      const profile = await getProfile(user.id);
      setProfile(profile);
    } catch (error) {
      setProfile(null);
    } finally {
      setIsLoading(true);
    }
    }
    loadingProfile();
  }, [user]);

  return <UserContext.Provider value={{ user, setUser, profile, isLoaded, setProfile }}>
  {children}
</UserContext.Provider>
}