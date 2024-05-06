import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { NetworkMenu } from "./networkMenu";
import { TokenItems } from "./tokenItems";
import { fonts } from "@/theme/Fonts";
import { ModalT, TokenProps } from "@/types";
import { useTranslation } from "react-i18next";

export const ModalPopup: FC<ModalT> = ({
  hash,
  isConfirming,
  isSuccess,
  chain,
  ...rest
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation("global");

  useEffect(() => {
    // Open the modal when isSuccess changes to true
    if (isSuccess) {
      setModalOpen(true);
    }
  }, [isSuccess]);

  const closeModal = () => {
    // Close the modal
    setModalOpen(false);
  };

  return (
    <Modal isOpen={modalOpen} onClose={closeModal} isCentered {...rest}>
      <ModalOverlay />
      <ModalContent color="#fff">
        <ModalHeader>{t("transaction.confirm")}</ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign="center">
          <Stack spacing={8}>
            {hash && (
              <Text>
                {t("transaction.hash")} {hash}{" "}
              </Text>
            )}
            {isConfirming && <Text>{t("transaction.waiting")}</Text>}

            <Box>
              <Button
                variant="solid"
                borderRadius="full"
                padding="5px 10px"
                backgroundColor="rgba(78, 56, 156, 0.48)"
                _hover={{
                  bgColor: "rgba(31, 46, 100, 0.50)",
                  textDecoration: "none",
                }}
                isExternal
                as={Link}
                href={
                  hash &&
                  chain &&
                  `${chain.blockExplorers?.default.url}/tx/${hash}`
                }
              >
                {t("transaction.view")}
                {`${chain && chain.blockExplorers?.default.name}`}
              </Button>
            </Box>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export const TokenModal: FC<TokenProps> = ({
  activeToken,
  otherToken,
  isOpen,
  setActiveToken,
  onClose,
  tokenList,
}) => {
  const { t } = useTranslation("global");

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent color="#fff">
        <ModalHeader>{t("tokens.select")}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection="column" gap={8} py={4}>
            <HStack justifyContent="space-between">
              <Text fontFamily={fonts.body} fontWeight="600" fontSize="1rem">
                {t("tokens.token")}
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
