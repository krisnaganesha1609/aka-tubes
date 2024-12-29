import SortAlgorithm from "@/components/sort_algorithm";
import { promises as fs } from "fs";
export default async function ResultPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { sort = "" } = await searchParams;
  const file = await fs.readFile(
    process.cwd() + "/public/trm_miui.json",
    "utf8"
  );
  const data = JSON.parse(file);
  const dataDate = data.downloads;
  const dataCountry = data.countries;
  return (
    <div className={`flex flex-col align-middle items-center`}>
      <div className="mt-32 items-center text-center">
        <h2 className="text-green-600 text-2xl font-bold mb-10 font-[family-name:var(--font-geist-sans)]">
          Search Result
        </h2>
        <div className="grid grid-cols-2 gap-4 items-start">
          <SortAlgorithm data={dataDate} order={sort} type="Date" />
          <SortAlgorithm data={dataCountry} order={sort} type="Country" />
        </div>
      </div>
    </div>
  );
}
