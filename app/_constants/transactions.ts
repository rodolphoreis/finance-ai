import {
  DollarSign,
  Briefcase,
  Gift,
  Award,
  ShoppingBag,
  Home,
  Zap,
  Truck,
  Film,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  UtensilsCrossed,
  Navigation,
  ShieldAlert,
  TrendingUp,
  Building2,
  Coins,
  Banknote,
  Anchor,
  Users,
  CreditCard,
  ClipboardList,
  HelpingHand,
  CircleDot,
} from "lucide-react";

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
    value: TransactionType.EXPENSE,
    label: "Despesa",
  },
  {
    value: TransactionType.INVESTMENT,
    label: "Investimento",
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  { value: TransactionCategory.SALARY, label: "Salário", icon: DollarSign },
  {
    value: TransactionCategory.BUSINESS_INCOME,
    label: "Renda Empresarial",
    icon: Briefcase,
  },
  { value: TransactionCategory.GIFT, label: "Presente", icon: Gift },
  {
    value: TransactionCategory.OTHER_INCOME,
    label: "Outros Rendimentos",
    icon: Award,
  },
  {
    value: TransactionCategory.GROCERIES,
    label: "Compras de Mercado",
    icon: ShoppingCart,
  },
  { value: TransactionCategory.RENT, label: "Aluguel", icon: Home },
  { value: TransactionCategory.UTILITIES, label: "Utilidades", icon: Zap },
  { value: TransactionCategory.TRANSPORT, label: "Transporte", icon: Truck },
  {
    value: TransactionCategory.ENTERTAINMENT,
    label: "Entretenimento",
    icon: Film,
  },
  { value: TransactionCategory.HEALTH, label: "Saúde", icon: HeartPulse },
  {
    value: TransactionCategory.EDUCATION,
    label: "Educação",
    icon: GraduationCap,
  },
  { value: TransactionCategory.SHOPPING, label: "Compras", icon: ShoppingBag },
  {
    value: TransactionCategory.DINING,
    label: "Refeições",
    icon: UtensilsCrossed,
  },
  { value: TransactionCategory.TRAVEL, label: "Viagem", icon: Navigation },
  { value: TransactionCategory.INSURANCE, label: "Seguro", icon: ShieldAlert },
  { value: TransactionCategory.STOCKS, label: "Ações", icon: TrendingUp },
  { value: TransactionCategory.REAL_ESTATE, label: "Imóveis", icon: Building2 },
  {
    value: TransactionCategory.CRYPTOCURRENCY,
    label: "Criptomoeda",
    icon: Coins,
  },
  { value: TransactionCategory.SAVINGS, label: "Poupança", icon: Banknote },
  { value: TransactionCategory.PENSION, label: "Aposentadoria", icon: Anchor },
  {
    value: TransactionCategory.FAMILY_SUPPORT,
    label: "Suporte Familiar",
    icon: Users,
  },
  {
    value: TransactionCategory.LOAN_PAYMENT,
    label: "Pagamento de Empréstimo",
    icon: CreditCard,
  },
  { value: TransactionCategory.TAXES, label: "Impostos", icon: ClipboardList },
  { value: TransactionCategory.CHARITY, label: "Caridade", icon: HelpingHand },
  {
    value: TransactionCategory.MISCELLANEOUS,
    label: "Diversos",
    icon: CircleDot,
  },
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
