import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from 'react';
import { FaGoogle } from "react-icons/fa";
import app from "../firebase/firebase.config";

const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const handleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            console
        })
        .catch((error) => {
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        })
    }

  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <button onClick={handleLogin} className='bg-primary px-8 py-2 text-white'><FaGoogle />Sign In With Google</button>
    </div>
  )
}

export default Login