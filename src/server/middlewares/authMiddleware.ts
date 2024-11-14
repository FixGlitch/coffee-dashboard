import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "@/services/userService"; // Ensure this points to your User type

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";


export const authMiddleware = (
  req: Request & { user?: User }, // Extend Request to include user
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden: Invalid token" });
    }

    // Ensure decoded is of type JwtPayload
    if (decoded && typeof decoded === "object") {
      // Now we can safely cast it to JwtPayload
      req.user = decoded as User; // Assuming decoded has the structure of User
    } else {
      return res.status(403).json({ message: "Forbidden: Invalid token structure" });
    }

    next(); // Ensure next is always called
  });
};
