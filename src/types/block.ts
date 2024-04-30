import { FlexProps } from "@chakra-ui/react";
import { Chain } from "viem";

export interface BlockCompT extends FlexProps {
  chain: Chain | undefined;
  block: number;
  loading: boolean;
  isConnected: boolean;
  colorOne: string;
  colorTwo: string;
}

export interface ExplorT {
  chain: Chain;
  block: number;
}
