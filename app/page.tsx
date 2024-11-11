import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";
import Navbar from "./_components/Navbar";

export default async function Home() {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/login");
  }
  return (
    <>
      <Navbar />
      <main className="mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8"></main>
    </>
  );
}
