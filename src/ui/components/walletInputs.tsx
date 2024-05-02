import { Dispatch, FC, SetStateAction } from "react";
import { StackItemContainer, WalletInputContainer } from "./pageContainer";
import { Flex, Input, Text } from "@chakra-ui/react";
import { SelectTokenButton } from "../core/buttons";
import { TokenModal } from "../core/modal";
import { Token } from "@/types";

interface WalletInputT {
  isOpen: boolean;
  openModal: () => void;
  onClose: () => void;
  setActiveToken: Dispatch<SetStateAction<Token | undefined>>;
  activeToken: Token | undefined;
  otherToken: Token | undefined;
  tokeList: Token[] | undefined;
  max?: boolean;
}

export const WalletInput: FC<WalletInputT> = ({
  isOpen,
  openModal,
  onClose,
  setActiveToken,
  activeToken,
  otherToken,
  tokeList,
  max,
}) => {
  return (
    <WalletInputContainer>
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
            isOpen={isOpen}
            openModal={openModal}
            activeToken={activeToken}
          />

          <TokenModal
            activeToken={activeToken}
            otherToken={otherToken}
            setActiveToken={setActiveToken}
            onClose={onClose}
            isOpen={isOpen}
            tokenList={tokeList}
          />
        </Flex>
        <Flex justifyContent="space-between">
          <Text color="grey" fontSize="14px" w={{ base: "11rem", lg: "20rem" }}>
            $
          </Text>
          <Flex alignItems="center" justifyContent="space-between" gap={4}>
            <Text textAlign="end" fontSize="14px">
              Balance:
            </Text>
            {max && (
              <Text
                as="button"
                color="red.600"
                fontSize="14px"
                fontWeight="bold"
                mt="0.9px"
              >
                Max
              </Text>
            )}
          </Flex>
        </Flex>
      </StackItemContainer>
    </WalletInputContainer>
  );
};
