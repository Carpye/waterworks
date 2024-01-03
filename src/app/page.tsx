"use client"
import PageHeading from "@/components/PageHeading"
import BarChartComponent from "@/components/charts/BarChart"
import PieChart from "@/components/charts/PieChart"
import ObjectTable from "@/components/object-table/ObjectTable" // Import the ColumnDef type
import { columns } from "@/components/object-table/columns"
import { tableData } from "@/config"

export default function Home() {
  return (
    <>
      <PageHeading name="Dashboard" />
      <div className="h-full p-8 grid grid-cols-1 min-[560px]:grid-cols-12  grid-rows-12 md:grid-rows-3 gap-8 grid-flow-row-dense">
        <div className=" min-[560px]:col-span-6 md:col-span-3 row-span-3 md:row-span-1 max-w-64 border rounded-xl p-2">
          Aktywne obiekty
        </div>
        <div className=" min-[560px]:col-span-12 md:col-span-6 row-span-6 md:row-span-1 border rounded-xl p-1 md:p-2 min-h-[200px] md:h-auto">
          <BarChartComponent />
        </div>
        <div className=" min-[560px]:col-span-6 md:col-span-3 row-span-3 md:row-span-1 max-w-64 min-h-[200px] md:h-auto border rounded-xl p-2">
          <PieChart />
        </div>
        <div className="min-[560px]:col-span-12 row-span-2 relative">
          <ObjectTable columns={columns} data={tableData} />
        </div>
      </div>
      {/* <div className="h-full p-8 grid grid-auto-fit">
        <div className="max-w-64 border rounded-xl p-2">Aktywne Obiekty</div>
        <div className="border rounded-xl p-2">
          <BarChartComponent />
        </div>
        <div className="max-w-64 border rounded-xl p-2">
          <PieChart />
        </div>
        <div className="relative">
          <ObjectTable columns={columns} data={tableData} />
        </div>
      </div> */}
    </>
  )
}
