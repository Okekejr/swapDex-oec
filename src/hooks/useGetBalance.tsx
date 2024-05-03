import { formatAddress, formatedBalance } from "@/util";
import { useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import * as abis from "@/config/abis";

type AbiOrBalance = (typeof abis)[keyof typeof abis];

export const useGetBalance = (tokenAdd: string | undefined) => {
  const { address, chainId } = useAccount();
  const [data, setData] = useState<string | undefined>();
  const [contract, setContract] = useState<AbiOrBalance | undefined>();
  const balance = useBalance({ address });

  const formattedAddress = formatAddress(tokenAdd);

  useEffect(() => {
    const formattedAddress = formatAddress(tokenAdd);
    if (!formattedAddress) return;

    const fetchData = () => {
      if (chainId === 137) {
        switch (formattedAddress) {
          case "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee":
            setData(formatedBalance(balance.data));
            break;
          case "0xc2132d05d31c914a87c6611c10748aeb04b58e8f":
            setContract(abis.polygon_usdt_abi);
            break;
          case "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063":
            setContract(abis.polygon_dai_abi);
            break;
          case "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619":
            setContract(abis.polygon_weth_abi);
            break;
          case "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359":
            setContract(abis.polygon_usdc_abi);
            break;
          default:
            break;
        }
      } else if (chainId === 1) {
        switch (formattedAddress) {
          case "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee":
            setData(formatedBalance(balance.data));
            break;
          case "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48":
            setContract(abis.eth_usdc_abi);
            break;
          case "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2":
            setContract(abis.eth_weth_abi);
            break;
          case "0xdac17f958d2ee523a2206206994597c13d831ec7":
            setContract(abis.eth_usdt_abi);
            break;
          case "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0":
            setContract(abis.eth_matic_abi);
            break;
          case "0x6b175474e89094c44da98b954eedeac495271d0f":
            setContract(abis.eth_dai_abi);
            break;
          case "0xaea46a60368a7bd060eec7df8cba43b7ef41ad85":
            setContract(abis.eth_fet_abi);
            break;
          case "0x4e15361fd6b4bb609fa63c81a2be19d873717870":
            setContract(abis.eth_ftm_abi);
            break;
          default:
            break;
        }
      }
    };

    fetchData();
  }, [balance.data, chainId, tokenAdd]);

  return { data, contract, formattedAddress };
};
