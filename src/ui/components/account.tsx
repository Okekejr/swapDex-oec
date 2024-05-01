import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { useAcctBalance } from "@/hooks/useAcc";
import { TruncateAddress } from "@/util";
import { AccountDrawer } from "../core/drawer";
import { useWalletSelector } from "@/hooks/useSelector";
import { DetailsOptions, SettingOptions } from "./drawerOptions";
import { useAccount } from "wagmi";
import { useFetchValue } from "@/hooks/useFetchValue";

export const Account: FC = () => {
  const { address, isConnected, balance } = useAcctBalance();
  const { chain } = useAccount();
  const { handleOpen, modal, handleClose } = useWalletSelector();
  const [settings, setSettings] = useState(false);
  const { value } = useFetchValue(chain);

  useEffect(() => {
    if (isConnected === true && modal === true) {
      setSettings(false);
    }
  }, [isConnected, modal]);

  return (
    <>
      <Button
        alignItems="center"
        borderRadius="full"
        boxShadow="0 0 10px rgba(0, 0, 0, 0.3)"
        display="flex"
        gap="6px"
        padding="3px 7px"
        height="36px"
        w="fit-content"
        mx="10px"
        variant="ghost"
        _hover={{
          backgroundColor: "rgba(78, 56, 156, 0.48)",
        }}
        onClick={handleOpen}
      >
        <Box>
          <Avatar
            background="linear-gradient(to left, #7928CA, #FF0080)"
            width={7}
            height={7}
          />
        </Box>
        <Box w="fit-content" display={{ base: "none", md: "block" }}>
          <Text fontWeight="thin">
            {address && TruncateAddress(4, address)}
          </Text>
        </Box>
      </Button>

      {isConnected === true && !settings ? (
        <AccountDrawer isOpen={modal} onClose={handleClose}>
          <DetailsOptions
            setSettings={setSettings}
            addie={address && TruncateAddress(4, address)}
            balance={balance.data}
            value={value}
          />
        </AccountDrawer>
      ) : (
        <AccountDrawer isOpen={modal} onClose={handleClose}>
          <SettingOptions setSettings={setSettings} />
        </AccountDrawer>
      )}
    </>
  );
};
