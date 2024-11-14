import { ReactNode } from "react";

interface PercentageItemProps {
  icon: ReactNode;
  title: string;
  amount: number;
}

const PercentageItem = ({ icon, title, amount }: PercentageItemProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
        <p className="text-sm font-bold">{amount}%</p>
      </div>
    </div>
  );
};

export default PercentageItem;
