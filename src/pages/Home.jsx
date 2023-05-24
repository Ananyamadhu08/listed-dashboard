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
import { useAppData } from '../context/providers/AppDataProvider';

function Home() {
  const { appDataState } = useAppData();

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
            value={appDataState?.data?.totalRevenues}
          />

          <DashboardCard
            bgColor="bg-[#F4ECDD]"
            imgSrc={TotalTransactionsIcon}
            title="Total Transactions"
            value={appDataState?.data?.totalTransaction}
          />

          <DashboardCard
            bgColor="bg-[#EFDADA]"
            imgSrc={TotalLikesIcon}
            title="Total Likes"
            value={appDataState?.data?.totalLikes}
          />

          <DashboardCard
            bgColor="bg-[#DEE0EF]"
            imgSrc={TotalUsersIcon}
            title="Total Users"
            value={appDataState?.data?.totalUsers}
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
