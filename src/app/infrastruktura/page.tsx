import PageHeading from "@/components/PageHeading"
import Flow from "@/components/charts/Flow"
import React from "react"

export const metadata = {
  title: "Infrastruktura | Wodociągi",
  description: "Aplikacja do zarządzania systemem wodociągowym.",
}

const page = () => {
  return (
    <>
      <PageHeading name="Infrastruktura" />
      <div className="p-8 h-full">
        <Flow />
      </div>
    </>
  )
}

export default page
