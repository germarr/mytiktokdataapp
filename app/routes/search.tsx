import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction,
  ActionFunction,
} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import DatePicker from "~/components/DatePicker";
import Navbar from "~/components/Navbar";
import tailwindstyle from "~/styles/tailwind.css";
import { months_date_one, years_date_one } from "~/api/dates";

import { Form, Outlet, useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  const monthsOne = months_date_one;
  const yearsOne = years_date_one;

  return [monthsOne, yearsOne];
};

export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let values = Object.fromEntries(formData);

  let dateOne = `${values.fdate_year}-${values.fdate_month}-01`;
  let dateTwo = `${values.sdate_year}-${values.sdate_month}-01`;

  // console.log({ ...values, dOne: dateOne, dTwo: dateTwo });
  //   return null;
  return redirect(`./search/first_date=${dateOne}&second_date=${dateTwo}`);
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: tailwindstyle,
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "My TikTok Data by GMARR",
  viewport: "width=device-width,initial-scale=1",
});

export default function Index() {
  const data = useLoaderData();
  let months_One = data[0];
  let years_One = data[1];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar pos="sticky top-0 z-50"></Navbar>
      {/* Title */}
      <section className="bg-white p-3 flex flex-col md:flex-row shadow-md shadow-zinc-200">
        <div className="flex items-center justify-left py-5 px-11">
          <div className="flex flex-col space-y-2 lg:w-96">
            <h1 className="text-3xl font-bold">My TikTok data</h1>
            <p>
              Choose a date and review all the data avalable from my TikTok
              accout. You can pick a second date to compare the results.
            </p>
          </div>
        </div>
        {/* Date Picker */}
        <Form
          method="post"
          className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-11 items-center">
          <DatePicker
            title="📅 First Date"
            special_key="fdate"
            years={years_One}
            months={months_One}
          />
          <DatePicker
            title="📅 Second Date"
            special_key="sdate"
            years={years_One}
            months={months_One}
          />
          <div className="pb-4 lg:pb-0">
            <button
              type="submit"
              className="hover:bg-slate-200 font-semibold bg-slate-100 shadow-md shadow-slate-300 text-slate-800 px-2 py-5 rounded-lg">
              Get Data 📊!
            </button>
          </div>
        </Form>
      </section>
      <section>
        <Outlet />
      </section>
    </div>
  );
}
