import React from 'react';
import { FaGoogle } from "react-icons/fa";
const Login = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <button className='bg-primary px-8 py-2 text-white'><FaGoogle />Sign In With Google</button>
    </div>
  )
}

export default Login