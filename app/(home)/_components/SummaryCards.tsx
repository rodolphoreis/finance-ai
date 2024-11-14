import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./SummaryCard";
import AddTransactionButton from "@/app/_components/add-transaction-button";

interface Summarycards {
  month: string;
  balance: number;
  investmentsTotal: number;
  depositsTotal: number;
  expensesTotal: number;
}

const SummaryCards = async ({
  balance,
  investmentsTotal,
  depositsTotal,
  expensesTotal,
}: Summarycards) => {
  return (
    <div className="flex flex-col gap-4">
      <Card className="flex items-center justify-between bg-zinc-900">
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

      <div className="grid grid-cols-3 gap-4">
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
