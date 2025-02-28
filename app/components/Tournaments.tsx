import Image from "next/image";

export default function Tournaments() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-bold text-center">
          Footbally International 2025 coming soon! Check scores, history, and more!
        </h1>
        <p>We’re still cooking, so stay tuned!</p>
        <p>Something awesome is in the works, and it won’t be long now!</p>
      </main>
    </div>
  );
}
