import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./SummaryCard";
import AddTransactionButton from "@/app/_components/add-transaction-button";
import { db } from "@/app/_lib/prisma";

interface Summarycards {
  month: string;
}

const SummaryCards = async ({ month }: Summarycards) => {
  const year = new Date().getFullYear();

  const formattedMonth = month.padStart(2, "0");

  const where = {
    date: {
      gte: new Date(`${year}-${formattedMonth}-01`),
      lte: new Date(`${year}-${formattedMonth}-31`),
    },
  };
  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: {
          amount: true,
        },
      })
    )?._sum?.amount,
  );
  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: {
          amount: true,
        },
      })
    )?._sum?.amount,
  );
  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: {
          amount: true,
        },
      })
    )?._sum?.amount,
  );
  const balance = depositsTotal - investmentsTotal - expensesTotal;

  return (
    <div className="mx-4 flex flex-col gap-4">
      <Card className="flex items-center justify-between">
        <div>
          <CardHeader className="flex flex-row items-center gap-4">
            <WalletIcon size={16} />
            <p className="text-white opacity-70">Saldo</p>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{balance} €</p>
          </CardContent>
        </div>
        <div className="mb-4 mr-4 self-end">
          <AddTransactionButton />
        </div>
      </Card>

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Investimento"
          amount={investmentsTotal}
        />
        <SummaryCard
          icon={<TrendingUpIcon size={16} className="text-green-500" />}
          title="Receita"
          amount={depositsTotal}
        />
        <SummaryCard
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          title="Despesa"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
