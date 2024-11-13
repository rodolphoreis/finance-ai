import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";
import Navbar from "../_components/Navbar";
import SummaryCards from "./_components/SummaryCards";
import { TimeSelect } from "./_components/TimeSelect";
import { isMatch } from "date-fns";

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
  return (
    <>
      <Navbar />
      <TimeSelect />
      <SummaryCards month={month || "01"} />
    </>
  );
}
