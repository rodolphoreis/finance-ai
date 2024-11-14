import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";
import Navbar from "../_components/Navbar";
import SummaryCards from "./_components/SummaryCards";
import { TimeSelect } from "./_components/TimeSelect";
import { isMatch } from "date-fns";
import TransactionsPieChart from "./_components/TransactionsPieChart";
import { getdashboard } from "../_data/get-dashboard";

interface HomeProps {
  searchParams: {
    month?: string;
  };
}

export default async function Home({ searchParams: { month } }: HomeProps) {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect("/?month=01");
  }

  const dashboard = await getdashboard(month);
  return (
    <>
      <Navbar />
      <TimeSelect />
      <div className="grid grid-cols-[2fr,1fr] gap-4 px-4">
        <div className="">
          <div className="">
            <SummaryCards month={month || "01"} {...dashboard} />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-6">
            <TransactionsPieChart {...dashboard} />
            <div className="h-full w-full bg-red-500"></div>
          </div>
        </div>
        <div className="h-full w-full bg-green-700">
          <h1>hdbfsjvld</h1>
        </div>
      </div>
    </>
  );
}
