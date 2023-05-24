import React from 'react';
import { Chart } from 'react-google-charts';
import { DownArrowIcon } from '../assets';
import { useAppData } from '../context/providers/AppDataProvider';

export const data = [
  ['Task', 'Hours per Day'],
  ['Work', 11],
  ['Eat', 2],
  ['Commute', 2],
  ['Watch TV', 2],
  ['Sleep', 7],
];

export const options = {
  legend: { position: 'none' },
};

function TopProductsPieChart() {
  const { appDataState } = useAppData();

  return (
    <div className="bg-white col-span-2 sm:col-span-1 rounded-[1.25rem] overflow-hidden">
      <div className="flex justify-between items-center pt-5 px-7">
        <div>
          <p className="text-lg font-bold">Top Products</p>
        </div>
        <div className="text-sm font-lato flex gap-2 items-center">
          <p className="text-xs text-[#858585]">
            {appDataState?.data?.topProducts?.timeline}
          </p>
          <button type="button">
            <img src={DownArrowIcon} alt="down arrow icon" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-10">
        <Chart
          chartType="PieChart"
          data={appDataState?.data?.topProducts?.pieChartData}
          options={appDataState?.data?.topProducts?.pieChartDataOptions}
          width="180px"
          height="180px"
        />

        <div className="flex flex-col gap-3">
          <div>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-green-500 h-1 w-1 p-[0.3rem] rounded-full" />
              <p>Basic Tees</p>
            </div>
            <p className="ml-5 text-xs text-[#858585]">55%</p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-green-500 h-1 w-1 p-[0.3rem] rounded-full" />
              <p>Custom Short Pants</p>
            </div>
            <p className="ml-5 text-xs text-[#858585]">31%</p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-green-500 h-1 w-1 p-[0.3rem] rounded-full" />
              <p>Super Hoodies</p>
            </div>
            <p className="ml-5 text-xs text-[#858585]">14%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopProductsPieChart;
