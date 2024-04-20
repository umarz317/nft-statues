import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { ethers } from "ethers";
import jwt from "jsonwebtoken";

const router = createRouter<NextApiRequest, NextApiResponse>();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { signedMessage, message, address } = req.body;
  const recoveredAddress = ethers.verifyMessage(message, signedMessage);
  if (recoveredAddress !== address) {
    return res.status(401).json({ error: "Invalid signature" });
  }
  const secret = process.env.JWT_SECRET!;

  const token = jwt.sign({ address }, secret, {
    expiresIn: "1d",
  });
  res.json({ token });
}

router.post(handler);

export default router.handler({
  onError: (err: any, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
