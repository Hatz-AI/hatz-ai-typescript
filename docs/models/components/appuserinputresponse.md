# AppUserInputResponse

## Example Usage

```typescript
import { AppUserInputResponse } from "hatz-ai/models/components";

let value: AppUserInputResponse = {
  position: 586784,
  required: false,
  objectId: "<id>",
  description: "contractor unsteady cautiously as unfreeze than on bus briskly",
  displayName: "Gwendolyn.Cole72",
  variableName: "<value>",
  variableType: "<value>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `position`                                  | *number*                                    | :heavy_check_mark:                          | The position/order of this input field      |
| `required`                                  | *boolean*                                   | :heavy_check_mark:                          | Whether this input is required              |
| `objectId`                                  | *string*                                    | :heavy_check_mark:                          | The unique object identifier for this input |
| `description`                               | *string*                                    | :heavy_check_mark:                          | A description of this input field           |
| `displayName`                               | *string*                                    | :heavy_check_mark:                          | The display name shown to users             |
| `variableName`                              | *string*                                    | :heavy_check_mark:                          | The variable name used internally           |
| `variableType`                              | *string*                                    | :heavy_check_mark:                          | The type of input (e.g. short_answer)       |