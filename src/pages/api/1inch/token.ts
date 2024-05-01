import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { chainId } = req.body;
  const url = `https://api.1inch.dev/swap/v6.0/${chainId}/tokens`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: "Bearer zwNOkqKA9o2yEQWSXcPoWQjMHXdJgweL",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
