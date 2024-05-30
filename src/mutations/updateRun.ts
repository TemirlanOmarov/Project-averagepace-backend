import { GraphQLError } from "graphql";
import { builder, prisma } from "../builder";
builder.mutationField('updateRun', (t) =>
    t.prismaField({
      args: {
        id: t.arg.string({ required: true }),
        date: t.arg.string({ required: true }),
        distance: t.arg.float({ required: true }),
        duration: t.arg.int({ required: true }),
        averagePace: t.arg.string({ required: true }),
      },
      type: 'Run',
      resolve: async (query, root, args, ctx, info) => {
        const updatedRun = await prisma.run.update({
          where: {
            id: args.id
          },
          data: {
            date: args.date,
            distance: args.distance,
            duration: args.duration,
            averagePace: args.averagePace,
          },
        });

        if (!updatedRun) {
          throw new GraphQLError(`Update with id '${args.id}' not updated`);
        }
        
        return updatedRun;
      }
    })
);

