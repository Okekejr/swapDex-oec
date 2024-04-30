import { useTokens } from "@/hooks/useTokens";
import { fonts } from "@/theme/Fonts";
import { Avatar, Flex, HStack, Text, Tooltip } from "@chakra-ui/react";
import { useState } from "react";

export const TokenItems = () => {
  const { tokeList } = useTokens();
  const [selectedToken, setSelectedToken] = useState("");

  console.log(selectedToken);

  return (
    <Flex flexWrap="wrap"  width="20rem" gap={4}>
      {tokeList &&
        tokeList.map((token) => {
          const { name, address, symbol } = token;
          return (
            <Flex
              borderRadius="18px"
              background={
                selectedToken === address
                  ? "rgba(255, 255, 255, 0.07)"
                  : "transparent"
              }
              border="1px solid rgba(255, 255, 255, 0.07)"
              width="fit-content"
              padding="5px 12px 5px 6px"
              key={name}
              onClick={() => setSelectedToken(address)}
              cursor={selectedToken === address ? "not-allowed" : "pointer"}
            >
              <HStack gap="10px">
                <Tooltip
                  hasArrow
                  label={`${name} logo`}
                  bg="transparent"
                  color="#fff"
                  openDelay={1500}
                >
                  <Avatar size="xs" name={name} src={token.logoURI} />
                </Tooltip>
                <Text fontFamily={fonts.body} fontWeight="600" fontSize="1rem">
                  {symbol}
                </Text>
              </HStack>
            </Flex>
          );
        })}
    </Flex>
  );
};
