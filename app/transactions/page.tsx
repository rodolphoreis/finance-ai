import { DataTable } from "../_components/ui/data-table";
import { transctioncolumns } from "./_columns";
import { db } from "../_lib/prisma";
import AddTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/Navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const TransactionsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const transactions = await db.transaction.findMany({});

  return (
    <>
      <Navbar />
      <div className="mt-5 space-y-6 px-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-xl font-bold md:text-2xl">Transações</h1>
          <AddTransactionButton />
        </div>
        <DataTable columns={transctioncolumns} data={transactions} />
      </div>
    </>
  );
};

export default TransactionsPage;
