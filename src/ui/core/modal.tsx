import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import { FC } from "react";

interface Props extends ModalProps {
  children: React.ReactNode;
  headerTitle: string;
}

export const ModalPopup: FC<Props> = ({ children, headerTitle, ...rest }) => {
  return (
    <Modal isCentered {...rest}>
      <ModalOverlay />
      <ModalContent color="#fff">
        <ModalHeader>Select a token {headerTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign="center">{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};
