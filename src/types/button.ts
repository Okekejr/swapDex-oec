import { ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface MyBtn {
  children: ReactNode;
}

export interface Selector extends ButtonProps {
  bgGradient: string;
  children: ReactNode;
}

export interface ConnectBtn extends ButtonProps {
  title: string;
}
