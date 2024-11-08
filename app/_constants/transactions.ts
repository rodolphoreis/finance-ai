import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionType.DEPOSIT,
    label: "Depósito",
  },
  {
    value: TransactionType.WITHDRAWAL,
    label: "Saque",
  },
  {
    value: TransactionType.TRANSFER,
    label: "Transferência",
  },
  {
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
  {
    value: TransactionType.LOAN,
    label: "Empréstimo",
  },
  {
    value: TransactionType.REFUND,
    label: "Reembolso",
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  { value: TransactionCategory.SALARY, label: "Salário" },
  { value: TransactionCategory.BUSINESS_INCOME, label: "Renda Empresarial" },
  { value: TransactionCategory.GIFT, label: "Presente" },
  { value: TransactionCategory.OTHER_INCOME, label: "Outros Rendimentos" },
  { value: TransactionCategory.GROCERIES, label: "Compras de Mercado" },
  { value: TransactionCategory.RENT, label: "Aluguel" },
  { value: TransactionCategory.UTILITIES, label: "Utilidades" },
  { value: TransactionCategory.TRANSPORT, label: "Transporte" },
  { value: TransactionCategory.ENTERTAINMENT, label: "Entretenimento" },
  { value: TransactionCategory.HEALTH, label: "Saúde" },
  { value: TransactionCategory.EDUCATION, label: "Educação" },
  { value: TransactionCategory.SHOPPING, label: "Compras" },
  { value: TransactionCategory.DINING, label: "Refeições" },
  { value: TransactionCategory.TRAVEL, label: "Viagem" },
  { value: TransactionCategory.INSURANCE, label: "Seguro" },
  { value: TransactionCategory.STOCKS, label: "Ações" },
  { value: TransactionCategory.REAL_ESTATE, label: "Imóveis" },
  { value: TransactionCategory.CRYPTOCURRENCY, label: "Criptomoeda" },
  { value: TransactionCategory.SAVINGS, label: "Poupança" },
  { value: TransactionCategory.PENSION, label: "Aposentadoria" },
  { value: TransactionCategory.FAMILY_SUPPORT, label: "Suporte Familiar" },
  { value: TransactionCategory.LOAN_PAYMENT, label: "Pagamento de Empréstimo" },
  { value: TransactionCategory.TAXES, label: "Impostos" },
  { value: TransactionCategory.CHARITY, label: "Caridade" },
  { value: TransactionCategory.MISCELLANEOUS, label: "Diversos" },
];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  { value: TransactionPaymentMethod.CREDIT_CARD, label: "Cartão de Crédito" },
  { value: TransactionPaymentMethod.DEBIT_CARD, label: "Cartão de Débito" },
  {
    value: TransactionPaymentMethod.BANK_TRANSFER,
    label: "Transferência Bancária",
  },
  { value: TransactionPaymentMethod.CASH, label: "Dinheiro" },
  { value: TransactionPaymentMethod.DIGITAL_WALLET, label: "Carteira Digital" },
  { value: TransactionPaymentMethod.CHECK, label: "Cheque" },
  { value: TransactionPaymentMethod.CRYPTOCURRENCY, label: "Criptomoeda" },
  { value: TransactionPaymentMethod.OTHER, label: "Outro" },
  { value: TransactionPaymentMethod.PAYPAL, label: "PayPal" },
];
