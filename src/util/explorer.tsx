import { ExplorT } from "@/types";

export const ExplorerUrl = ({ chain, block }: ExplorT) => {
  const url = chain.blockExplorers?.default.url;
  const expUrl = `${url}/block/${block}`;

  return expUrl;
};
