export default function TopAuthors({ data }) {
  return (
    <div>
      <div className="border-b border-zinc-300 p-3">
        <h3 className="font-bold uppercase">Mosth Watched Creators</h3>
      </div>
      {data.map((m, i) => (
        <div className="" key={`${i}_author`}>
          <div
            title={m.name}
            className="grid grid-cols-3 items-center p-4 space-x-2 border-b border-zinc-200">
            <div className="lg:w-36">
              <div className="flex flex-col lg:space-x-3 space-y-1 lg:space-y-0 lg:flex-row items-center justify-start">
                <img className="rounded-full h-10 w-10" src={m.avatar} alt="" />
                <p className="text-xs lg:text-sm font-medium lowercase">
                  {m.name}
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xs text-center lowercase">Videos Watched</h3>
              <div className="text-sm lg:text-base flex items-center justify-center">
                <p className="font-semibold">{m.watched_videos}</p>
              </div>
            </div>
            <div className="flex px-2 lg:px-5">
              <a
                href={m.link}
                target="_blank"
                rel="noreferrer"
                className="w-full">
                <button className="bg-black w-full py-1 rounded-lg text-sm text-center text-white font-semibold">
                  Link
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
