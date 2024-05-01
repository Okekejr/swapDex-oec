import { FetchChainFeed } from "@/config/chainFeed";
import { useEffect, useState } from "react";
import { Chain } from "viem";

export const useFetchValue = (chain: Chain | undefined) => {
  const [value, setValue] = useState<number | null>(null);

  const rpc = chain?.rpcUrls.default.http[0];

  useEffect(() => {
    const address = () => {
      if (chain && chain.name === "Ethereum") {
        return "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";
      } else {
        return "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0";
      }
    };

    FetchChainFeed({ rpcUrl: rpc, address: address() }).then((price) =>
      setValue(price)
    );
  }, [chain, rpc]);

  return { value };
};
