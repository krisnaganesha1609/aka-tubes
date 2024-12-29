import { promises as fs } from "fs";
import MyCharts from "../../components/charts";
import { format } from "date-fns";

export default async function ViewData() {
  const file = await fs.readFile(
    process.cwd() + "/public/[UPDATED]trm_miui.json",
    "utf8"
  );
  const data = JSON.parse(file);
  const osesLabel: string[] = data.oses;
  const osesData: number[] = data.oses_total;
  const countryLabel: string[] = data.countries_name;
  const countryData: number[] = data.countries_total;
  let dateLabel: string[] = data.downloads_date;
  const dateData: number[] = data.downloads_date_total;

  dateLabel.forEach((element) => {
    element = format(new Date(element), "dd/MMM/yyyy");
  });

  return (
    <div className={`flex flex-col align-middle items-center`}>
      <div className="mt-24 items-center text-center">
        {/* <MyCharts
          title="Data by OS"
          labels={osesLabel}
          datasets={osesData}
          maxY={15000}
        /> */}
        <div className="my-10" />
        <MyCharts
          title="Data by Country"
          labels={countryLabel}
          datasets={countryData}
          maxY={5400}
        />
        <MyCharts
          title="Data by Date"
          labels={dateLabel}
          datasets={dateData}
          maxY={6000}
        />
        <h1>TOTAL DOWNLOAD: {data.total}</h1>
      </div>
    </div>
  );
}
