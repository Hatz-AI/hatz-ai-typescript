/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AppConstant,
  AppConstant$inboundSchema,
  AppConstant$Outbound,
  AppConstant$outboundSchema,
} from "./appconstant.js";
import {
  AppFileResponse,
  AppFileResponse$inboundSchema,
  AppFileResponse$Outbound,
  AppFileResponse$outboundSchema,
} from "./appfileresponse.js";
import {
  AppUserInputResponse,
  AppUserInputResponse$inboundSchema,
  AppUserInputResponse$Outbound,
  AppUserInputResponse$outboundSchema,
} from "./appuserinputresponse.js";
import {
  PromptSection,
  PromptSection$inboundSchema,
  PromptSection$Outbound,
  PromptSection$outboundSchema,
} from "./promptsection.js";

export type AppResponse = {
  /**
   * The name of the app
   */
  name: string;
  /**
   * The description of the app
   */
  description?: string | null | undefined;
  /**
   * The default AI model to use
   */
  defaultModel?: string | undefined;
  /**
   * The files associated with this app
   */
  files: Array<AppFileResponse>;
  /**
   * The constants associated with this app
   */
  constants?: Array<AppConstant> | undefined;
  /**
   * The user inputs associated with this app
   */
  userInputs: Array<AppUserInputResponse>;
  /**
   * The prompt sections associated with this app
   */
  promptSections: Array<PromptSection>;
};

/** @internal */
export const AppResponse$inboundSchema: z.ZodType<
  AppResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  default_model: z.string().default("gpt-4o"),
  files: z.array(AppFileResponse$inboundSchema),
  constants: z.array(AppConstant$inboundSchema).optional(),
  user_inputs: z.array(AppUserInputResponse$inboundSchema),
  prompt_sections: z.array(PromptSection$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "default_model": "defaultModel",
    "user_inputs": "userInputs",
    "prompt_sections": "promptSections",
  });
});

/** @internal */
export type AppResponse$Outbound = {
  name: string;
  description?: string | null | undefined;
  default_model: string;
  files: Array<AppFileResponse$Outbound>;
  constants?: Array<AppConstant$Outbound> | undefined;
  user_inputs: Array<AppUserInputResponse$Outbound>;
  prompt_sections: Array<PromptSection$Outbound>;
};

/** @internal */
export const AppResponse$outboundSchema: z.ZodType<
  AppResponse$Outbound,
  z.ZodTypeDef,
  AppResponse
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  defaultModel: z.string().default("gpt-4o"),
  files: z.array(AppFileResponse$outboundSchema),
  constants: z.array(AppConstant$outboundSchema).optional(),
  userInputs: z.array(AppUserInputResponse$outboundSchema),
  promptSections: z.array(PromptSection$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    defaultModel: "default_model",
    userInputs: "user_inputs",
    promptSections: "prompt_sections",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AppResponse$ {
  /** @deprecated use `AppResponse$inboundSchema` instead. */
  export const inboundSchema = AppResponse$inboundSchema;
  /** @deprecated use `AppResponse$outboundSchema` instead. */
  export const outboundSchema = AppResponse$outboundSchema;
  /** @deprecated use `AppResponse$Outbound` instead. */
  export type Outbound = AppResponse$Outbound;
}

export function appResponseToJSON(appResponse: AppResponse): string {
  return JSON.stringify(AppResponse$outboundSchema.parse(appResponse));
}

export function appResponseFromJSON(
  jsonString: string,
): SafeParseResult<AppResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AppResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AppResponse' from JSON`,
  );
}
