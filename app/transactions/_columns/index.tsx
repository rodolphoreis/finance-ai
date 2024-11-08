"use client";

import {
  Transaction,
  TransactionCategory,
  TransactionPaymentMethod,
} from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionTypeBadge from "../_components/type-badge";

export const transctioncolumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge transaction={transaction} />
    ),
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) => {
      switch (transaction.category) {
        case TransactionCategory.SALARY:
          return <p>Salário</p>;
        case TransactionCategory.BUSINESS_INCOME:
          return <p>Renda Empresarial</p>;
        case TransactionCategory.GIFT:
          return <p>Presente</p>;
        case TransactionCategory.OTHER_INCOME:
          return <p>Outros Rendimentos</p>;
        case TransactionCategory.GROCERIES:
          return <p>Compras de Mercado</p>;
        case TransactionCategory.RENT:
          return <p>Aluguel</p>;
        case TransactionCategory.UTILITIES:
          return <p>Utilidades</p>;
        case TransactionCategory.TRANSPORT:
          return <p>Transporte</p>;
        case TransactionCategory.ENTERTAINMENT:
          return <p>Entretenimento</p>;
        case TransactionCategory.HEALTH:
          return <p>Saúde</p>;
        case TransactionCategory.EDUCATION:
          return <p>Educação</p>;
        case TransactionCategory.SHOPPING:
          return <p>Compras</p>;
        case TransactionCategory.DINING:
          return <p>Refeições</p>;
        case TransactionCategory.TRAVEL:
          return <p>Viagem</p>;
        case TransactionCategory.INSURANCE:
          return <p>Seguro</p>;
        case TransactionCategory.STOCKS:
          return <p>Ações</p>;
        case TransactionCategory.REAL_ESTATE:
          return <p>Imóveis</p>;
        case TransactionCategory.CRYPTOCURRENCY:
          return <p>Criptomoeda</p>;
        case TransactionCategory.SAVINGS:
          return <p>Poupança</p>;
        case TransactionCategory.PENSION:
          return <p>Aposentadoria</p>;
        case TransactionCategory.FAMILY_SUPPORT:
          return <p>Suporte Familiar</p>;
        case TransactionCategory.LOAN_PAYMENT:
          return <p>Pagamento de Empréstimo</p>;
        case TransactionCategory.TAXES:
          return <p>Impostos</p>;
        case TransactionCategory.CHARITY:
          return <p>Caridade</p>;
        case TransactionCategory.MISCELLANEOUS:
          return <p>Diversos</p>;
        default:
          return null;
      }
    },
  },

  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
    cell: ({ row: { original: transaction } }) => {
      switch (transaction.paymentMethod) {
        case TransactionPaymentMethod.CREDIT_CARD:
          return <p>Cartão de Crédito</p>;
        case TransactionPaymentMethod.DEBIT_CARD:
          return <p>Cartão de Débito</p>;
        case TransactionPaymentMethod.BANK_TRANSFER:
          return <p>Transferência Bancária</p>;
        case TransactionPaymentMethod.CASH:
          return <p>Dinheiro</p>;
        case TransactionPaymentMethod.DIGITAL_WALLET:
          return <p>Carteira Digital</p>;
        case TransactionPaymentMethod.CHECK:
          return <p>Cheque</p>;
        case TransactionPaymentMethod.CRYPTOCURRENCY:
          return <p>Criptomoeda</p>;
        case TransactionPaymentMethod.OTHER:
          return <p>Outro</p>;
        case TransactionPaymentMethod.PAYPAL:
          return <p>PayPal</p>;
        default:
          return null;
      }
    },
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amount",
    header: "Valor",
  },
  {
    accessorKey: "actios",
    header: "Ações",
  },
];
