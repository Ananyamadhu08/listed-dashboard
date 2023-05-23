import { useState } from 'react';
import { LoginForm, RegisterForm } from '../components';

function Login() {
  const [formType, setFormType] = useState('login');

  return (
    <div className="grid grid-cols-5">
      <div className="w-full text-white bg-black text-3xl p-5 col-span-5 flex justify-center items-center font-bold md:text-7xl md:col-span-2 md:h-screen">
        Board.
      </div>
      <div className="w-full h-screen col-span-5 md:col-span-3 flex justify-center items-center">
        {formType === 'login' ? (
          <LoginForm setFormType={setFormType} />
        ) : (
          <RegisterForm setFormType={setFormType} />
        )}
      </div>
    </div>
  );
}

export default Login;
