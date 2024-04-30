import { useAcctBalance } from "@/hooks/useAcc";
import { useMounted } from "@/hooks/useMounted";
import { PageContainer } from "@/ui/components/pageContainer";
import { TruncateAddress, formatedBalance } from "@/util";
import { Text, VStack } from "@chakra-ui/react";

const Home = () => {
  const { balance, chainId, address } = useAcctBalance();
  const { hasMounted } = useMounted();

  return (
    <PageContainer pt={{ base: 20, md: 12 }} pb={{ base: 20, md: 12 }}>
      {hasMounted ? (
        <VStack>
          <Text>Hello there</Text>
          <Text>Balance: {balance.data && formatedBalance(balance.data)}</Text>
          <Text>Address: {address && TruncateAddress(4, address)}</Text>
          <Text>Current Chain : {chainId}</Text>
        </VStack>
      ) : (
        <Text>...loading</Text>
      )}
    </PageContainer>
  );
};

export default Home;
