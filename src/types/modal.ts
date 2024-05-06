import { Chain } from "viem";
import { Token } from "./tokenInfo";
import { Dispatch, SetStateAction } from "react";

export interface ModalT {
  hash: `0x${string}` | undefined;
  isConfirming: boolean;
  isSuccess: boolean;
  chain: Chain | undefined;
}
export interface TokenProps {
  activeToken: Token | undefined;
  otherToken: Token | undefined;
  setActiveToken: Dispatch<SetStateAction<Token | undefined>>;
  onClose: () => void;
  tokenList: Token[] | undefined;
  isOpen: boolean;
}
