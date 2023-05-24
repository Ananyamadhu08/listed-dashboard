import {
  DashboardIcon,
  TransactionIcon,
  ScheduleIcon,
  UserIcon,
  SettingIcon,
} from '../assets';

function Sidebar() {
  return (
    <div className="bg-black row-span-1 xl:row-span-6 col-span-9 h-2/4 xl:col-span-2 w-[95%] xl:h-[90%] m-auto xl:my-10 text-white rounded-[1.875rem] p-8 xl:py-[3.75rem] xl:px-[3.125rem] justify-center flex sm:justify-between items-center xl:block relative">
      <h2 className="hidden sm:flex sm:mr-20 justify-center items-center xl:block font-bold text-3xl xl:text-4xl xl:mb-[3.75rem]">
        Board.
      </h2>

      <div className="flex xl:flex-col gap-8 md:gap-16 xl:gap-10">
        <div className="flex gap-6 xl:text-lg">
          <img src={DashboardIcon} alt="dashboard icon" />
          <a className="hidden xl:block">Dashboard</a>
        </div>

        <div className="flex gap-6 text-lg">
          <img src={TransactionIcon} alt="dashboard icon" />
          <a className="hidden xl:block">Transactions</a>
        </div>

        <div className="flex gap-6 text-lg">
          <img src={ScheduleIcon} alt="dashboard icon" />
          <a className="hidden xl:block">Schedules</a>
        </div>

        <div className="flex gap-6 text-lg">
          <img src={UserIcon} alt="dashboard icon" />
          <a className="hidden xl:block">Users</a>
        </div>

        <div className="flex gap-6 text-lg">
          <img src={SettingIcon} alt="dashboard icon" />
          <a className="hidden xl:block">Settings</a>
        </div>
      </div>

      <div className="hidden xl:flex flex-col gap-5 absolute bottom-0 mb-[3.75rem]">
        <a>Help</a>
        <a>Contact Us</a>
      </div>
    </div>
  );
}

export default Sidebar;
