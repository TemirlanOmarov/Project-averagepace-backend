import { builder } from "./builder";

builder.queryType();
builder.mutationType();
import './types/Run'
import './queries/listRuns'
import './queries/getRun'
import './mutations/createRun'
import './mutations/updateRun'
import './mutations/deleteRun'
export const schema = builder.toSchema();