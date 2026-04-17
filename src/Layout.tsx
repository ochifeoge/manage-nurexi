import type { ReactNode } from "react";
import { Layout as RALayout, CheckForApplicationUpdate } from "react-admin";
import { TooltipProvider } from "./components/ui/tooltip";

export const Layout = ({ children }: { children: ReactNode }) => (
  <RALayout>
    <TooltipProvider>{children}</TooltipProvider>
    <CheckForApplicationUpdate />
  </RALayout>
);
