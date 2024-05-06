import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { chainId, src } = req.body;

    // Construct the request URL with parameters
    const url = `https://api.1inch.dev/swap/v6.0/${chainId}/approve/transaction`;

    // Construct the query string
    const queryString = new URLSearchParams({
      tokenAddress: src,
    }).toString();

    // Fetch allowance
    const getApproval = await fetch(`${url}?${queryString}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_1INCH_API_KEY}`,
        Accept: "application/json",
      },
    });

    const data = await getApproval.json();
    res.status(200).json(data);

    // // Return transaction details
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
