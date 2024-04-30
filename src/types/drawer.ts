import { DrawerProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface ModalSelect extends DrawerProps {
  children: ReactNode;
  addie?: string;
}
