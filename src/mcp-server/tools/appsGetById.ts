/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { appsGetById } from "../../funcs/appsGetById.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetAppByIdV1AppAppIdGetRequest$inboundSchema,
};

export const tool$appsGetById: ToolDefinition<typeof args> = {
  name: "apps-get-by-id",
  description: `Get App By Id

Get an app's data by its id.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await appsGetById(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
