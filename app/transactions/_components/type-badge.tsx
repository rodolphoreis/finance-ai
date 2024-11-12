import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  switch (transaction.type) {
    case TransactionType.DEPOSIT:
      return (
        <Badge
          variant="outline"
          className="flex max-w-32 gap-3 bg-green-500/20 px-2 py-1 text-green-500"
        >
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          Depósito
        </Badge>
      );
    case TransactionType.EXPENSE:
      return (
        <Badge
          variant="outline"
          className="flex max-w-32 gap-3 bg-red-500/20 px-2 py-1 text-red-500"
        >
          <span className="h-2 w-2 rounded-full bg-red-500"></span>
          Despesa
        </Badge>
      );
    case TransactionType.INVESTMENT:
      return (
        <Badge
          variant="outline"
          className="flex max-w-32 gap-3 bg-zinc-400/20 px-2 py-1 text-zinc-300"
        >
          <span className="h-2 w-2 rounded-full bg-zinc-300"></span>
          Investimento
        </Badge>
      );
    default:
      return null;
  }
};
export default TransactionTypeBadge;
