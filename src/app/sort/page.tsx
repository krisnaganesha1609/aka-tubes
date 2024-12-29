import Link from "next/link";

export default function SortPage() {
  return (
    <div className="flex flex-col align-middle items-center justify-center h-screen w-screen">
      <h1 className="text-center font-bold text-2xl text-purple-500 font-[family-name:var(--font-geist-sans)] mb-12">
        Sort By:
      </h1>
      <ol className="list-none">
        <li className="text-center border-4 mb-5 border-yellow-500 text-xl hover:underline hover:underline-offset-2">
          <Link
            href="/sort/result?sort=asc"
            className="p-2 font-[family-name:var(--font-geist-sans)]"
          >
            Sort Ascending
          </Link>
        </li>
        <li className="text-center border-4 mb-5 border-green-500 text-xl hover:underline hover:underline-offset-2">
          <Link
            href="/sort/result?sort=desc"
            className="p-2 font-[family-name:var(--font-geist-sans)]"
          >
            Sort Descending
          </Link>
        </li>
      </ol>
    </div>
  );
}
