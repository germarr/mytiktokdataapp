import type { LoaderFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getTikdata } from "~/api/tiktokdata";
import TopAuthors from "~/components/TopAuthors";
import TopMetrics from "~/components/TopMetrics";
import Yearlydata from "~/components/Yearlydata";

export const loader: LoaderFunction = async ({ params }) => {
  let values = new URLSearchParams(params["dates"]);
  let f_date = values.get("first_date");
  let s_date = values.get("second_date");

  console.log("⏰", f_date, s_date);

  const main_dict = await getTikdata(f_date, s_date);
  // console.log("🔥", main_dict);
  return [main_dict];
};

export default function Dates() {
  const tiktokdata = useLoaderData()[0];
  // console.log("🔥", tiktokdata);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 px-11 py-5">
      <div>
        <TopMetrics data={tiktokdata.topmetrics} />
      </div>
      <div>
        <TopAuthors data={tiktokdata.topauthors} />
      </div>
      <div>
        {/* <Yearlydata weeklydata={tiktokdata.topmetrics.videosWatchedPerWeek} /> */}
        <Outlet />
      </div>
    </div>
  );
}
