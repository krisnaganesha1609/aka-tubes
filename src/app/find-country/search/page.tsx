import FindIterativeAlgorithm from "@/components/find_iterative_algorithm";
import { promises as fs } from "fs";
import FindRecursiveAlgorithm from "../../../components/find_recursive_algorithm";

export default async function CountrySearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { country = "" } = await searchParams;
  const file = await fs.readFile(
    process.cwd() + "/public/trm_miui.json",
    "utf8"
  );
  const data = JSON.parse(file);
  const countries = data.countries;
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <div className="items-center text-center">
        <h2 className="text-yellow-600 text-2xl font-bold mb-10 font-[family-name:var(--font-geist-sans)]">
          Search Result
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <FindIterativeAlgorithm
            data={countries}
            target={country}
            className={"col-span-2"}
            type={"Country"}
          />
          <FindRecursiveAlgorithm
            data={countries}
            target={country}
            className={"col-span-2"}
            type={"Country"}
          />
        </div>
      </div>
    </div>
  );
}
