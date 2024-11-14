import { TransactionCategory, TransactionType } from "@prisma/client";

export type transactionPercentagePerType = {
  [key in TransactionType]: number;
};

export interface TotalExpensePerCategory {
  category: TransactionCategory;
  totelAmount: number;
  percentageOfTotal: number;
}
