import { FC } from "react";
import { ContainerProps, Flex, useDisclosure, Link } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { Account } from "../account";
import { WalletSelector } from "../wallet-selector";
import { Logo } from "../logo";
import { NavLinks } from "./NavLinks";
import { MobileToggle } from "./MobileToggle";
import { MobileDrawer } from "./MobileDrawer";
import { useMounted } from "@/hooks/useMounted";
import { NetworkMenu } from "@/ui/core/networkMenu";

interface Props extends ContainerProps {
  isShrunk: boolean;
}

export const Navbar: FC<Props> = ({ isShrunk, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isConnected } = useAccount();
  const { hasMounted } = useMounted();

  return hasMounted ? (
    <Flex
      py={{ base: 3, md: 2 }}
      zIndex="sticky"
      left="0"
      position="fixed"
      top="0"
      w="100%"
      justify="center"
      mt="7px"
      _before={{
        bg: isShrunk ? "rgba(26, 26, 26, 0.5)" : "",
        content: "''",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backdropFilter: isShrunk ? "blur(8px)" : "",
      }}
      transition="all 200ms ease-in-out"
      {...rest}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxW="container.xl"
        w="100%"
        px={{ base: 6, lg: 8 }}
        zIndex={1}
      >
        <Flex flex="1 1" justifyContent="flex-start">
          <Link aria-label="Swapdex logo" href="/">
            <Logo w={12} h="38px" />
          </Link>
        </Flex>

        <NavLinks
          onClose={onClose}
          display={{ base: "none", lg: "flex" }}
          background={isShrunk ? "" : "background.100"}
          backdropFilter={isShrunk ? "" : "blur(5px)"}
          borderRadius="1.25rem"
          height="2.5rem"
          padding="0 1.5rem"
          mx=""
          gap={{ base: "1.2rem", md: "1rem", lg: "0.5rem" }}
        />

        <Flex justifyContent="flex-end" flex="1 1">
          <Flex gap={4}>
            <NetworkMenu />
            {isConnected ? <Account /> : <WalletSelector />}
          </Flex>
        </Flex>

        <MobileToggle
          isOpen={isOpen}
          onClick={onOpen}
          marginInlineStart={{ base: "1rem" }}
          mr={-4}
        />

        <MobileDrawer isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Flex>
  ) : null;
};
