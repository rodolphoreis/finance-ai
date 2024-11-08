import { SiWebmoney } from "react-icons/si";
import { Button } from "../_components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const { userId } = await auth();
  if (userId) {
    return redirect("/");
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="h-full max-w-[700px] content-center justify-center">
        <div className="flex w-full flex-col px-10 py-10">
          <div className="flex items-center gap-3">
            <SiWebmoney size={40} className="text-green-400" />

            <h1 className="text-4xl font-extrabold">finance.ai</h1>
          </div>
          <div className="mt-10 flex flex-col gap-3">
            <h2 className="text-2xl font-medium">Bem-vindo</h2>
            <p>
              A <strong>finance.ai</strong> é uma plataforma inteligente para
              gerenciar suas finanças de forma simples e eficiente. Com recursos
              poderosos e interface amigável, você pode controlar seus gastos,
              investimentos e muito mais, tudo ao alcance de um clique. Faça
              login para começar a transformar sua gestão financeira hoje mesmo!
            </p>
          </div>
          <SignInButton>
            <Button className="mt-16 flex w-full gap-3" variant="secondary">
              <FcGoogle />
              <span>Fazer login com Google ou criar conta</span>
            </Button>
          </SignInButton>
        </div>
      </div>
    </div>
  );
}
