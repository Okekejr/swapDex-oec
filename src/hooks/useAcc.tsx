import { useAccount, useBalance } from "wagmi";

export const useAcctBalance = () => {
  const { address, isConnected, chainId } = useAccount();

  const balance = useBalance({ address: address });

  return {
    address,
    balance,
    chainId,
    isConnected,
  };
};
