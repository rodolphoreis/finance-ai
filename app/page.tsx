import { SignedIn, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { dark } from "@clerk/themes";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/login");
  }
  return (
    <main className="mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
      <SignedIn>
        <UserButton
          showName
          appearance={{
            baseTheme: dark,
          }}
        />
      </SignedIn>
      <h1>Home</h1>
    </main>
  );
}
