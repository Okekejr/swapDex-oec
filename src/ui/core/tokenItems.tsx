import { fonts } from "@/theme/Fonts";
import { Token, TokenItemT } from "@/types";
import { Avatar, Flex, HStack, Text, Tooltip } from "@chakra-ui/react";
import { FC } from "react";

export const TokenItems: FC<TokenItemT> = ({
  setActiveToken,
  activeToken,
  otherToken,
  tokeList,
  onClose,
}) => {
  const handleClick = (token: Token) => {
    setActiveToken(token);
    onClose();
  };

  return (
    <>
      {tokeList &&
        tokeList.map((token) => {
          const { name, address, symbol } = token;
          return (
            <Flex
              borderRadius="18px"
              background={
                activeToken?.address === address ||
                otherToken?.address === address
                  ? "rgba(255, 255, 255, 0.07)"
                  : "transparent"
              }
              border="1px solid rgba(255, 255, 255, 0.07)"
              width="fit-content"
              padding="5px 12px 5px 6px"
              key={name}
              onClick={() => {
                if (
                  otherToken?.address !== token.address &&
                  activeToken?.address !== token.address
                ) {
                  handleClick(token);
                }
              }}
              cursor={
                activeToken?.address === address ||
                otherToken?.address === address
                  ? "not-allowed"
                  : "pointer"
              }
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
    </>
  );
};
