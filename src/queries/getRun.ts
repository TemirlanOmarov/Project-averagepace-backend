import { GraphQLError } from "graphql";
import { builder, prisma } from "../builder";

// date: t.arg.string({required: true}),


builder.queryField('getRun', (t) =>
    t.prismaField({
      args: {
        id: t.arg.string({required:true})
      },
      type: 'Run',
      resolve: async (query, root, args, ctx, info) => {
        const getRun = await prisma.run.findUnique({
          where: { 
            id:args.id
          },
        });

        if (!getRun) {
          throw new GraphQLError(`Run with id '${args.id}' not found`)
        }
        
        return getRun;
      }
    }))
