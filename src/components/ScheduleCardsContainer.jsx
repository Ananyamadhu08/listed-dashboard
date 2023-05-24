import { RightArrowIcon } from '../assets';
import ScheduleCard from './ScheduleCard';

function ScheduleCardsContainer() {
  return (
    <div className="bg-white col-span-2 sm:col-span-1 pl-10 pr-8 rounded-[1.25rem]">
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
        <ScheduleCard
          borderColor="border-[#9BDD7C]"
          title=" Meeting with suppliers from Kuta Bali"
          time="14.00-15.00"
          location="at Sunset Road, Kuta, Bali"
        />

        <ScheduleCard
          borderColor="border-[#6972C3]"
          title="Check operation at Giga Factory 1"
          time="18.00-20.00"
          location="at Central Jakarta"
        />
      </div>
    </div>
  );
}

export default ScheduleCardsContainer;
