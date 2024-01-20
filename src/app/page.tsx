"use client";
import PageHeading from "@/components/PageHeading";
import BarChartComponent from "@/components/charts/BarChart";
import PieChart from "@/components/charts/PieChart";
import ObjectTable from "@/components/object-table/ObjectTable"; // Import the ColumnDef type
import { columns } from "@/components/object-table/columns";
import { tableData } from "@/config";

export default function Home() {
  return (
    <>
      <PageHeading name="Dashboard" />
      <div className="h-full xs:p-8 grid grid-cols-1 min-[560px]:grid-cols-12  grid-rows-12 lg:grid-rows-12  gap-8 grid-flow-row-dense">
        <div className="min-[560px]:col-span-6 lg:col-span-3 row-span-3 lg:row-span-4 max-w-64 relative flex gap-8 flex-col">
          <div className="border h-full xs:rounded-xl p-4 border-t-0 xs:border-t flex flex-col justify-between">
            <span className="text-green-400">Aktywne</span>
            <ul className="flex justify-between w-full text-sm">
              <li>Stacje: 1</li>
              <li>Oczyszczalnie: 1</li>
              <li>Źródła: 1</li>
            </ul>
          </div>
          <div className="border h-full xs:rounded-xl p-4 flex flex-col justify-between">
            <span className="text-red-400">Nieaktywne</span>
            <ul className="flex justify-between w-full text-sm">
              <li>Stacje: 0</li>
              <li>Oczyszczalnie: 1</li>
              <li>Źródła: 1</li>
            </ul>
          </div>
        </div>
        <div className="min-[560px]:col-span-12 lg:col-span-6 row-span-6 lg:row-span-4 border xs:rounded-xl p-0 sm:p-1 lg:p-2 min-h-[200px] lg:h-auto">
          <BarChartComponent />
        </div>
        <div className="min-[560px]:col-span-6 lg:col-span-3 row-span-3 lg:row-span-4 max-w-64 min-h-[200px] lg:h-auto border xs:rounded-xl p-2">
          <PieChart />
        </div>
        <div className="min-[560px]:col-span-12 row-span-8 relative">
          <ObjectTable columns={columns} data={tableData} />
        </div>
      </div>
    </>
  );
}
