import { Token } from "@/types";
import { supportedTokens1, supportedTokens2 } from "@/util";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export const useTokens = () => {
  const [tokeList, setTokeList] = useState<Token[] | undefined>();
  const { chainId } = useAccount();

  useEffect(() => {
    if (!chainId) return;

    if (chainId === 1) {
      setTokeList(supportedTokens1);
    } else {
      setTokeList(supportedTokens2);
    }
  }, [chainId]);

  return { tokeList };
};
