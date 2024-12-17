# ModelsResponse

## Example Usage

```typescript
import { ModelsResponse } from "hatz-ai/models/components";

let value: ModelsResponse = {
  data: [
    {
      name: "<value>",
      developer: "<value>",
      displayName: "Katharina_Mitchell",
      maxTokens: 437587,
      vision: false,
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `data`                                                     | [components.AIModel](../../models/components/aimodel.md)[] | :heavy_check_mark:                                         | The list of available AI models                            |