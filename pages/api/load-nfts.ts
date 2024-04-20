import { authMiddleware } from "@/lib/auth-middleware";
import { loadOpenSeaCollections } from "@/lib/get-nfts";
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

const router = createRouter<NextApiRequest, NextApiResponse>();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const address = req.address;

  if (!address) {
    res.status(400).json({ error: "Missing address" });
    return;
  }
  if (typeof address !== "string") {
    res.status(400).json({ error: "Invalid address" });
    return;
  }
  const data = await loadOpenSeaCollections({
    walletAddress: address,
  });

  res.status(200).json({ data });
}

router.use(authMiddleware).get(handler);

export default router.handler({
  onError: (err: any, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
