import { auth } from "@clerk/nextjs/server";
import Navbar from "../_components/Navbar";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader } from "../_components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";
import AcquirePlanButton from "./_components/AcquirePlanButton";

const SubscriptionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  return (
    <>
      <Navbar />
      <h1 className="ml-7 mt-6 text-xl font-bold md:text-2xl">Assinatura</h1>
      <div className="mt-16 flex justify-center p-6">
        <div className="flex gap-6">
          <Card className="w-[450px]">
            <CardHeader className="border-b border-solid py-8">
              <h2 className="mb-10 text-center text-2xl font-semibold">
                Plano Básico
              </h2>
              <div className="flex items-center justify-center gap-2">
                <span className="text-6xl font-bold">0,00</span>
                <span className="text-4xl">€</span>
                <span className="text-4xl text-muted-foreground">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 py-8">
              <div className="flex items-center gap-3">
                <CheckIcon className="text-green-500" />
                <p>Apenas 10 transações por mês (7/10)</p>
              </div>
              <div className="flex items-center gap-3">
                <XIcon />
                <p>Relatórios de IA</p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-[450px]">
            <CardHeader className="border-b border-solid py-8">
              <h2 className="mb-10 text-center text-2xl font-semibold">
                Plano Premium
              </h2>
              <div className="flex items-center justify-center gap-2">
                <span className="text-6xl font-bold">9,90</span>
                <span className="text-4xl">€</span>
                <span className="text-4xl text-muted-foreground">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 py-8">
              <div className="flex items-center gap-3">
                <CheckIcon className="text-green-500" />
                <p>Transações ilimitadas</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckIcon className="text-green-500" />
                <p>Relatórios de IA</p>
              </div>
              <div className="flex justify-center">
                <AcquirePlanButton />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;
