"use client";

import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, globalFilterFn } from "@/lib/utils";
import { Calendar, Info, Search, X } from "lucide-react";
import { useRef, useState } from "react";
import { Input } from "../ui/input";
import { Toggle } from "../ui/toggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Separator } from "../ui/separator";

interface ObjectTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function ObjectTable<TData, TValue>({
  columns,
  data,
}: ObjectTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<boolean>(true);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: (row) => globalFilterFn(row, globalFilter, dateFilter),
    state: {
      sorting,
      globalFilter,
    },
  });

  const toggleDateFilter = () => {
    console.log(dateFilter);

    const temp = globalFilter;
    setGlobalFilter("");
    setGlobalFilter(temp);
    setDateFilter((prev) => !prev);
  };

  const filterInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="border rounded-xl">
      <div className="flex items-center p-4 gap-4 justify-between">
        <div className="flex gap-4">
          <div className="flex">
            <Input
              ref={filterInputRef}
              placeholder="Wyszukaj w kolumnach..."
              value={globalFilter}
              onChange={(event) =>
                setGlobalFilter(event.target.value.toLocaleLowerCase())
              }
              className="max-w-sm border-r-0 rounded-r-none bg-transparent"
            />
            <div className="border border-l-0 rounded-r-xl relative py-1 max-h-10">
              <Button
                size={"icon"}
                variant={"ghost"}
                className={cn(
                  "w-8 h-8 mr-2",
                  !globalFilter ? "invisible" : "visible"
                )}
                onClick={() => {
                  setGlobalFilter("");
                  filterInputRef.current?.focus();
                }}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <Tooltip delayDuration={400}>
            <TooltipTrigger asChild>
              <Toggle
                pressed={dateFilter}
                aria-label="Toggle date search"
                variant={"outline"}
                className={cn(
                  "px-2",
                  dateFilter
                    ? "bg-border text-foreground"
                    : "text-muted-foreground"
                )}
                onClick={toggleDateFilter}
              >
                <Calendar />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Uwzględnij filtrowanie po dacie</TooltipContent>
          </Tooltip>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="text-muted-foreground"
            >
              <Info />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Tabela obiektów wodociągów</DialogTitle>
              <DialogDescription className="pt-4 flex flex-col gap-4">
                <p>
                  Tabela wyświetla informacje o obiektach w sieci wodowiągowej.
                </p>
                <Separator />
                <ul className="flex flex-col gap-2">
                  <li>
                    <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                      Pole wyszukiwania
                    </span>{" "}
                    - Szukaj rekordów w tabeli po kolumnach
                  </li>
                  <li className="flex gap-1 items-center">
                    <div className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold w-fit ">
                      <Calendar className="" />
                    </div>
                    - Uwzględnienie wyszukiwania po dacie
                  </li>
                  <li>
                    <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                      Kliknięcie w nazwę kolumny
                    </span>{" "}
                    - Sortowanie wg wybranej kolumny
                  </li>
                </ul>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <Table className="h-full border-t">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className={cn("text-lg text-center", {
                      "w-[50px]": header.id === "id",
                    })}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="text-lg">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Brak wyników.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
