# AIModel

## Example Usage

```typescript
import { AIModel } from "hatz-ai/models/components";

let value: AIModel = {
  name: "<value>",
  developer: "<value>",
  displayName: "Sim56",
  maxTokens: 71036,
  vision: false,
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | The unique identifier/name of the AI model. Use this to specify the model in requests. |
| `developer`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | The company/organization that developed this model                                     |
| `displayName`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | The human-readable display name for this model                                         |
| `maxTokens`                                                                            | *number*                                                                               | :heavy_check_mark:                                                                     | The maximum number of tokens this model can process                                    |
| `vision`                                                                               | *boolean*                                                                              | :heavy_check_mark:                                                                     | Whether this model has vision/image processing capabilities                            |