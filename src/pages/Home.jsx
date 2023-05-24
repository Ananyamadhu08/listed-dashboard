import {
  DashboardCard,
  Header,
  ScheduleCardsContainer,
  Sidebar,
} from '../components';
import {
  TotalLikesIcon,
  TotalRevenueIcon,
  TotalTransactionsIcon,
  TotalUsersIcon,
} from '../assets';

function Home() {
  return (
    <div className="grid grid-cols-9 grid-rows-6 h-screen">
      <Sidebar />

      <div className="row-span-5 xl:row-span-6 col-span-9 xl:col-span-7 mx-10 xl:ml-1 xl:mr-5">
        <Header />

        <div className="grid grid-cols-4 gap-x-6 mt-8">
          <DashboardCard
            bgColor="bg-[#DDEFE0]"
            imgSrc={TotalRevenueIcon}
            title="Total Revenues"
            value="$2,129,430"
          />

          <DashboardCard
            bgColor="bg-[#F4ECDD]"
            imgSrc={TotalTransactionsIcon}
            title="Total Transactions"
            value="1,520"
          />

          <DashboardCard
            bgColor="bg-[#EFDADA]"
            imgSrc={TotalLikesIcon}
            title="Total Likes"
            value="9,721"
          />

          <DashboardCard
            bgColor="bg-[#DEE0EF]"
            imgSrc={TotalUsersIcon}
            title="Total Users"
            value="892"
          />
        </div>

        <div className="h-3/5">
          <div className="bg-white mt-5 mb-7 rounded-[1.25rem] h-2/4">
            Line Chart
          </div>

          <div className="grid grid-cols-2 gap-x-9 gap-y-6 mb-9 md:mb-1 h-full md:h-[45%]">
            <div className="bg-white col-span-2 sm:col-span-1 rounded-[1.25rem] h-">
              Pie Chart
            </div>

            <ScheduleCardsContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
