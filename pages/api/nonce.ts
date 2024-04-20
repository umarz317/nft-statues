import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import crypto from "crypto";

const router = createRouter<NextApiRequest, NextApiResponse>();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Generate a random 32-byte value to use as the nonce
  const nonce = crypto.randomBytes(32).toString("hex");
  // Return the nonce value as a JSON object in the response body
  res.json({ nonce });
}

router.post(handler);

export default router.handler({
  onError: (err: any, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
