export const TruncateAddress = (num: number, adress?: string) => {
  return adress
    ? `${adress.substring(0, 6)}...${adress.substring(adress.length - num)}`
    : "";
};
