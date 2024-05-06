import { Dispatch, SetStateAction } from "react";

export interface Token {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  logoURI: string;
  eip2612?: boolean;
  tags?: string[] | null;
}

export interface TokenItemT {
  setActiveToken: Dispatch<SetStateAction<Token | undefined>>;
  activeToken: Token | undefined;
  otherToken: Token | undefined;
  tokeList: Token[] | undefined;
  onClose: () => void;
}

export interface TokensResponse {
  tokens: Record<string, Token>;
}

export interface balances {
  [address: string]: string;
}
