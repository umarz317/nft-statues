import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { authMiddleware } from "@/lib/auth-middleware";

const router = createRouter<NextApiRequest, NextApiResponse>();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ status: "ok", data: { address: req.address } });
}

router.use(authMiddleware).post(handler);

export default router.handler({
  onError: (err: any, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
