import { Button } from "@/app/_components/ui/button";
import UpsertTransactionDialog from "@/app/_components/upsert-transaction-dialog";
import { Transaction } from "@prisma/client";
import { Edit2Icon } from "lucide-react";

import { useState } from "react";

interface EditTransactionbuttonProps {
  transaction: Transaction;
}

const EditTransactionButton = ({ transaction }: EditTransactionbuttonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <>
      <Button
        variant="ghost"
        className="text-muted-foreground"
        onClick={() => setDialogIsOpen(true)}
      >
        <Edit2Icon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValue={{
          ...transaction,
          amount: Number(transaction.amount),
        }}
        transactionId={transaction.id}
      />
    </>
  );
};

export default EditTransactionButton;
