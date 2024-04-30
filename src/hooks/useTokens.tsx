import { Token, TokensResponse } from "@/types";
import { getSupportedTokens } from "@/util";
import { useCallback, useEffect, useState } from "react";
import { useAccount } from "wagmi";

export const useTokens = () => {
  const [loading, setLoading] = useState(false);
  const [tokens, setTokens] = useState<TokensResponse | null>();
  const [tokeList, setTokenList] = useState<Token[]>();
  const { chainId } = useAccount();

  const fetchTokens = useCallback(async (chainId: number) => {
    try {
      setLoading(true);
      const request = await fetch("/api/1inch/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chainId: chainId }),
      });

      const data = await request.json();

      setTokens(data);

      setTokenList(getSupportedTokens(data));

      setLoading(false);
    } catch (error) {
      console.error("Error fetching tokens:", error);
    }
  }, []);

  useEffect(() => {
    if (chainId !== undefined) {
      fetchTokens(chainId);
    }
  }, [chainId, fetchTokens]);

  return { loading, fetchTokens, tokens, tokeList };
};
