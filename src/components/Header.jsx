import { BellIcon, SearchIcon, UserImage } from '../assets';

function Header() {
  return (
    <div className="flex justify-between align-center xl:mt-10 mx-7">
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

        <img src={UserImage} alt="user image" className="rounded-full" />
      </div>
    </div>
  );
}

export default Header;
