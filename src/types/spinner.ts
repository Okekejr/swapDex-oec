import { SpinnerProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface CustomSpinT extends SpinnerProps {
  children: ReactNode;
  loading?: boolean;
  connected?: boolean;
}
