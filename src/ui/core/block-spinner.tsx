import { Circle, Flex, Link, Text, Tooltip } from "@chakra-ui/react";
import { CustomSpinner } from "./customSpinner";
import { FC } from "react";
import { ExplorerUrl } from "@/util";
import { BlockCompT } from "@/types";

export const BlockComp: FC<BlockCompT> = ({
  chain,
  block,
  loading,
  isConnected,
  colorOne,
  colorTwo,
}) => {
  return (
    <Flex gap="6px" alignItems="center">
      <Tooltip
        hasArrow
        label="The most recent block number on this network. Prices update on every block."
        placement="left"
      >
        <Link
          href={chain && ExplorerUrl({ chain, block })}
          _hover={{ textDecor: "none" }}
          isExternal
        >
          <Text
            w="fit-content"
            fontSize="14px"
            fontWeight="thin"
            _hover={{ color: colorOne }}
            color={loading ? colorOne : colorTwo}
          >
            {block ? block : ""}
          </Text>
        </Link>
      </Tooltip>

      <CustomSpinner loading={loading} connected={isConnected}>
        <Circle size="7px" bg={colorOne} />
      </CustomSpinner>
    </Flex>
  );
};
