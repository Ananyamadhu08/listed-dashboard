import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { BellIcon, SearchIcon, UserImage } from '../assets';
import { auth } from '../firebaseConfig';
import { authActions } from '../context/constants/AuthConstants';
import { useAuth } from '../context/providers/AuthProvider';

function Header() {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();

  return (
    <div className="flex justify-between align-center xl:mt-10 mx-1">
      <h2 className="hidden sm:block text-2xl font-bold">Dashboard</h2>
      <div className="flex gap-3 xs:gap-5">
        <div className="flex">
          <input
            placeholder="Search..."
            className="rounded-[0.625rem] py-1 px-[0.938rem]"
          />
          <img
            src={SearchIcon}
            alt="search icon"
            className="relative right-6"
          />
        </div>

        <button type="button">
          <img src={BellIcon} alt="bell icon" />
        </button>

        <img
          onClick={() => {
            signOut(auth);
            localStorage.removeItem('listed-TOKEN');

            authDispatch({
              type: authActions.LOGOUT_SUCCESS,
            });
            navigate('/');
          }}
          src={UserImage}
          alt="user image"
          className="rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Header;
