export interface Token {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  logoURI: string;
  domainVersion: string;
  eip2612: boolean;
  isFoT: boolean;
  tags?: string[] | null;
}

export interface TokensResponse {
  tokens: Record<string, Token>;
}
