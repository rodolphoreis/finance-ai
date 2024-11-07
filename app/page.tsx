import Image from "next/image";

export default function Home() {
  return (
    <main className="grid h-screen w-full grid-cols-2">
      <div className="h-full">
        <Image
          src="/img-bitcoin.jpeg"
          alt="bitcoin"
          width={500}
          height={500}
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="h-full">
        <h1>New</h1>
      </div>
    </main>
  );
}
