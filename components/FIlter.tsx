const Filter = () => {
  const percentage_change_options = ["1h", "24h", "7d", "14d", "30d"];
  return (
    <div className="flex mb-2">
      <ul className="menu menu-vertical sm:menu-horizontal md:menu-horizontal lg:menu-horizontal w-56 bg-gray-800 text-primary-content p-1 rounded-box">
        {percentage_change_options.map((item: string, index: number) => (
          <li key={index}>
            <a className="hover:bg-gray-700 active:bg-red-700 ">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
