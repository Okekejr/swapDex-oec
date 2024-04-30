// symbols of tokens i want to support

import { Token, TokensResponse } from "@/types";

export const supportTokens: string[] = [
  "ETH",
  "MATIC",
  "WETH",
  "USDT",
  "DAI",
  "USDC",
  "FET",
  "FTM",
];

export const getSupportedTokens = (tokens: TokensResponse): Token[] => {
  const supportedTokens: Token[] = [];

  tokens &&
    Object.values(tokens.tokens).forEach((info) => {
      const { symbol } = info;
      if (supportTokens.includes(symbol)) {
        supportedTokens.push(info);
      }
    });

  return supportedTokens;
};
