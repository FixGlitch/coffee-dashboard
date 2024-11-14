import { z } from 'zod';
import { initTRPC } from '@trpc/server';
import { userController } from '../controllers/userController';

const t = initTRPC.create();

export const userRouter = t.router({
  getUserById: t.procedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ input }) => {
      return await userController.getUserById(input.id);
    }),
  createUser: t.procedure
    .input(z.object({ name: z.string(), email: z.string().email(), password: z.string() }))
    .mutation(async ({ input }) => {
      return await userController.createUser(input.name, input.email, input.password);
    }),
});
