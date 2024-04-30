import {
  ButtonProps,
  CircularProgress,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { ConnectButton, SelectConnectorButton } from "../core/buttons";
import { useConnect } from "wagmi";
import { SelectDrawer } from "../core/drawer";
import { FC, useEffect, useState } from "react";
import type { Connector } from "wagmi";
import { useWalletSelector } from "@/hooks/useSelector";
import { handleButtonColor, handleButtonImage } from "@/util";

export const WalletSelector: FC<ButtonProps> = ({ ...rest }) => {
  const { connect, connectors, error, status, isPending, isError } =
    useConnect();
  const toast = useToast();
  const { modal, handleClose, handleOpen } = useWalletSelector();
  const [selectedConnector, setSelectedConnector] = useState("");
  const wallets = connectors.slice(0, 3);

  const connecting = (connector: Connector) => {
    connect({ connector });
    setSelectedConnector(connector.uid);
  };

  useEffect(() => {
    isError === true &&
      toast({
        title: `${error?.name}`,
        status: "error",
        duration: 9000,
        isClosable: true,
        variant: "solid",
        position: "bottom-left",
      });
  }, [isError, error?.name, toast]);

  return (
    <>
      <ConnectButton
        title="Connect"
        width="fit-content"
        onClick={handleOpen}
        {...rest}
      />

      <SelectDrawer isOpen={modal} onClose={handleClose}>
        <Stack spacing={2}>
          {wallets.map((connector, i) => {
            return (
              <SelectConnectorButton
                bgGradient={handleButtonColor(connector.name)}
                borderTopLeftRadius={i === 0 ? "12px" : ""}
                borderBottomRightRadius={i === 2 ? "12px" : ""}
                key={connector.uid}
                isDisabled={i === 2 || i === 1}
                onClick={() => connecting(connector)}
              >
                {!connector && ""}
                <Stack
                  direction="row"
                  width="100%"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text>{connector.name}</Text>
                  {selectedConnector === connector.uid &&
                  (isPending === true || isError === true) ? (
                    <CircularProgress
                      isIndeterminate
                      thickness="10px"
                      size="20px"
                      color="primary.base"
                    />
                  ) : selectedConnector === connector.uid &&
                    status === "success" ? (
                    <Image
                      alt={connector.name}
                      src={handleButtonImage(connector.name)}
                      width={{ base: 5, md: 7 }}
                      height={{ base: 5, md: 7 }}
                    />
                  ) : (
                    <Image
                      alt={connector.name}
                      src={handleButtonImage(connector.name)}
                      width={{ base: 5, md: 7 }}
                      height={{ base: 5, md: 7 }}
                    />
                  )}
                </Stack>
              </SelectConnectorButton>
            );
          })}
        </Stack>
      </SelectDrawer>
    </>
  );
};
