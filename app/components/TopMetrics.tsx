import Ecopie from "./Ecopie";
import Thisbar from "./Thisbarchart";

export default function TopMetrics({ data }) {
  const minutesWatched = data.minutesWatched;
  const videosWatched = data.videosWatched;
  const videosWatchedList = data.videosWatchedList;
  const channelsWatched = data.channelsWatched;
  const weeklydata = data.videosWatchedPerWeek;

  function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return (Math.round(m) / 100) * Math.sign(num);
  }

  console.log(minutesWatched);

  return (
    <>
      <div className="border-b border-zinc-300 p-3 mb-2">
        <h3 className="font-bold uppercase">Top Metrics</h3>
      </div>
      <div className="grid grid-cols-2 gap-2 px-1 lg:px-4">
        <div className="bg-white w-full h-28 flex flex-col p-4 rounded-md shadow-md">
          <p className="text-xs text-gray-400 uppercase pb-1">
            ⌛ Minutes Watched
          </p>
          <span className="text-xl lg:text-2xl font-semibold pb-2">
            {minutesWatched.firstmonth.toLocaleString("en-US")}
          </span>
          <div className="">
            {minutesWatched.firstmonth > minutesWatched.secondmonth ? (
              <p className="text-green-400 text-xs lg:text-sm">{`▲ ${round(
                (minutesWatched.firstmonth - minutesWatched.secondmonth) /
                  minutesWatched.secondmonth
              )}%`}</p>
            ) : (
              <p className="text-red-600 text-xs lg:text-sm">{`▼ ${round(
                Math.abs(
                  (minutesWatched.firstmonth - minutesWatched.secondmonth) /
                    minutesWatched.secondmonth
                )
              )}%`}</p>
            )}
          </div>
        </div>
        <div className="bg-white w-full h-28 flex flex-col p-4 rounded-md shadow-md">
          <p className="text-xs text-gray-400 uppercase pb-1">
            🤓 Videos Watched
          </p>
          <span className="text-xl lg:text-2xl font-semibold pb-2">
            {videosWatched.firstmonth.toLocaleString("en-US")}
          </span>
          <div className="">
            {minutesWatched.firstmonth > videosWatched.secondmonth ? (
              <p className="text-green-400 text-xs lg:text-sm">{`▲ ${round(
                (videosWatched.firstmonth - videosWatched.secondmonth) /
                  minutesWatched.secondmonth
              )}%`}</p>
            ) : (
              <p className="text-red-600 text-xs lg:text-sm">{`▼ ${round(
                Math.abs(
                  (videosWatched.firstmonth - videosWatched.secondmonth) /
                    videosWatched.secondmonth
                )
              )}%`}</p>
            )}
          </div>
        </div>
        <div className="bg-white w-full h-28 flex flex-col p-4 rounded-md shadow-md">
          <p className="text-xs text-gray-400 uppercase pb-1">
            🔍 Channels Watched
          </p>
          <span className="text-xl lg:text-2xl font-semibold pb-2">
            {channelsWatched.firstmonth.toLocaleString("en-US")}
          </span>
          <div className="">
            {channelsWatched.firstmonth > channelsWatched.secondmonth ? (
              <p className="text-green-400 text-xs lg:text-sm">{`▲ ${round(
                (channelsWatched.firstmonth - channelsWatched.secondmonth) /
                  channelsWatched.secondmonth
              )}%`}</p>
            ) : (
              <p className="text-red-600 text-xs lg:text-sm">{`▼ ${round(
                Math.abs(
                  (channelsWatched.firstmonth - channelsWatched.secondmonth) /
                    channelsWatched.secondmonth
                )
              )}%`}</p>
            )}
          </div>
        </div>
        <div className="col-span-2 bg-white w-full h-40 flex flex-col p-4 rounded-md shadow-md">
          <p className="text-xs text-gray-400 uppercase pb-2">
            🕵️ Videos Watched by Day
          </p>
          <div className="h-32 py-2">
            <Thisbar data={videosWatchedList} />
          </div>
        </div>
        <div className="col-span-2 w-full flex flex-col p-4 bg-white rounded-md shadow-md">
          <p className="text-xs text-gray-400 uppercase pb-2">
            👽 Videos by weekday
          </p>
          <div className="h-44">
            <Ecopie data={weeklydata} />
          </div>
        </div>
      </div>
    </>
  );
}
