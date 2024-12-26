import { promises as fs } from "fs";
import MyCharts from "../../components/charts";

export default async function ViewData() {
  const file = await fs.readFile(
    process.cwd() + "/public/[UPDATED]trm_miui.json",
    "utf8"
  );
  const data = JSON.parse(file);
  const osesLabel = data.oses;
  const osesData = data.oses_total;
  const countryLabel = data.countries_name;
  const countryData = data.countries_total;

  return (
    <div className={`flex flex-col align-middle items-center`}>
      <div className=" mt-24 items-center text-center ">
        <MyCharts
          title="Data by OS"
          labels={osesLabel}
          datasets={osesData}
          maxY={20000}
        />
        <div className="my-10" />
        <MyCharts
          title="Data by Country"
          labels={countryLabel}
          datasets={countryData}
          maxY={5000}
        />
        <h1>TOTAL DOWNLOAD: {data.total}</h1>
      </div>
    </div>
  );
}
