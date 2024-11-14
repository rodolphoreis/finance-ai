import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Progress } from "@/app/_components/ui/progress";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_CATEGORY_OPTIONS } from "@/app/_constants/transactions";
import { TotalExpensePerCategory } from "@/app/_data/get-dashboard/types";

interface ExpensesPerCategoryProps {
  expensesPerCategory: TotalExpensePerCategory[];
}

const getCategoryLabel = (categoryValue: string) => {
  const category = TRANSACTION_CATEGORY_OPTIONS.find(
    (option) => option.value === categoryValue,
  );
  return category ? category.label : categoryValue;
};

const ExpensesPerCategory = ({
  expensesPerCategory,
}: ExpensesPerCategoryProps) => {
  return (
    <Card className="h-[480px]">
      <CardHeader>
        <CardTitle className="folt-bold"> Gastos por Categoria</CardTitle>
      </CardHeader>
      <ScrollArea className="col-span-2 h-[420px] rounded-md border border-none pb-6">
        <CardContent className="space-y-6">
          {expensesPerCategory.map((category) => (
            <div key={category.category} className="flex flex-col gap-2">
              <div className="flex w-full justify-between">
                <p className="text-sm font-bold">
                  {getCategoryLabel(category.category)}
                </p>
                <p className="text-sm font-bold">
                  {category.percentageOfTotal}%
                </p>
              </div>
              <Progress value={category.percentageOfTotal} />
            </div>
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  );
};

export default ExpensesPerCategory;
