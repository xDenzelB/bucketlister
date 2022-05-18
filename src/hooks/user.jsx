import { useState, useEffect, useContext } from 'react';
import { signInUser, signOutUser, signUpUser } from '../services/users';

const signUp = async (email, password) => {
  try {
    const user = await signUpUser(email, password);
    
  } catch (error) {
    
  }
}