import {
  ActivitiesLineChart,
  DashboardCard,
  Header,
  ScheduleCardsContainer,
  Sidebar,
  TopProductsPieChart,
} from '../components';
import {
  TotalLikesIcon,
  TotalRevenueIcon,
  TotalTransactionsIcon,
  TotalUsersIcon,
} from '../assets';

function Home() {
  return (
    <div className="grid grid-cols-9">
      <Sidebar />

      <div className="row-span-5 xl:row-span-6 col-span-9 px-8 xl:col-span-7 mx-10 xl:ml-1 xl:mr-5">
        <Header />

        <div className="grid grid-cols-4 gap-x-6 mt-4">
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

        <div>
          <ActivitiesLineChart />

          <div className="grid grid-cols-2 gap-x-9 gap-y-6 md:mb-1">
            <TopProductsPieChart />

            <ScheduleCardsContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
