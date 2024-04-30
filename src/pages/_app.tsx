import theme from "@/theme";
import { FontFaces } from "@/theme/Fonts";
import { Layout } from "@/ui/components/layout";
import { config } from "@/util/wagmi";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { WagmiProvider } from "wagmi";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <FontFaces />
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </WagmiProvider>
    </ChakraProvider>
  );
}
