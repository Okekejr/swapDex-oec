import { SwapRequest } from "@/types";
import { finalAmount } from "@/util";
import { useState } from "react";

export const useSwapRequest = () => {
  const [allowance, setAllowance] = useState<string | null>(null);
  const [error, setError] = useState<unknown>();
  const [txDetails, setTxDetails] = useState({
    to: null,
    data: null,
    value: null,
  });

  const fetchDexSwap = async ({
    chainId,
    src,
    from,
    dst,
    amount,
    srcDecimal,
  }: SwapRequest) => {
    try {
      const allowanceResponse = await fetch("/api/1inch/getAllowance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chainId, src, from }),
      });

      const data = await allowanceResponse.json();
      setAllowance(data.allowance);

      if (data.allowance === "0") {
        console.log("Allowance is zero, requesting approval...");

        await new Promise((resolve) => setTimeout(resolve, 3000));

        const approvalResponse = await fetch("/api/1inch/getApproval", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chainId, src }),
        });

        const approved = await approvalResponse.json();
        setTxDetails(approved);
        return;
      }

      if (allowance !== undefined && allowance !== "0") {
        await new Promise((resolve) => setTimeout(resolve, 5000));

        try {
          const swapResponse = await fetch("/api/1inch/makeSwap", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chainId,
              src,
              from,
              dst,
              amount: finalAmount(amount, srcDecimal),
            }),
          });

          if (!swapResponse.ok) {
            // Check if response is not OK
            setError(`Failed to swap tokens: ${swapResponse.statusText}`);
            throw new Error(
              `Failed to swap tokens: ${swapResponse.statusText}`
            );
          }

          const swapped = await swapResponse.json();

          setTxDetails(swapped.tx);
        } catch (error) {
          setError(error);
        }
      }
    } catch (error) {
      console.error("Error getting approval:", error);
      setError(error);
    }
  };

  return { allowance, fetchDexSwap, setTxDetails, txDetails, error };
};
