import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebaseConfig';

function LoginForm({ setFormType }) {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      localStorage.setItem('listed-TOKEN', data.user.email);
    });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
      .then((data) => {
        // Signed in

        localStorage.setItem('listed-TOKEN', data.user.email);

        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <h2 className="font-bold text-4xl mb-1.5">Sign In</h2>
      <p className="font-lato">Sign in to your account</p>

      <div className="flex gap-3 py-6">
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="bg-white py-2 px-5 rounded-[0.625rem]"
        >
          Sign in with Google
        </button>
        <button type="button" className="bg-white py-2 px-5 rounded-[0.625rem]">
          Sign in with Apple
        </button>
      </div>

      <div className="bg-white rounded-[0.625rem] p-8">
        <div className="flex flex-col mb-5">
          <label className="font-lato text-base mb-2.5">Email address</label>
          <input
            placeholder="enter email"
            className="bg-[#F5F5F5] rounded-[0.625rem] px-4 py-2.5"
            value={userDetails.email}
            name="email"
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-lato text-base mb-2.5">Password</label>
          <input
            placeholder="enter password"
            className="bg-[#F5F5F5] rounded-[0.625rem] px-4 py-2.5"
            value={userDetails.password}
            name="password"
            onChange={handleInputChange}
          />
        </div>

        <button
          onClick={handleInputChange}
          type="button"
          className="text-[#346BD5] font-lato text-base my-5"
        >
          Forgot password?
        </button>

        <button
          onClick={handleSignIn}
          type="button"
          className="bg-black text-white block w-full p-2 rounded-[0.625rem]"
        >
          Sign In
        </button>
      </div>

      <p className="text-[#858585] font-lato text-base text-center m-5">
        Don&apos;t have an account?&nbsp;
        <button
          type="button"
          className="text-[#346BD5]"
          onClick={() => setFormType('register')}
        >
          Register here
        </button>
      </p>
    </div>
  );
}

export default LoginForm;
