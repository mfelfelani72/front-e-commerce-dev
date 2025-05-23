import React from 'react';
import { router } from '@inertiajs/react';
import navigate from '../../../../../../app/Utils/Libs/navigate';

const Login = () => {
  return (
    <div
      onClick={() => navigate("/home", true)} // معادل window.location.href در اینرشیا
      className="text-blue-600 hover:text-blue-800 cursor-pointer"
    >
      Login
    </div>
  );
};

export default Login;