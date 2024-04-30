import { createConfig, http } from "wagmi";
import { mainnet, polygon } from "wagmi/chains";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

export const config = createConfig({
  chains: [mainnet, polygon],
  connectors: [
    injected({ target: "metaMask" }),
    walletConnect({
      projectId,
      showQrModal: true,
      qrModalOptions: { themeMode: "light" },
    }),
    coinbaseWallet({
      appName: "scalex swap",
    }),
  ],
  transports: {
    [mainnet.id]: http(
      `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`,
      {
        key: process.env.NEXT_PUBLIC_ALCHEMY_KEY,
        name: "Alchemy HTTP Provider",
      }
    ),
    [polygon.id]: http(
      `https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY_POLYGON}`,
      {
        key: process.env.NEXT_PUBLIC_ALCHEMY_KEY_POLYGON,
        name: "Alchemy HTTP Provider",
      }
    ),
  },
});
