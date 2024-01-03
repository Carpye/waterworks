"use client"
import React from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import { Card, CardHeader } from "../ui/card"

const WaterworksObjects = () => {
  return (
    <Card className="flex flex-col rounded-xl w-[500px] border-2 border-primary p-4 ">
      <CardHeader className="text-xl text-muted-foreground p-2">
        Obiekty
      </CardHeader>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold text-lg ">Obiekt</TableHead>
            <TableHead className="font-bold text-lg ">Aktywnych</TableHead>
            <TableHead className="font-bold text-lg ">Nieaktywnych</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Stacje przesyłowe</TableCell>
            <TableCell className="text-center">5</TableCell>
            <TableCell className="text-center">3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Źródła wody</TableCell>
            <TableCell className="text-center">8</TableCell>
            <TableCell className="text-center">4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Oczyszczalnie</TableCell>
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">6</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}

export default WaterworksObjects
