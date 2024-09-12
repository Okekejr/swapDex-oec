import { FC } from "react";
import { motion } from "framer-motion";
import { Avatar, Button, HStack, Text, Tooltip } from "@chakra-ui/react";
import { ConnectBtn, MyBtn, SelectTokenBtn, Selector } from "@/types";
import { ChevronUp } from "../components/icons/ChevronUp";
import { fonts } from "@/theme/Fonts";
import { useTranslation } from "react-i18next";

export const CustomBtn: FC<MyBtn> = ({ children }) => {
  return (
    <>
      <motion.div whileHover={{ y: -1 }}>{children}</motion.div>
    </>
  );
};

export const ConnectButton: FC<ConnectBtn> = ({ title, ...rest }) => {
  const { t } = useTranslation("global");

  return (
    <>
      <CustomBtn>
        <Button
          variant="solid"
          borderRadius="full"
          color="neutral.100"
          padding="5px 10px"
          _hover={{ bgColor: "" }}
          _active={{ bgColor: "" }}
          backgroundColor="rgba(78, 56, 156, 0.48)"
          {...rest}
        >
          {title || t("connect-wallet.connect")}
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
          _hover={{ bgColor: "" }}
          _active={{ bgColor: "" }}
          fontSize="0.8rem"
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

export const SelectTokenButton: FC<SelectTokenBtn> = ({
  isOpen,
  activeToken,
  openModal,
  ...rest
}) => {
  return (
    <>
      <Button
        rightIcon={
          <ChevronUp
            transition="all 175ms ease"
            transform={isOpen ? "" : "scaleY(-1)"}
          />
        }
        width="fit-content"
        fontSize="0.8rem"
        borderRadius="18px"
        color="neutral.100"
        _hover={{ bgColor: "" }}
        _active={{ bgColor: "" }}
        backgroundColor={activeToken ? "transparent" : "surface.quinary"}
        border="1px solid rgba(255, 255, 255, 0.07)"
        padding="5px 12px 5px 6px"
        onClick={openModal}
        {...rest}
      >
        {activeToken ? (
          <HStack gap="10px">
            <Tooltip
              hasArrow
              label={`${activeToken?.name} logo`}
              bg="transparent"
              color="#fff"
              openDelay={1500}
            >
              <Avatar
                size="xs"
                name={activeToken?.name}
                src={activeToken?.logoURI}
              />
            </Tooltip>
            <Text fontFamily={fonts.body} fontWeight="600" fontSize="1rem">
              {activeToken?.symbol}
            </Text>
          </HStack>
        ) : (
          "Select token"
        )}
      </Button>
    </>
  );
};
