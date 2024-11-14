import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '@/services/userService';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '@/services/productService';

const t = initTRPC.create();

const userRouter = t.router({
  getAll: t.procedure.query(async () => {
    return await getUsers();
  }),
  getById: t.procedure.input(z.string()).query(async (opts) => {
    return await getUserById(opts.input);
  }),
  create: t.procedure.input(z.object({
    fullName: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })).mutation(async (opts) => {
    return await createUser(opts.input);
  }),
  update: t.procedure.input(z.object({
    id: z.string(),
    data: z.object({
      fullName: z.string().optional(),
      email: z.string().email().optional(),
    }),
  })).mutation(async (opts) => {
    return await updateUser(opts.input.id, opts.input.data);
  }),
  delete: t.procedure.input(z.string()).mutation(async (opts) => {
    return await deleteUser(opts.input);
  }),
});

const productRouter = t.router({
  getAll: t.procedure.query(async () => {
    return await getProducts();
  }),
  getById: t.procedure.input(z.string()).query(async (opts) => {
    return await getProductById(opts.input);
  }),
  create: t.procedure.input(z.object({
    name: z.string(),
    price: z.number(),
    description: z.string().optional(),
  })).mutation(async (opts) => {
    return await createProduct(opts.input);
  }),
  update: t.procedure.input(z.object({
    id: z.string(),
    data: z.object({
      name: z.string().optional(),
      price: z.number().optional(),
      description: z.string().optional(),
    }),
  })).mutation(async (opts) => {
    return await updateProduct(opts.input.id, opts.input.data);
  }),
  delete: t.procedure.input(z.string()).mutation(async (opts) => {
    return await deleteProduct(opts.input);
  }),
});

export const appRouter = t.router({
  users: userRouter,
  products: productRouter,
});

export type AppRouter = typeof appRouter;
