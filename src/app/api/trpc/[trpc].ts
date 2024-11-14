import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '@/lib/trpc';

export default createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
