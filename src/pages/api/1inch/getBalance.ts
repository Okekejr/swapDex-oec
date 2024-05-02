import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { chainId, walletAddress } = req.query;
  const url = `https://api.1inch.dev/balance/v1.2/${chainId}/balances/${walletAddress}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer zwNOkqKA9o2yEQWSXcPoWQjMHXdJgweL",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
