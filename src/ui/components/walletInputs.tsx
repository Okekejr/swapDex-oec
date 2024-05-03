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
  result?: string | number | undefined;
  data?: string | undefined;
  handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  topInput?: number | undefined;
  value?: number | null;
  handleMaxBtn?: () => void;
}

export const WalletInput: FC<WalletInputT> = ({
  isOpen,
  topInput,
  handleOnChange,
  openModal,
  onClose,
  setActiveToken,
  handleMaxBtn,
  activeToken,
  otherToken,
  tokeList,
  max,
  result,
  data,
  value,
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
            value={topInput}
            onChange={handleOnChange}
            readOnly={!max}
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
          {max && (
            <Text
              display={activeToken ? "block" : "none"}
              color="grey"
              fontSize="14px"
              w={{ base: "11rem", lg: "20rem" }}
            >
              ${(topInput && value && (topInput * value).toFixed(2)) || 0}
            </Text>
          )}

          {max && (
            <Flex alignItems="center" justifyContent="space-between" gap={4}>
              <Text width="fit-content" fontSize="12.5px">
                Balance:{" "}
                {activeToken?.address ===
                "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
                  ? data
                  : result}
              </Text>

              <Text
                color="red.600"
                fontSize="14px"
                fontWeight="bold"
                mt="0.9px"
                onClick={handleMaxBtn}
              >
                Max
              </Text>
            </Flex>
          )}
          <></>
        </Flex>
      </StackItemContainer>
    </WalletInputContainer>
  );
};
