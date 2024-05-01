import { Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import {
  StackItemContainer,
  WalletConatiner,
  WalletInput,
} from "../components/pageContainer";
import { WalletSelector } from "../components/wallet-selector";
import { useMounted } from "@/hooks/useMounted";
import { ArrowDown } from "../components/icons/ArrowDown";
import { useAccount } from "wagmi";
import { SelectTokenButton } from "./buttons";
import { useTokens } from "@/hooks/useTokens";
import { useWalletSelector } from "@/hooks/useSelector";
import { Token } from "@/types";
import { TokenModal } from "./modal";

export const Wallet: FC = () => {
  const [activeToken, setActiveToken] = useState<Token | undefined>();
  const [toToken, setToToken] = useState<Token | undefined>();
  const { hasMounted } = useMounted();
  const { isConnected } = useAccount();
  const { tokeList } = useTokens();
  const { modal, modal1, handleClose, handleOpen, handleClose1, handleOpen1 } =
    useWalletSelector();

  useEffect(() => {
    if (tokeList && tokeList.length > 0) {
      const firstToken = tokeList.find(
        (token) =>
          token.address === "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
      );
      setActiveToken(firstToken);
    } else {
      return;
    }
  }, [tokeList]);

  return hasMounted ? (
    <>
      <WalletConatiner>
        <form>
          <FormControl>
            <StackItemContainer>
              <WalletInput>
                <StackItemContainer>
                  <Text textAlign="start" fontSize="14px">
                    You Pay
                  </Text>

                  <Flex w="100%" justifyContent="space-between">
                    <Input
                      appearance="none"
                      border="none"
                      boxShadow="none"
                      bg="transparent"
                      focusBorderColor="transparent"
                      outline="none"
                      type="number"
                      textAlign="left"
                      placeholder="0"
                      w={{ base: "11rem", lg: "20rem" }}
                      fontSize={{ base: "1.7rem", md: "2rem" }}
                      padding="0"
                      _placeholder={{ color: "grey", fontWeight: "bold" }}
                    />

                    <SelectTokenButton
                      isOpen={modal}
                      openModal={handleOpen}
                      activeToken={activeToken}
                    />

                    <TokenModal
                      activeToken={activeToken}
                      otherToken={toToken}
                      setActiveToken={setActiveToken}
                      onClose={handleClose}
                      isOpen={modal}
                      tokenList={tokeList}
                    />
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Text
                      color="grey"
                      fontSize="14px"
                      w={{ base: "11rem", lg: "20rem" }}
                    >
                      $
                    </Text>
                    <Flex
                      alignItems="center"
                      justifyContent="space-between"
                      gap={4}
                    >
                      <Text textAlign="end" fontSize="14px">
                        Balance:
                      </Text>
                      <Text
                        as="button"
                        color="red.600"
                        fontSize="14px"
                        fontWeight="bold"
                        mt="0.9px"
                      >
                        Max
                      </Text>
                    </Flex>
                  </Flex>
                </StackItemContainer>
              </WalletInput>
              <ArrowDown />
              <WalletInput>
                <StackItemContainer>
                  <Text textAlign="start" fontSize="14px">
                    You Recieve
                  </Text>

                  <Flex w="100%" justifyContent="space-between">
                    <Input
                      border="none"
                      appearance="none"
                      boxShadow="none"
                      bg="transparent"
                      focusBorderColor="transparent"
                      outline="none"
                      type="number"
                      textAlign="left"
                      placeholder="0"
                      w={{ base: "11rem", lg: "20rem" }}
                      fontSize={{ base: "1.7rem", md: "2rem" }}
                      padding="0"
                      _placeholder={{ color: "grey", fontWeight: "bold" }}
                      readOnly
                    />

                    <SelectTokenButton
                      isOpen={modal}
                      openModal={handleOpen1}
                      activeToken={toToken}
                    />

                    <TokenModal
                      activeToken={toToken}
                      otherToken={activeToken}
                      setActiveToken={setToToken}
                      onClose={handleClose1}
                      isOpen={modal1}
                      tokenList={tokeList}
                    />
                  </Flex>
                  <Flex justifyContent="space-between">
                    <Text
                      color="grey"
                      fontSize="14px"
                      w={{ base: "11rem", lg: "20rem" }}
                    >
                      $
                    </Text>
                    <Flex
                      alignItems="center"
                      justifyContent="space-between"
                      gap={4}
                    >
                      <Text textAlign="end" fontSize="14px">
                        Balance:
                      </Text>
                    </Flex>
                  </Flex>
                </StackItemContainer>
              </WalletInput>

              <>
                {hasMounted ? (
                  !isConnected ? (
                    <WalletSelector
                      title="Connect Wallet"
                      backgroundColor="rgba(31, 46, 100, 0.50)"
                      border="1px solid #273977"
                      borderRadius="10px"
                      opacity="0.8"
                      width="100%"
                      height="3.5rem"
                      _hover={{ bgColor: "rgba(31, 46, 100, 0.50)" }}
                    />
                  ) : (
                    ""
                  )
                ) : null}
              </>

              <>
                {isConnected && (
                  <WalletSelector
                    title="Connect Wallet"
                    backgroundColor="rgba(31, 46, 100, 0.50)"
                    border="1px solid #273977"
                    borderRadius="10px"
                    opacity="0.8"
                    width="100%"
                    height="3.5rem"
                    _hover={{ bgColor: "rgba(31, 46, 100, 0.50)" }}
                  />
                )}
              </>
            </StackItemContainer>
          </FormControl>
        </form>
      </WalletConatiner>
    </>
  ) : null;
};
