import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { transctioncolumns } from "./_columns";
import { db } from "../_lib/prisma";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <div className="mt-5 space-y-6 px-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-xl font-bold md:text-2xl">Transações</h1>
        <Button>
          <span className="text-sm font-bold">Adicionar Transacão</span>
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transctioncolumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
