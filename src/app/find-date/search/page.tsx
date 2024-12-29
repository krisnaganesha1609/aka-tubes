import FindIterativeAlgorithm from "@/components/find_iterative_algorithm";
import { promises as fs } from "fs";
import FindRecursiveAlgorithm from "../../../components/find_recursive_algorithm";

export default async function DateSearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { date = "" } = await searchParams;
  const file = await fs.readFile(
    process.cwd() + "/public/trm_miui.json",
    "utf8"
  );
  const data = JSON.parse(file);
  const downloads = data.downloads;
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
      <div className="items-center text-center">
        <h2 className="text-green-600 text-2xl font-bold mb-10 font-[family-name:var(--font-geist-sans)]">
          Search Result
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <FindIterativeAlgorithm
            data={downloads}
            target={date}
            className={"col-span-2"}
            type={"Date"}
          />
          <FindRecursiveAlgorithm
            data={downloads}
            target={date}
            className={"col-span-2"}
            type={"Date"}
          />
        </div>
      </div>
    </div>
  );
}
