import { z } from 'zod';
import { initTRPC } from '@trpc/server';
import { productController } from '../controllers/productController';

const t = initTRPC.create();

export const productRouter = t.router({
  getProductById: t.procedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ input }) => {
      return await productController.getProductById(input.id);
    }),
  createProduct: t.procedure
    .input(z.object({ name: z.string(), price: z.number().min(0) }))
    .mutation(async ({ input }) => {
      return await productController.createProduct(input.name, input.price);
    }),
});
