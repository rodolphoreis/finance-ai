import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_CATEGORY_OPTIONS } from "@/app/_constants/transactions";
import { formatCurrency } from "@/app/_utils/currency";
import { Transaction, TransactionCategory } from "@prisma/client";
import Link from "next/link";

export function getCategoryIcon(category: TransactionCategory) {
  const categoryOption = TRANSACTION_CATEGORY_OPTIONS.find(
    (option) => option.value === category,
  );

  return categoryOption?.icon || null;
}

const getCategoryLabel = (categoryValue: string) => {
  const category = TRANSACTION_CATEGORY_OPTIONS.find(
    (option) => option.value === categoryValue,
  );
  return category ? category.label : categoryValue;
};

interface LastTransactionsProps {
  lastTransactions: Transaction[];
}

const LastTransactions = ({ lastTransactions }: LastTransactionsProps) => {
  const getAmountColor = (transaction: Transaction) => {
    if (transaction.type === "DEPOSIT") {
      return "text-green-500";
    }
    if (transaction.type === "EXPENSE") {
      return "text-red-500";
    }
    return "text-white";
  };
  const getAmountPrefix = (transaction: Transaction) => {
    if (transaction.type === "DEPOSIT") {
      return "";
    }
    if (transaction.type === "INVESTMENT") {
      return "";
    }
    return "-";
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="font-bold">Últimas transações</CardTitle>
        <Button variant="outline" className="rounded- font-bold" asChild>
          <Link href="/transactions">Ver mais</Link>
        </Button>
      </CardHeader>
      <ScrollArea className="rounded-md border-none">
        <CardContent className="h-[688px] space-y-6 pt-2">
          {lastTransactions.map((transaction) => {
            const Icon = getCategoryIcon(transaction.category);
            return (
              <div
                key={transaction.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  {Icon && <Icon className="h-5 w-5 text-primary" />}
                  <div>
                    <p className="text-sm font-bold">
                      {getCategoryLabel(transaction.category)}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(transaction.date).toLocaleDateString("pt-PT", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <p
                  className={`text-sm font-bold ${getAmountColor(transaction)}`}
                >
                  {getAmountPrefix(transaction)}
                  {formatCurrency(Number(transaction.amount))}
                </p>
              </div>
            );
          })}
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

export default LastTransactions;
