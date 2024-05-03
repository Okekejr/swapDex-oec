import { formatEther } from "viem";
import { UseBalanceReturnType } from "wagmi";

export const formatedBalance = (ActBalance: UseBalanceReturnType["data"]) => {
  return ActBalance
    ? parseFloat(formatEther(ActBalance.value)).toFixed(4)
    : "0.0000";
};

export const formatOtherBalance = (data: bigint | unknown) => {
  return typeof data === "bigint" && data
    ? parseFloat(formatEther(data)).toFixed(4)
    : 0.0;
};
