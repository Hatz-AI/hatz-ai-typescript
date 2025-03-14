/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { filesList } from "../../funcs/filesList.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$filesList: ToolDefinition = {
  name: "files-list",
  description: `Get Files`,
  tool: async (client, ctx) => {
    const [result, apiCall] = await filesList(
      client,
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
