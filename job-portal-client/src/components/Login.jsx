import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
import { getAuth } from "firebase/auth";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const auth = getAuth(app); // Ensure you pass the initialized app
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log('User info:', user);
        setUser(user);
        setIsLoggedIn(true); // Set the state to indicate a successful login
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error('Error during sign-in:', errorMessage);
        // The email of the user's account used.
        const email = error.customData?.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      {!isLoggedIn ? (
        <button className='bg-blue-500 px-8 py-2 text-white' onClick={handleLogin}>Login</button>
      ) : (
        <div className='text-red-500 text-lg'>
          Successfully logged in as {user.displayName}!
        </div>
      )}
    </div>
  );
};

export default Login;
