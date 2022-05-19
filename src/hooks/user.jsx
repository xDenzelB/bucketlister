import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { signInUser, signOutUser, signUpUser } from '../services/users';


export const useAuth = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new error('useAuth must be used within a provider');
  }


  const { user, setUser } = context;
  const isLoggedIn = user?.email;

  const signUp = async (email, password) => {
    try {
      const user = await signUpUser(email, password);
      setUser(user)
    } catch (error) {
      console.error(error);
    }
  }
  const signIn = async (email, password) => {
    try {
      const user = await signInUser(email, password);
      setUser(user)
    } catch (error) {
      console.error(error);
    }
  }
  const signOut = async () => {
    await signOutUser();
    setUser({});
  }

  return { user, isLoggedIn, signIn, signOut, signUp };
};

