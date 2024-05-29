import { builder } from "./builder";

builder.queryType();
builder.mutationType();
import './types/Run'
import './queries/listRuns'
import './mutations/createRun'

export const schema = builder.toSchema();