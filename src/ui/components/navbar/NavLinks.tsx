import { FC } from "react";
import { Flex, FlexProps, HStack } from "@chakra-ui/react";
import { routes } from "@/util/routes";
import { useRouter } from "next/router";
import { Link } from "@chakra-ui/next-js";

interface NavLinksProps extends FlexProps {
  onClose: () => void;
}

export const NavLinks: FC<NavLinksProps> = ({ onClose, ...rest }) => {
  const { pathname } = useRouter();

  return (
    <Flex
      as="nav"
      alignItems="center"
      border="1px solid rgba(31, 46, 100, 0.50)"
      {...rest}
    >
      <HStack spacing={4}>
        {routes.map((rout) => {
          return (
            <Link
              _hover={{
                textDecoration: "none",
              }}
              color={pathname === rout.url ? "#fff" : "#9b9b9b"}
              href={rout.url}
              fontWeight="600"
              key={rout.title}
              isExternal={rout.isExternal}
            >
              {rout.title}
            </Link>
          );
        })}
      </HStack>
    </Flex>
  );
};
