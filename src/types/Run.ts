import { builder } from "../builder";

builder.prismaObject('Run', {
    name: 'PostAuthor',
    fields: (t) => ({
      id: t.exposeID('id'),
        date: t.field({
            type: "String",
            resolve: (parent) => {
                return  parent.date.toString()
            }
        }),
        distance: t.exposeFloat('distance'),
        duration: t.exposeInt('duration'),
        averagePace: t.exposeString('averagePace'),
    }),
  });
  