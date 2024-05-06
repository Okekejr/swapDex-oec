import { useMounted } from "@/hooks/useMounted";
import { config } from "@/util/wagmi";
import { Flex } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { mainnet } from "viem/chains";
import { useAccount } from "wagmi";
import { getBlockNumber } from "wagmi/actions";
import { BlockComp } from "../core/block-spinner";

export const Feedback = () => {
  const { isConnected, chain } = useAccount();
  const { hasMounted } = useMounted();
  const [block, setBlock] = useState(0);
  const [loading, setLoading] = useState(false);

  const getBlock = useCallback(async () => {
    try {
      setLoading(true);
      const currentBlockNumber = await getBlockNumber(config, {
        chainId: mainnet.id,
      });
      const formatBlock = Number(currentBlockNumber);
      setBlock(formatBlock);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching block:", error);
    }
  }, []);

  useEffect(() => {
    getBlock();

    const intervalId = setInterval(() => {
      getBlock();
    }, 20 * 1000);

    return () => clearInterval(intervalId);
  }, [getBlock]);

  return hasMounted ? (
    <>
      <Flex
        h="fit-content"
        position="fixed"
        bottom={10}
        _hover={{ cursor: "default" }}
      >
        {isConnected === true ? (
          <BlockComp
            chain={chain}
            block={block}
            loading={loading}
            isConnected={isConnected}
            colorOne="rgb(64, 182, 107)"
            colorTwo="green.600"
          />
        ) : (
          <BlockComp
            chain={chain}
            block={block}
            loading={loading}
            isConnected={isConnected}
            colorOne="orange.300"
            colorTwo="orange.600"
          />
        )}
      </Flex>
    </>
  ) : null;
};
