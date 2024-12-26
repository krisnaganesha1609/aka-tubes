import Link from "next/link";


export default function Home() {
  const menuLinks = [
    {"link": "/view-data", "name": "View JSON Data", "color": "border-blue-600"},
    {"link": "/find-country", "name": "Find Data by Country", "color": "border-yellow-600"},
    {"link": "/find-date", "name": "Find Data by Date", "color": "border-green-600"},
    {"link": "/sort-asc", "name": "Sort by Ascending", "color": "border-red-600"},
    {"link": "/sort-desc", "name": "Sort by Ascending", "color": "border-purple-600"},
  ]
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="container">
          <p className="text-center text-2xl">Please Choose One of The Menu Below:</p>
        </div>
        <ol start={1} type="1" className="flex flex-row gap-10 list-decimal">
          {menuLinks.map((e) => <li key={e.link} className={`text-center border-4 mb-5 ${e.color} text-xl hover:underline hover:underline-offset-2`}>
            <Link href={e.link} className="p-2">
              {e.name}
            </Link>
          </li> )}
        </ol>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="font-[family-name:var(--font-geist-sans)]">
          Created by: Gede Krisna & Putu Justine
        </p>
      </footer>
    </div>
  );
}
