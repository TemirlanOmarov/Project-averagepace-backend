import { builder, prisma } from "../builder";

builder.mutationField('createRun', (t) =>
    t.prismaField({
      type: 'Run',
      args: {
        date: t.arg.string({required: true}),
        distance: t.arg.float({required: true}),
        duration: t.arg.int({required: true}),
        averagePace: t.arg.string({required: true}),
      },
      resolve: async (query, root, args, ctx, info) => {
          const newRun =  await prisma.run.create({
            data: {
                date: args.date,
                distance: args.distance,
                duration: args.duration,
                averagePace: args.averagePace,
            },
        });
        
        return newRun;
      }
    }))

  