"use client";

import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { SelectContent } from "@radix-ui/react-select";
import { useRouter, useSearchParams } from "next/navigation";

const MONTH_OPTIONS = [
  { value: "01", label: "Janeiro" },
  { value: "02", label: "Fevereiro" },
  { value: "03", label: "Março" },
  { value: "04", label: "Abril" },
  { value: "05", label: "Maio" },
  { value: "06", label: "Junho" },
  { value: "07", label: "Julho" },
  { value: "08", label: "Agosto" },
  { value: "09", label: "Setembro" },
  { value: "10", label: "Outubro" },
  { value: "11", label: "Novembro" },
  { value: "12", label: "Dezembro" },
];

export const TimeSelect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const month = searchParams.get("month");

  const handleMonthChange = (month: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("month", month);
    router.push(`/?${params.toString()}`);
  };
  return (
    <div className="mx-6 flex justify-between py-6">
      <h1>Dashboard</h1>
      <div>
        <Select
          onValueChange={(value) => handleMonthChange(value)}
          defaultValue={month || ""}
        >
          <SelectTrigger className="w-[180px] rounded-xl px-6">
            <SelectValue placeholder="Selecione um mês" />
          </SelectTrigger>
          <SelectContent className="mt-2 w-[180px] rounded-md border border-orange-400/50 bg-zinc-900 shadow-lg">
            {MONTH_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value.toString()}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
