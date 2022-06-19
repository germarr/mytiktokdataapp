export default function DatePicker({ title, years, months, special_key }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="border-b pl-2">
          <h2 className="text-base font-bold pb-2 uppercase">{title}</h2>
        </div>
        <div className="flex space-x-11 lg:space-x-11 items-center p-2 border-b-2">
          <div className="flex flex-col pb-5 md:px-0">
            <h3 className="text-sm font-semibold pb-1 uppercase">Year</h3>
            <select
              name={`${special_key}_year`}
              className="px-5 border-b-2 rounded-md cursor-pointer py-2 font-semibold text-sm">
              {years.reverse().map((n, i) => (
                <option key={`${i}_year`} value={n.year}>
                  {n.year}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col pb-5 md:px-0">
            <h3 className="text-sm uppercase font-semibold pb-1">Month</h3>
            <select
              name={`${special_key}_month`}
              className="px-5 border-b-2 rounded-md cursor-pointer py-2 font-semibold  text-sm">
              {months.map((n, i) => (
                <option key={`${i}_month`} value={n.month_number}>
                  {n.month_name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
