// symbols of tokens i want to support

import { Token } from "@/types";

export const supportedTokens1: Token[] = [
  {
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    symbol: "ETH",
    decimals: 18,
    name: "Ether",
    logoURI:
      "https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
    tags: ["native", "PEG:ETH"],
  },
  {
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    symbol: "USDC",
    decimals: 6,
    name: "USD Coin",
    logoURI:
      "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
    eip2612: true,
    tags: ["PEG:USD", "tokens"],
  },
  {
    address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    symbol: "WETH",
    decimals: 18,
    name: "Wrapped Ether",
    logoURI:
      "https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
    tags: ["PEG:ETH", "tokens"],
  },
  {
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    symbol: "USDT",
    decimals: 6,
    name: "Tether USD",
    logoURI:
      "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
    tags: ["PEG:USD", "tokens"],
  },
  {
    address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
    symbol: "MATIC",
    decimals: 18,
    name: "Matic Token",
    logoURI:
      "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
    tags: ["tokens"],
  },
  {
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    symbol: "DAI",
    decimals: 18,
    name: "Dai Stablecoin",
    logoURI:
      "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
    eip2612: true,
    tags: ["PEG:USD", "tokens"],
  },
  {
    address: "0xaea46a60368a7bd060eec7df8cba43b7ef41ad85",
    symbol: "FET",
    decimals: 18,
    name: "Fetch",
    logoURI:
      "https://tokens.1inch.io/0xaea46a60368a7bd060eec7df8cba43b7ef41ad85.png",
    tags: ["tokens"],
  },
  {
    address: "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
    symbol: "FTM",
    decimals: 18,
    name: "Fantom Token",
    logoURI:
      "https://tokens.1inch.io/0x4e15361fd6b4bb609fa63c81a2be19d873717870.png",
    tags: ["tokens"],
  },
];

export const supportedTokens2: Token[] = [
  {
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    symbol: "MATIC",
    decimals: 18,
    name: "MATIC",
    logoURI:
      "https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
    tags: ["native"],
  },
  {
    address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    symbol: "USDT",
    decimals: 6,
    name: "Tether USD",
    logoURI:
      "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
    tags: ["PEG:USD", "tokens"],
  },
  {
    address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    symbol: "DAI",
    decimals: 18,
    name: "(PoS) Dai Stablecoin",
    logoURI:
      "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
    tags: ["PEG:USD", "tokens"],
  },
  {
    address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    symbol: "WETH",
    decimals: 18,
    name: "Wrapped Ether",
    logoURI:
      "https://tokens.1inch.io/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619.png",
    tags: ["tokens"],
  },
  {
    address: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
    symbol: "USDC",
    decimals: 6,
    name: "USD Coin",
    logoURI:
      "https://tokens.1inch.io/0x3c499c542cef5e3811e1192ce70d8cc03d5c3359.png",
    tags: ["tokens"],
  },
];
