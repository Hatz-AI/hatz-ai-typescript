# CompletionResponse

## Example Usage

```typescript
import { CompletionResponse } from "hatz-ai/models/components";

let value: CompletionResponse = {
  choices: [
    {
      message: {
        content: "<value>",
      },
    },
  ],
  model: "ATS",
  usage: {
    inputTokens: 20218,
    outputTokens: 832620,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `choices`                                                                                    | [components.CompletionResponseChoice](../../models/components/completionresponsechoice.md)[] | :heavy_check_mark:                                                                           | List of completion choices                                                                   |
| `model`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | The AI model used for processing                                                             |
| `usage`                                                                                      | [components.Usage](../../models/components/usage.md)                                         | :heavy_check_mark:                                                                           | N/A                                                                                          |