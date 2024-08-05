import { GraphQLError } from "graphql";
import { builder, prisma } from "../builder";
builder.mutationField('updateRun', (t) =>
    t.prismaField({
      args: {
        id: t.arg.string({ required: true }),
        date: t.arg.string({ required: true }),
        distance: t.arg.float({ required: true }),
        duration: t.arg.int({ required: true }),
      },
      type: 'Run',
      resolve: async (query, root, args, ctx, info) => {
        const run = await prisma.run.findUnique({
            where:{
                id:args.id
            }
        }) 
        
        if(!run) {
            throw new GraphQLError(`Couldn't find id ${args.id} not finded`)
        }

        const updatedRun = await prisma.run.update({
          where: {
            id: args.id
          }
          ,
          data: {
            id: args.id,
            date: args.date,
            distance: args.distance,
            duration: args.duration,
          },
        });
    
        return updatedRun;
      }
    })
);

