import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
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
    <div>
      <ScrollArea className="col-span-2 h-full rounded-md border pb-6">
        <CardHeader>
          <CardTitle className="folt-bold"> Gastos por Categoria</CardTitle>
        </CardHeader>
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
    </div>
  );
};

export default ExpensesPerCategory;
