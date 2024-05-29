import { builder, prisma } from "../builder";

builder.queryField('listRuns', (t) =>
    t.prismaField({
      type: ['Run'],
      resolve: async (query, root, args, ctx, info) => {
          const runs = await prisma.run.findMany();
          return runs;
      }
    }))

  