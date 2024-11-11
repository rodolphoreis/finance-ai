"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiWebmoney } from "react-icons/si";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between border-b border-solid px-8 py-4">
      <div className="flex w-full items-center gap-20">
        <div className="flex items-center gap-3">
          <SiWebmoney size={30} className="text-primary" />

          <h1 className="text-2xl font-extrabold">finance.ai</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className={
              pathname === "/" ? "font-bold text-primary" : "text-white"
            }
          >
            Dashboard
          </Link>
          <Link
            href="/transactions"
            className={
              pathname === "/transactions"
                ? "font-bold text-primary"
                : "text-white"
            }
          >
            Transações
          </Link>
          <Link
            href="/subscription"
            className={
              pathname === "/subscription"
                ? "font-bold text-primary"
                : "text-white"
            }
          >
            Assinatura
          </Link>
        </div>
      </div>
      <div className="w-[190px] border-l border-l-zinc-700/50 pl-6">
        <SignedIn>
          <UserButton
            showName
            appearance={{
              baseTheme: dark,
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
