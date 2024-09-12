import { Flex, FormControl, Input, Text, useToast } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import {
  StackItemContainer,
  WalletConatiner,
  WalletInputContainer,
} from "../components/pageContainer";
import { WalletSelector } from "../components/wallet-selector";
import { useMounted } from "@/hooks/useMounted";
import { ArrowDown } from "../components/icons/ArrowDown";
import { useWalletSelector } from "@/hooks/useSelector";
import { ConnectButton, SelectTokenButton } from "./buttons";
import { ModalPopup, TokenModal } from "./modal";
import { useSwapRequest } from "@/hooks/useSwapRequest";
import { useWallet } from "@/hooks/useWallet";
import { useSendTransaction } from "wagmi";
import { Address, parseEther } from "viem";
import { useTranslation } from "react-i18next";

export const Wallet: FC = () => {
  const { t } = useTranslation("global");
  const { hasMounted } = useMounted();
  const { modal, modal1, handleClose, handleOpen, handleClose1, handleOpen1 } =
    useWalletSelector();
  const {
    tokeList,
    topInput,
    chain,
    isConnected,
    activeToken,
    value,
    otherInput,
    toToken,
    address,
    setToToken,
    setOtherInput,
    setActiveToken,
    setTopInput,
    priceTokenTwo,
    BalanceTop,
    handleOnChange,
    handleMaxBtn,
  } = useWallet();

  const { txDetails, fetchDexSwap, setTxDetails } = useSwapRequest();
  const {
    sendTransaction,
    data: hash,
    isSuccess,
    isPending,
    isError,
    error,
  } = useSendTransaction();
  const toast = useToast();

  useEffect(() => {
    if (tokeList && tokeList.length > 0) {
      setActiveToken(tokeList[0]);
    } else {
      return;
    }
  }, [setActiveToken, tokeList]);

  useEffect(() => {
    priceTokenTwo();
  }, [priceTokenTwo]);

  useEffect(() => {
    if (txDetails.to && isConnected) {
      sendTransaction({
        account: address,
        to: txDetails.to as Address,
        data: txDetails.data as unknown as Address,
        value: parseEther(txDetails.value as unknown as string),
      });

      setTopInput(null);
      setToToken(undefined);
      setTxDetails({
        to: null,
        data: null,
        value: null,
      });
    }
  }, [
    address,
    isConnected,
    txDetails,
    sendTransaction,
    setTopInput,
    setTxDetails,
    setToToken,
    setOtherInput,
  ]);

  useEffect(() => {
    if (error || isError) {
      toast({
        title: `Error : ${error.cause || error.message}`,
        status: "error",
        duration: 9000,
        isClosable: true,
        variant: "solid",
        position: "bottom-left",
      });
    }
  }, [error, isError, toast]);

  return hasMounted ? (
    <>
      <WalletConatiner>
        <form>
          <FormControl>
            <StackItemContainer>
              <WalletInputContainer>
                <StackItemContainer>
                  <Text textAlign="start" fontSize="14px">
                    {t("wallet.pay")}
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
                      value={topInput ?? ""}
                      max={BalanceTop()}
                      onChange={handleOnChange}
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
                  <Flex justifyContent="space-between" width="100%">
                    {isConnected && (
                      <>
                        <Text
                          display={activeToken ? "block" : "none"}
                          color="grey"
                          fontSize="14px"
                          w={{ base: "11rem", lg: "20rem" }}
                        >
                          $
                          {(topInput &&
                            value &&
                            (topInput * value).toFixed(2)) ||
                            0}
                        </Text>
                        <Flex
                          alignItems="center"
                          justifyContent="flex-end"
                          justify="flex-end"
                          gap={4}
                        >
                          <Text width="fit-content" fontSize="10px">
                            Balance: <>{BalanceTop()}</>
                          </Text>

                          <Text
                            color="#FF0080"
                            fontSize="11px"
                            fontWeight="bold"
                            mt="0.9px"
                            _hover={{ cursor: "pointer", opacity: 0.7 }}
                            onClick={handleMaxBtn}
                          >
                            Max
                          </Text>
                        </Flex>
                      </>
                    )}
                  </Flex>
                </StackItemContainer>
              </WalletInputContainer>
              <ArrowDown />
              <WalletInputContainer>
                <StackItemContainer>
                  <Text textAlign="start" fontSize="14px">
                    {t("wallet.recieve")}
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
                      value={otherInput !== null ? otherInput.toString() : ""}
                      readOnly
                    />

                    <SelectTokenButton
                      isOpen={modal1}
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
                </StackItemContainer>
              </WalletInputContainer>

              <>
                {hasMounted ? (
                  !isConnected ? (
                    <WalletSelector
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
                {hasMounted ? (
                  isConnected && topInput ? (
                    <ConnectButton
                      border="1px solid #273977"
                      borderRadius="10px"
                      opacity="1"
                      width="100%"
                      height="3.5rem"
                      isDisabled={topInput === undefined}
                      title="Approve & Swap"
                      _hover={{ bgColor: "rgba(78, 56, 156, 0.48)" }}
                      onClick={() =>
                        fetchDexSwap({
                          chainId: chain?.id,
                          src: activeToken?.address,
                          dst: toToken?.address,
                          amount: topInput,
                          from: address,
                          srcDecimal: activeToken?.decimals,
                        })
                      }
                    />
                  ) : (
                    isConnected && (
                      <WalletSelector
                        title={
                          activeToken && toToken && topInput
                            ? "Confirming"
                            : "Enter Amount"
                        }
                        backgroundColor="rgba(31, 46, 100, 0.50)"
                        border="1px solid #273977"
                        borderRadius="10px"
                        opacity="0.8"
                        width="100%"
                        height="3.5rem"
                        isDisabled
                        _hover={{ bgColor: "rgba(31, 46, 100, 0.50)" }}
                      />
                    )
                  )
                ) : null}
              </>

              {isSuccess ? (
                <ModalPopup
                  hash={hash}
                  isConfirming={isPending}
                  isSuccess={isSuccess}
                  chain={chain}
                />
              ) : (
                ""
              )}
            </StackItemContainer>
          </FormControl>
        </form>
      </WalletConatiner>
    </>
  ) : null;
};
