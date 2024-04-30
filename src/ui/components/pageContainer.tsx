import {
  Box,
  Container,
  ContainerProps,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";

interface Props extends ContainerProps {
  children: React.ReactElement | React.ReactElement[];
}

interface PropsStack {
  children: React.ReactNode;
}

interface WalletProps {
  children: React.ReactElement;
}

export const PageContainer: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Container
      display="flex"
      flexDir="column"
      justifyContent="center"
      maxW="container.xl"
      w="100%"
      position="relative"
      px={{ base: 6, lg: 24 }}
      pt={{ base: 6, md: 16 }}
      pb={{ sm: 8, md: 24 }}
      zIndex={10}
      {...rest}
    >
      <VStack spacing={8}>{children}</VStack>
    </Container>
  );
};

export const StackItemContainer = ({ children }: PropsStack) => {
  return <Stack spacing="5px">{children}</Stack>;
};

export const WalletConatiner: FC<PropsStack> = ({ children }) => {
  return (
    <Box
      padding="8px"
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      zIndex={1}
      minWidth="350px"
      max-width="480px"
      border="1px solid"
      borderRadius="24px"
      w={{ md: "32rem" }}
    >
      {children}
    </Box>
  );
};

export const WalletInput: FC<WalletProps> = ({ children }) => {
  return (
    <Box
      borderRadius="10px"
      backgroundColor="rgba(31, 46, 100, 0.50)"
      border="1px solid #273977"
      display="flex"
      flexDir="column"
      fontSize="1rem"
      opacity="0.8"
      padding={4}
      _hover={{ opacity: "1" }}
    >
      {children}
    </Box>
  );
};
