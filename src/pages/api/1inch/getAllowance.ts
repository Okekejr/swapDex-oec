import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { chainId, src, from } = req.body;

    const queryString = new URLSearchParams({
      tokenAddress: src,
      walletAddress: from,
    }).toString();

    const url = `https://api.1inch.dev/swap/v6.0/${chainId}/approve/allowance?${queryString}`;

    // Fetch allowance
    const allowanceResponse = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_1INCH_API_KEY}`,
        Accept: "application/json",
      },
    });
    const data = await allowanceResponse.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
