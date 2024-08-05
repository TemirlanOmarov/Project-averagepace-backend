import { builder } from "../builder";
import {formatISO} from 'date-fns'
import { calculateAveragePace } from "../utils/calculateAveragePace";
import { formatDistance } from "../utils/formatDistance";
import { formatDuration } from "../utils/formatDuraction";

builder.prismaObject('Run', {
    fields: (t) => ({
      id: t.exposeID('id'),
      date: t.field({
          type: "String",
          resolve: (parent) => {
              return formatISO(parent.date, { representation: 'date'})
          }
      }),
      distance: t.exposeFloat('distance'),
      duration: t.exposeInt('duration'),
      distanceString: t.field({
        type: "String",
        resolve: (parent) => {
            return formatDistance(parent.distance)
        }
      }),
      durationString: t.field({
        type: "String",
        resolve: (parent) => {
            return formatDuration(parent.duration)
        }
      }),
      averagePace: t.field({
        type: "String",
        resolve: (parent) => {
            return calculateAveragePace(parent.duration, parent.distance)
        }
      }),
    }),
  });
  