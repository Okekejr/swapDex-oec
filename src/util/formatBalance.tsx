import { ethers } from "ethers";
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

export const finalAmount = (
  amount: number | null,
  srcDecimal: number | undefined
) => {
  const amountInBaseUnit =
    amount && ethers.utils.parseUnits(amount.toString(), srcDecimal);

  const amountAsString =
    amountInBaseUnit && ethers.utils.formatUnits(amountInBaseUnit, 0);

  return amountAsString;
};
