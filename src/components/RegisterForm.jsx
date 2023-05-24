function RegisterForm({ setFormType }) {
  return (
    <div>
      <h2 className="font-bold text-4xl mb-1.5">Register</h2>
      <p className="font-lato">Create your account</p>

      <div className="flex gap-3 py-6">
        <button type="button" className="bg-white py-2 px-5 rounded-[0.625rem]">
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
          />
        </div>

        <div className="flex flex-col">
          <label className="font-lato text-base mb-2.5">Password</label>
          <input
            placeholder="enter password"
            className="bg-[#F5F5F5] rounded-[0.625rem] px-4 py-2.5"
          />
        </div>

        <button
          type="button"
          className="bg-black text-white block w-full p-2 rounded-[0.625rem] mt-7"
        >
          Register
        </button>
      </div>

      <p className="text-[#858585] font-lato text-base text-center m-5">
        Have an account?&nbsp;
        <button
          type="button"
          className="text-[#346BD5]"
          onClick={() => setFormType('login')}
        >
          Sign in
        </button>
      </p>
    </div>
  );
}

export default RegisterForm;
