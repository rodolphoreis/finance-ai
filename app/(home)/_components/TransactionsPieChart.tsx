"use client";

import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { transactionPercentagePerType } from "@/app/_data/get-dashboard/types";
import { useSearchParams } from "next/navigation";
import PercentageItem from "./PercentageItem";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido",
    color: "#FFFFFF",
  },
  [TransactionType.DEPOSIT]: {
    label: "Depósito",
    color: "#55B02E",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesa",
    color: "#FF4136",
  },
} satisfies ChartConfig;

interface TransctionsPieChartProsp {
  typesPercentage: transactionPercentagePerType;
  balance: number;
  investmentsTotal: number;
  depositsTotal: number;
  expensesTotal: number;
}

const TransactionsPieChart = ({
  depositsTotal,
  expensesTotal,
  investmentsTotal,
  typesPercentage,
}: TransctionsPieChartProsp) => {
  const chartData = [
    {
      type: TransactionType.DEPOSIT,
      amount: depositsTotal,
      fill: "#55B02E",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#FF4136",
    },
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#FFFFFF",
    },
  ];

  const searchParams = useSearchParams();
  const month = searchParams.get("month");

  return (
    <Card className="flex flex-col p-10">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-xl">Visão geral do mês</CardTitle>
        <CardDescription className="flex gap-2">
          {(() => {
            switch (month) {
              case "01":
                return <p>Janeiro</p>;
              case "02":
                return <p>Fevereiro</p>;
              case "03":
                return <p>Março</p>;
              case "04":
                return <p>Abril</p>;
              case "05":
                return <p>Maio</p>;
              case "06":
                return <p>Junho</p>;
              case "07":
                return <p>Julho</p>;
              case "08":
                return <p>Agosto</p>;
              case "09":
                return <p>Setembro</p>;
              case "10":
                return <p>Outubro</p>;
              case "11":
                return <p>Novembro</p>;
              case "12":
                return <p>Dezembro</p>;
              default:
                return <p>Mês inválido</p>;
            }
          })()}{" "}
          <span>{new Date().getFullYear()}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
        <div className="flex flex-col gap-3">
          <PercentageItem
            icon={<TrendingUpIcon size={16} className="text-green-400" />}
            title="Receita"
            amount={typesPercentage[TransactionType.DEPOSIT]}
          />
          <PercentageItem
            icon={<PiggyBankIcon size={16} className="text-zinc-100" />}
            title="Investimento"
            amount={typesPercentage[TransactionType.INVESTMENT]}
          />
          <PercentageItem
            icon={<TrendingDownIcon size={16} className="text-red-600" />}
            title="Despesa"
            amount={typesPercentage[TransactionType.EXPENSE]}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionsPieChart;
