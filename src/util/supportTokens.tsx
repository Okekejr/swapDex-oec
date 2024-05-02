// symbols of tokens i want to support

import { Token, TokensResponse, balances } from "@/types";

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

export const getTokenBalance = (
  addie: string | undefined,
  balances: balances | undefined
) => {
  const tokenAddress = addie && addie;

  console.log(addie, balances);

  // if (tokenAddress && balances && balances.hasOwnProperty(tokenAddress)) {
  //   return balances[tokenAddress];
  // } else {
  //   return undefined;
  // }
};
