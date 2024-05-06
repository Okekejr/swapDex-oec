import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { ModalSelect } from "@/types/drawer";
import { useTranslation } from "react-i18next";

export const SelectDrawer: FC<ModalSelect> = ({ children, ...rest }) => {
  const { t } = useTranslation("global");

  return (
    <>
      <Drawer placement="right" size={{ base: "xs", md: "sm" }} {...rest}>
        <DrawerContent>
          <DrawerHeader>{t("connect-wallet.heading")}</DrawerHeader>

          <DrawerBody>
            <Box>{children}</Box>
          </DrawerBody>

          <DrawerFooter>
            <Text fontSize="14px">{t("connect-wallet.privacy")}</Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const AccountDrawer: FC<ModalSelect> = ({ children, ...rest }) => {
  return (
    <Drawer placement="right" size={{ base: "xs", md: "sm" }} {...rest}>
      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  );
};
