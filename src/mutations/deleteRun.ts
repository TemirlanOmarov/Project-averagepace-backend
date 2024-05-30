import { GraphQLError } from "graphql";
import { builder, prisma } from "../builder";
builder.mutationField('deleteRun', (t) =>
    t.prismaField({
      args: {
        id: t.arg.string({ required: true }),
      },
      type: 'Run',
      resolve: async (query, root, args, ctx, info) => {
        const deletedRun = await prisma.run.delete({
          where: {
            id: args.id}
        });

        if (!deletedRun) {
          throw new GraphQLError(`delete with id '${args.id}' not deleted`);
        }
        
        return deletedRun;
      }
    })
);

