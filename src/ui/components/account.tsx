import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useAcctBalance } from "@/hooks/useAcc";
import { TruncateAddress } from "@/util";

export const Account: FC = () => {
  const { address } = useAcctBalance();

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
    </>
  );
};
