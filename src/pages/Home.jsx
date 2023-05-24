import { DashboardCard, Header, Sidebar } from '../components';
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

      <div className="row-span-5 xl:row-span-6 col-span-9 xl:col-span-7 mx-5">
        <Header />

        <div className="grid grid-cols-4 mt-8">
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
      </div>
    </div>
  );
}

export default Home;
