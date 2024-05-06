import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { chainId, src, dst, amount, from } = req.body;

    // Construct the request URL with parameters
    const url = `https://api.1inch.dev/swap/v6.0/${chainId}/swap`;

    // Construct the query string
    const queryString = new URLSearchParams({
      src: src,
      dst: dst,
      amount: amount,
      from: from,
      slippage: "2",
    }).toString();

    // make swap
    const makeSwap = await fetch(`${url}?${queryString}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer zwNOkqKA9o2yEQWSXcPoWQjMHXdJgweL",
        Accept: "application/json",
      },
    });

    const data = await makeSwap.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
