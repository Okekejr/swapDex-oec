import { PageContainer } from "@/ui/components/pageContainer";
import { Wallet } from "@/ui/core/wallet";

const Home = () => {
  return (
    <PageContainer pt={{ base: 20, md: 12 }} pb={{ base: 20, md: 12 }}>
      <Wallet />
    </PageContainer>
  );
};

export default Home;
