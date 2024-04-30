import { MoralisNextApi } from "@moralisweb3/next";

const moralisApiKey = process.env.NEXT_PUBLIC_MORALIS_API_KEY || "";

export default MoralisNextApi({ apiKey: moralisApiKey });
