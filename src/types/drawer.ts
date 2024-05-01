import { DrawerProps } from "@chakra-ui/react";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { Chain } from "viem";
import { UseBalanceReturnType } from "wagmi";

export interface ModalSelect extends DrawerProps {
  children: ReactNode;
}

export interface DetailsOpT {
  setSettings: Dispatch<SetStateAction<boolean>>;
  addie?: string;
  balance: UseBalanceReturnType["data"];
  value: number | null;
}

export interface SettingsOpt {
  setSettings: Dispatch<SetStateAction<boolean>>;
}
