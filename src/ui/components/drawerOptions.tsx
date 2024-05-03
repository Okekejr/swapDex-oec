import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Flex,
  HStack,
  Heading,
  Link,
  Stack,
  Stat,
  StatHelpText,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { GiPowerButton } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { SlideInText } from "./slide-in-text";
import { IoWalletOutline } from "react-icons/io5";
import { TruncateAddress, formatedBalance } from "@/util";
import { useDisconnect } from "wagmi";
import { DetailsOpT, SettingsOpt } from "@/types";
import { FaArrowLeft } from "react-icons/fa6";

export const DetailsOptions: FC<DetailsOpT> = ({
  setSettings,
  addie,
  balance,
  value,
}) => {
  const { disconnect } = useDisconnect();

  return (
    <>
      <DrawerHeader>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center" gap="8px">
            <Box>
              <Avatar
                background="linear-gradient(to left, #7928CA, #FF0080)"
                size="sm"
              >
                <AvatarBadge boxSize="1em" bg="green.500" />
              </Avatar>
            </Box>
            <Box fontWeight="thin" w="fit-content">
              <Text fontSize="16px">{addie && TruncateAddress(4, addie)}</Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={{ base: "3px", md: 4 }}>
            <Box
              as={Button}
              onClick={() => setSettings(true)}
              variant="ghost"
              w="fit-content"
              position="relative"
              padding="3px 7px"
            >
              <IoMdSettings size="1.3rem" />
            </Box>
            <Box
              as={Button}
              onClick={() => disconnect()}
              variant="ghost"
              w="fit-content"
              position="relative"
              padding="3px 7px"
            >
              <GiPowerButton size="1.2rem" />
              <SlideInText>
                <Text fontSize="12px" ml={2}>
                  Disconnect
                </Text>
              </SlideInText>
            </Box>
          </Flex>
        </Flex>
      </DrawerHeader>

      <DrawerBody>
        <Stack spacing={8} mt={8}>
          <HStack spacing={4}>
            <Heading fontSize="23px">Portfolio</Heading>
            <IoWalletOutline size="1.2rem" />
          </HStack>

          <Stat w="fit-content">
            <StatNumber fontSize="40px">
              $ {value && (value * +formatedBalance(balance)).toFixed(2)}
            </StatNumber>
            <StatHelpText fontSize="16px">
              Balance: {formatedBalance(balance)}
            </StatHelpText>
          </Stat>
        </Stack>
      </DrawerBody>

      <DrawerFooter>
        <Text fontSize="14px" color="#C7C7C7">
          Made with ♥️ by{" "}
          <span style={{ fontWeight: "bold" }}>
            <Link href="https://www.linkedin.com/in/emmanuel-okeke/" isExternal>
              Okeke Chukwuebuka Emmanuel
            </Link>
          </span>
        </Text>
      </DrawerFooter>
    </>
  );
};

export const SettingOptions: FC<SettingsOpt> = ({ setSettings }) => {
  return (
    <>
      <DrawerHeader>
        <Flex alignItems="center">
          <Box
            onClick={() => setSettings(false)}
            w="fit-content"
            position="relative"
            padding={0}
            _hover={{ opacity: "0.8", cursor: "pointer" }}
          >
            <FaArrowLeft size="1.3rem" />
          </Box>
          <Text mx="auto" fontWeight="600" textAlign="center">
            Settings
          </Text>
        </Flex>
      </DrawerHeader>

      <DrawerBody>
        <Stack spacing={12}>
          <Text fontWeight="600" color="#C7C7C7" textAlign="left">
            Preferences
          </Text>
        </Stack>
      </DrawerBody>

      <DrawerFooter>
        <Text fontSize="14px" color="#C7C7C7">
          Made with ♥️ by{" "}
          <span style={{ fontWeight: "bold" }}>
            <Link href="https://okekeemmanuel.vercel.app/" isExternal>
              Okeke Chukwuebuka Emmanuel
            </Link>
          </span>
        </Text>
      </DrawerFooter>
    </>
  );
};
