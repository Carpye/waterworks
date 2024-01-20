"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  Panel,
  addEdge,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "reactflow";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { defaultEdgeOptions, defaultEdges, defaultNodes } from "@/config";
import ConnectionLine from "./ConnectionLine";

import { cn } from "@/lib/utils";
import { HelpCircle, Loader2 } from "lucide-react";
import "reactflow/dist/style.css";
import { Button } from "../ui/button";
import Edge from "./Edge";
import Node from "./Node";
import { Separator } from "../ui/separator";
import { useTheme } from "next-themes";

const nodeActionContext = createContext({
  nodeActions: [],
  useNodeActions: () => {},
});

export const useNodeActions = () => useContext(nodeActionContext);

export default function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(defaultNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(defaultEdges);

  const [color, setColor] = useState<string | null>(null);
  // const [nodeActions, setNodeActions] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);

  const { resolvedTheme: theme } = useTheme();

  const reactFlowInstance = useReactFlow();

  const [loading, setLoading] = useState<boolean>(true);

  const onConnect = useCallback(
    (connection: Connection) => {
      const edge = { ...connection, type: "customEdge" };

      return setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );

  const onInit = () => {
    setColor(theme === "dark" ? "#131313" : "#d7eafe");
    setLoading(false);
  };

  useEffect(() => setColor(theme === "dark" ? "#131313" : "#d7eafe"), [theme]);

  const resetCanvas = () => {
    setEdges(defaultEdges), setNodes(defaultNodes);
    reactFlowInstance.fitView({ duration: 2 });
  };

  const nodeTypes = useMemo(() => ({ customNode: Node }), []);

  const edgeTypes = useMemo(
    () => ({
      customEdge: Edge,
    }),
    []
  );

  return (
    <div className="w-full h-full border rounded-xl flex justify-center items-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Loader2
          className={cn("w-12 h-12 animate-spin", loading ? "block" : "hidden")}
        />
      </div>
      {/* <nodeActionContext.Provider
        value={{
          nodeActions,
          setNodeActions,
        }}
      > */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        connectionLineComponent={ConnectionLine}
        onConnect={onConnect}
        onInit={onInit}
        className={cn(loading ? "invisible" : "visible")}
        deleteKeyCode={["Delete", "Backspace"]}
        fitView
      >
        <Controls />
        <Background
          variant={BackgroundVariant.Dots}
          gap={12}
          size={1}
          color={color ?? "white"}
          style={{ background: "hsl(var(--background))" }}
        />
        <Panel position="bottom-right">
          <ResetDialog resetCanvas={resetCanvas} />
        </Panel>
        <Panel position="top-right">
          <InfoDialog />
        </Panel>
      </ReactFlow>
      {/* </nodeActionContext.Provider> */}
    </div>
  );
}

interface ResetDialogProps {
  resetCanvas: () => void;
}

function ResetDialog({ resetCanvas }: ResetDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="m-2">Resetuj</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Czy na pewno chcesz zresetować infrastrukturę?
          </DialogTitle>
          <DialogDescription className="pt-4">
            Zresetowanie infrastruktury spowoduje powrót wszystkich węzłów i
            krawędzi do stanu początkowego.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"ghost"}>Zamknij</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={resetCanvas}>Resetuj</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function InfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="p-2 rounded-full">
          <HelpCircle className="text-zinc-400" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Diagram infrastruktury sieci wodociągowych</DialogTitle>
          <DialogDescription className="pt-4 flex flex-col gap-4">
            <p>
              Krawędź można przyczepić do górnych punktów i wychodzą one z
              dolnych punktów.
            </p>
            <Separator />
            <ul>
              <li>
                <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  [Delete/Backspace]
                </span>{" "}
                - Usuń wybraną krawędź
              </li>
            </ul>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
