import { RightArrowIcon } from '../assets';
import { useAppData } from '../context/providers/AppDataProvider';
import ScheduleCard from './ScheduleCard';

function ScheduleCardsContainer() {
  const { appDataState } = useAppData();

  return (
    <div className="bg-white col-span-2 sm:col-span-1 pl-10 pr-8 rounded-[1.25rem] pb-6">
      <div className="flex justify-between items-center py-5">
        <p className="text-lg font-bold">Today&apos;s schedule</p>
        <div className="text-xs text-[#858585]">
          <button type="button" className="flex items-center gap-2">
            See all
            <img src={RightArrowIcon} alt="right arrow icon" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {appDataState?.data?.todaysSchedule?.map((item) => (
          <ScheduleCard
            key={item.id}
            borderColor="border-[#9BDD7C]"
            title={item.title}
            time={item.time}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
}

export default ScheduleCardsContainer;
