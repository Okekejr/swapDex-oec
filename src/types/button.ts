import { ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Token } from "./tokenInfo";

export interface MyBtn {
  children: ReactNode;
}

export interface Selector extends ButtonProps {
  bgGradient: string;
  children: ReactNode;
}

export interface ConnectBtn extends ButtonProps {
  title?: string;
}

export interface SelectTokenBtn extends ButtonProps {
  isOpen: boolean;
  openModal: () => void;
  activeToken?: Token | undefined;
}
