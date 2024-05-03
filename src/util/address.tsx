export const TruncateAddress = (num: number, adress?: string) => {
  return adress
    ? `${adress.substring(0, 6)}...${adress.substring(adress.length - num)}`
    : "";
};

export const formatAddress = (
  address: string | undefined
): `0x${string}` | undefined => {
  if (address) {
    return address as `0x${string}`;
  }
};
