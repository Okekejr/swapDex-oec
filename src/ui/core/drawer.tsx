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

export const SelectDrawer: FC<ModalSelect> = ({ children, ...rest }) => {
  return (
    <>
      <Drawer placement="right" {...rest}>
        <DrawerContent>
          <DrawerHeader>Connect a wallet</DrawerHeader>

          <DrawerBody>
            <Box>{children}</Box>
          </DrawerBody>

          <DrawerFooter>
            <Text fontSize="14px">
              By connecting a wallet, you agree to ScalexSwap{"'"}s{" "}
              <span>Terms of Service</span> and consent to its{" "}
              <span>Privacy Policy</span>.
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
