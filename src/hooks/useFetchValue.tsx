import { FetchChainFeed } from "@/config/chainFeed";
import { Token } from "@/types";
import { useEffect, useState } from "react";
import { Chain } from "viem";

interface TokenAddressMap {
  [chainId: number]: {
    [symbol: string]: string;
  };
}

const tokenAddresses: TokenAddressMap = {
  1: {
    DAI: "0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9",
    USDC: "0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6",
    USDT: "0x3E7d1eAB13ad0104d2750B8863b489D65364e32D",
    MATIC: "0x7bAC85A8a13A4BcD8abb3eB7d6b4d632c5a57676",
  },
  137: {
    USDC: "0xfE4A8cc5b5B2366C1B58Bea3858e81843581b2F7",
    DAI: "0x4746DeC9e833A82EC7C2C1356372CcF2cfcD2F3D",
    USDT: "0x0A6513e40db6EB1b165753AD52E80663aeA50545",
  },
};

export const useFetchValue = (
  chain: Chain | undefined,
  tokenSymbol?: Token["symbol"] | undefined
) => {
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    const fetchValue = async () => {
      if (!chain) return;

      let address: string | null = "";

      if (
        (chain.id === 1 && !tokenSymbol) ||
        (chain.id === 1 && tokenSymbol === "ETH")
      ) {
        address = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";
      } else if (
        (chain.id === 137 && !tokenSymbol) ||
        (chain.id === 137 && tokenSymbol === "MATIC")
      ) {
        address = "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0";
      } else {
        const tokenAddress = tokenAddresses[chain.id];
        if (tokenAddress) {
          address = (tokenSymbol && tokenAddress[tokenSymbol]) || null;
          setValue(null);
        }
      }

      if (!address) return;

      const rpc = chain.rpcUrls.default.http[0];

      try {
        const price = await FetchChainFeed({ rpcUrl: rpc, address });
        setValue(price);
      } catch (error) {
        console.error("Error fetching value:", error);
      }
    };

    fetchValue();
  }, [chain, tokenSymbol]);

  return { value };
};
