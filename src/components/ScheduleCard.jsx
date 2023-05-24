function ScheduleCard({ borderColor, title, time, location }) {
  return (
    <div className={`border-l-[4px]  h-max pl-[0.938rem] ${borderColor}`}>
      <h2 className="text-[#666666] font-lato font-bold text-sm">{title}</h2>
      <div className="text-[#999999] font-lato text-xs">
        <p>{time}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default ScheduleCard;
