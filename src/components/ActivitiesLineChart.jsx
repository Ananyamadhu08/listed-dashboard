import { Chart } from 'react-google-charts';
import { DownArrowIcon } from '../assets';
import { useAppData } from '../context/providers/AppDataProvider';

function ActivitiesLineChart() {
  const { appDataState } = useAppData();

  return (
    <div className="bg-white mt-3 mb-5 rounded-[1.25rem] overflow-hidden">
      <div className="flex justify-between items-center pt-4 px-7">
        <div>
          <p className="text-lg font-bold">Activities</p>
          <div className="flex gap-2 text-sm text-[#858585]">
            <p>{appDataState?.data?.activities?.timeline}</p>
            <img src={DownArrowIcon} alt="down arrow icon" />
          </div>
        </div>
        <div className="text-sm font-lato flex items-center">
          <div className="flex items-center gap-1 mr-4">
            <span className="p-[0.3rem] h-1 w-1 rounded-full bg-[#E9A0A0] mr-2 mt-1" />
            <p>Guest</p>
          </div>

          <div className="flex items-center gap-1">
            <span className="p-[0.3rem] h-1 w-1 rounded-full bg-[#9BDD7C] mr-2 mt-1" />
            <p>User</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Chart
          chartType="LineChart"
          width="1100px"
          height="100%"
          data={appDataState?.data?.activities?.lineChartData}
          options={appDataState?.data?.activities?.lineChartDataOptions}
        />
      </div>
    </div>
  );
}

export default ActivitiesLineChart;
