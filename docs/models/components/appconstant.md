# AppConstant

## Example Usage

```typescript
import { AppConstant } from "hatz-ai/models/components";

let value: AppConstant = {
  objectId: "<id>",
  variableName: "<value>",
  displayName: "Olaf.Block67",
  value: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `objectId`                                                         | *string*                                                           | :heavy_check_mark:                                                 | The unique object identifier for this constant                     |
| `variableName`                                                     | *string*                                                           | :heavy_check_mark:                                                 | The variable name used internally                                  |
| `displayName`                                                      | *string*                                                           | :heavy_check_mark:                                                 | The display name shown to users                                    |
| `description`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | A description of this constant                                     |
| `variableType`                                                     | [components.VariableType](../../models/components/variabletype.md) | :heavy_check_mark:                                                 | The type of constant (only 'text' supported)                       |
| `value`                                                            | *string*                                                           | :heavy_check_mark:                                                 | The value of this constant                                         |