import React from 'react';
import { router } from '@inertiajs/react';

const Login = () => {
  return (
    <div 
      onClick={() => window.location.href = '/admin'} // معادل window.location.href در اینرشیا
      className="text-blue-600 hover:text-blue-800 cursor-pointer"
    >
      Login
    </div>
  );
};

export default Login;