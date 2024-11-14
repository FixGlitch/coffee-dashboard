import express, { Request, Response } from "express";
import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";

const createContext = ({ req, res }: { req: Request; res: Response }) => {
  return { req, res };
};
type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

const app = express();
app.use(express.json());

app.use(
  "/trpc",
  createExpressMiddleware({
    router: t.router({
      user: userRouter,
      product: productRouter,
    }),
    createContext,
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
