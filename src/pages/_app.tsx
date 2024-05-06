import theme from "@/theme";
import { FontFaces } from "@/theme/Fonts";
import { Layout } from "@/ui/components/layout";
import { config } from "@/util/wagmi";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { WagmiProvider } from "wagmi";
import { NextSeo } from "next-seo";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import global_en from "../ui/translations/en/global.json";
import global_es from "../ui/translations/es/global.json";
import global_fr from "../ui/translations/fr/global.json";

const queryClient = new QueryClient();

i18next.init({
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
    fr: {
      global: global_fr,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <NextSeo
            title="SwapDex Web3 Project"
            description="Web3 project made by Okeke Emmanuel C - Software Engineer"
            openGraph={{
              title: "SwapDex Web3 Project",
              description:
                "A Software Engineer | UI/UX Designer with a passion for creating a delightful user experience",
            }}
          />
          <I18nextProvider i18n={i18next}>
            <Layout>
              <FontFaces />
              <Component {...pageProps} />
            </Layout>
          </I18nextProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ChakraProvider>
  );
}
