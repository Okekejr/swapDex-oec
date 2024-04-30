import { EthereumIcon } from "@/ui/components/icons/Ethereum";
import { PolygonIcon } from "@/ui/components/icons/Polygon";

export const handleButtonColor = (name: string): string => {
  if (name === "MetaMask") {
    return "linear-gradient(to right, #FF5C00, #FFDC24)";
  } else if (name === "WalletConnect") {
    return "linear-gradient(to right, #8F00FF, #0700FF)";
  } else {
    return "linear-gradient(to right, #3773F5, #0052FF)";
  }
};

export const handleButtonImage = (name: string): string => {
  if (name === "MetaMask") {
    return "assets/icons/metamask.svg";
  } else if (name === "WalletConnect") {
    return "assets/icons/walletConnect.svg";
  } else {
    return "assets/icons/coinBase.svg";
  }
};

export const networkImage = (name: string) => {
  if (name === "Ethereum") {
    return <EthereumIcon />;
  } else {
    return <PolygonIcon />;
  }
};
