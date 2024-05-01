import {
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
} from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";
import { NetworkMenu } from "./networkMenu";
import { TokenItems } from "./tokenItems";
import { fonts } from "@/theme/Fonts";
import { Token } from "@/types";

interface Props extends ModalProps {
  children: React.ReactNode;
  headerTitle: string;
}

export const ModalPopup: FC<Props> = ({ children, headerTitle, ...rest }) => {
  return (
    <Modal isCentered {...rest}>
      <ModalOverlay />
      <ModalContent color="#fff">
        <ModalHeader>{headerTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

interface TokenProps {
  activeToken: Token | undefined;
  otherToken: Token | undefined;
  setActiveToken: Dispatch<SetStateAction<Token | undefined>>;
  onClose: () => void;
  tokenList: Token[] | undefined;
  isOpen: boolean;
}

export const TokenModal: FC<TokenProps> = ({
  activeToken,
  otherToken,
  isOpen,
  setActiveToken,
  onClose,
  tokenList,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent color="#fff">
        <ModalHeader>Select a token</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection="column" gap={8} py={4}>
            <HStack justifyContent="space-between">
              <Text fontFamily={fonts.body} fontWeight="600" fontSize="1rem">
                Supported Tokens
              </Text>
              <NetworkMenu />
            </HStack>

            <Flex flexWrap="wrap" width="100%" gap={4}>
              <TokenItems
                activeToken={activeToken}
                otherToken={otherToken}
                setActiveToken={setActiveToken}
                onClose={onClose}
                tokeList={tokenList}
              />
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
