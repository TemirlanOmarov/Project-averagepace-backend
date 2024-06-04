import { builder } from "../builder";
import {formatISO} from 'date-fns'

builder.prismaObject('Run', {
    fields: (t) => ({
      id: t.exposeID('id'),
      date: t.field({
          type: "String",
          resolve: (parent) => {
              return  formatISO(parent.date, { representation: 'date'})
          }
      }),
      distance: t.exposeFloat('distance'),
      duration: t.exposeInt('duration'),
      averagePace: t.exposeString('averagePace'),
      // egg: t.field({
      //   type: 'Int',
      //   resolve: () => {
      //     return 1000
      //   }
      // })
    }),
  });
  