import { NextApiRequest, NextApiResponse } from "next";
import { NextHandler } from "next-connect";
import jwt from "jsonwebtoken";

export const authMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler,
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Invalid token" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;
    const currentTime = Math.floor(Date.now() / 1000);
    if (decoded.exp < currentTime) {
      res.status(401).json({ error: "tokenExpired" });
    } else {
      req.address = decoded.address;
      return await next();
    }
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};
