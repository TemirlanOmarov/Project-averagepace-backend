import { GraphQLError } from "graphql";
import { builder, prisma } from "../builder";
builder.mutationField('deleteRun', (t) =>
    t.prismaField({
      args: {
        id: t.arg.string({ required: true }),
      },
      type: 'Run',
      resolve: async (query, root, args, ctx, info) => {
        const run = await prisma.run.findUnique({
          where: {
            id: args.id}
        });
        if (!run) {
            throw new GraphQLError(`delete with id '${args.id}' not deleted`);
          }
         
        const deletedRun = await prisma.run.delete({
            where: {
              id: args.id}
          });
        console.log(deletedRun)

       
        return deletedRun;
      }
    })
);

