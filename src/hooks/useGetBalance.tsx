import { balances } from "@/types";
import { useCallback, useEffect, useState } from "react";
import { useAccount } from "wagmi";

interface fetchT {
  chainID: number | undefined;
  walletAdd: string | undefined;
}

export const useGetBalance = () => {
  const { chainId, address } = useAccount();
  const [loading, setLoading] = useState(false);
  const [balances, setBalances] = useState<balances | undefined>();

  const fetchBalances = useCallback(async ({ chainID, walletAdd }: fetchT) => {
    try {
      setLoading(true);
      const request = await fetch(
        `/api/1inch/getBalance?chainId=${chainID}&walletAddress=${walletAdd}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await request.json();

      setBalances(data);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  }, []);

  useEffect(() => {
    if (chainId && address !== undefined) {
      fetchBalances({ chainID: chainId, walletAdd: address });
    }
  }, [address, chainId, fetchBalances]);

  return { loading, balances };
};
