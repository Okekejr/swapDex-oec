import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Flex, Box, FlexProps } from "@chakra-ui/react";
import { Navbar } from "./navbar";
import { Feedback } from "./feedback";

export const Layout: FC<FlexProps> = ({ children, ...rest }) => {
  const [isShrunk, setShrunk] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <Flex
      direction="column"
      minH="100vh"
      w="100%"
      paddingTop={router.route === "/" ? "0" : "7.5rem"}
      position="relative"
      {...rest}
    >
      <Navbar isShrunk={isShrunk} />
      <Box height="13vh" maxH="260px" />
      <Box flex={1}>{children}</Box>
      <Box display="flex" justifyContent="flex-end" mr={8}>
        <Feedback />
      </Box>
    </Flex>
  );
};
