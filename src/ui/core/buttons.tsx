import { FC } from "react";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import { ConnectBtn, MyBtn, Selector } from "@/types";

export const CustomBtn: FC<MyBtn> = ({ children }) => {
  return (
    <>
      <motion.div whileHover={{ y: -1 }}>{children}</motion.div>
    </>
  );
};

export const ConnectButton: FC<ConnectBtn> = ({ title, ...rest }) => {
  return (
    <>
      <CustomBtn>
        <Button
          variant="solid"
          borderRadius="full"
          padding="5px 10px"
          backgroundColor="rgba(78, 56, 156, 0.48)"
          {...rest}
        >
          {title}
        </Button>
      </CustomBtn>
    </>
  );
};

export const SelectConnectorButton: FC<Selector> = ({
  children,
  bgGradient,
  ...rest
}) => {
  return (
    <>
      <CustomBtn>
        <Button
          variant="solid"
          width="100%"
          height="4rem"
          borderRadius="none"
          color="neutral.100"
          bgGradient={bgGradient}
          {...rest}
        >
          {children}
        </Button>
      </CustomBtn>
    </>
  );
};
