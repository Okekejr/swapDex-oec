import { useCallback, useState } from "react";
import { useTokens } from "./useTokens";
import { Token } from "@/types";
import { useGetBalance } from "./useGetBalance";
import { useFetchValue } from "./useFetchValue";
import { useAccount, useReadContract } from "wagmi";
import { formatOtherBalance } from "@/util";

export const useWallet = () => {
  const { isConnected, address, chain } = useAccount();
  const { tokeList } = useTokens();
  const [activeToken, setActiveToken] = useState<Token | undefined>();
  const [toToken, setToToken] = useState<Token | undefined>();
  const { data, contract, formattedAddress } = useGetBalance(
    activeToken?.address
  );
  const [topInput, setTopInput] = useState<number | null>(null);
  const [otherInput, setOtherInput] = useState<number | null>(null);
  const { value } = useFetchValue(chain, activeToken?.symbol);
  const { value: toValue } = useFetchValue(chain, toToken?.symbol);

  const result = useReadContract({
    abi: contract,
    address: formattedAddress,
    functionName: "balanceOf",
    args: [address],
  });

  const finalBalance = result ? formatOtherBalance(result.data) : undefined;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = parseFloat(event.target.value);
    setTopInput(input);
  };

  const handleMaxBtn = () => {
    if (activeToken?.address === "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee") {
      setTopInput(Number(data));
    } else {
      setTopInput(Number(finalBalance));
    }
  };

  const priceTokenTwo = useCallback(() => {
    if (value !== null && toValue !== null) {
      const ratio = value / toValue;
      const finalOrder =
        topInput !== null ? parseFloat((topInput * ratio).toFixed(2)) : null;
      setOtherInput(finalOrder);
    } else {
      setOtherInput(null);
    }
  }, [value, toValue, topInput]);

  const BalanceTop = () =>
    activeToken &&
    activeToken.address === "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
      ? data
      : finalBalance;

  return {
    isConnected,
    chain,
    tokeList,
    address,
    topInput,
    otherInput,
    activeToken,
    toToken,
    value,
    setActiveToken,
    setToToken,
    setOtherInput,
    setTopInput,
    handleMaxBtn,
    handleOnChange,
    priceTokenTwo,
    BalanceTop,
  };
};
