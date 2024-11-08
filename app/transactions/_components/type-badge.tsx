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
    case TransactionType.TRANSFER:
      return (
        <Badge
          variant="outline"
          className="flex max-w-32 gap-3 bg-yellow-500/20 px-2 py-1 text-yellow-500"
        >
          <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
          Transferência
        </Badge>
      );
    case TransactionType.LOAN:
      return (
        <Badge
          variant="outline"
          className="flex max-w-32 gap-3 bg-purple-500/20 px-2 py-1 text-purple-500"
        >
          <span className="h-2 w-2 rounded-full bg-purple-500"></span>
          Empréstimo
        </Badge>
      );
    case TransactionType.REFUND:
      return (
        <Badge
          variant="outline"
          className="flex max-w-32 gap-3 bg-teal-500/20 px-2 py-1 text-teal-500"
        >
          <span className="h-2 w-2 rounded-full bg-teal-500"></span>
          Reembolso
        </Badge>
      );
    case TransactionType.WITHDRAWAL:
      return (
        <Badge
          variant="outline"
          className="py-1w-full flex max-w-32 gap-3 bg-orange-500/20 px-2 text-orange-500"
        >
          <span className="h-2 w-2 rounded-full bg-orange-500"></span>
          Retirada
        </Badge>
      );
    default:
      return null;
  }
};
export default TransactionTypeBadge;
