import { TransactionType } from "@prisma/client";

export type transactionPercentagePerType = {
  [key in TransactionType]: number;
};
