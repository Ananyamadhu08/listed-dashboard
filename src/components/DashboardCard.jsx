function DashboardCard({ bgColor, imgSrc, title, value }) {
  return (
    <div
      className={`pb-6 pl-6 pr-[4.5rem] rounded-[1.25rem] relative m-4 col-span-4 sm:col-span-2 xl:col-span-1 ${bgColor}`}
    >
      <img
        src={imgSrc}
        alt="total revenue icon"
        className="absolute m-5 right-0"
      />
      <p className="text-sm pt-12 leading-6">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

export default DashboardCard;
