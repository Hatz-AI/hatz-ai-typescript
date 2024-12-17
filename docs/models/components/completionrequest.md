# CompletionRequest

## Example Usage

```typescript
import { CompletionRequest } from "hatz-ai/models/components";

let value: CompletionRequest = {
  messages: [
    {
      role: "assistant",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `messages`                                                                                        | [components.Message](../../models/components/message.md)[]                                        | :heavy_check_mark:                                                                                | The list of messages to process                                                                   |
| `model`                                                                                           | *string*                                                                                          | :heavy_minus_sign:                                                                                | The AI model to use for processing. Please use the unique name of the model, not the display name |
| `stream`                                                                                          | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | Whether to stream the response                                                                    |
| `fileUuids`                                                                                       | *string*[]                                                                                        | :heavy_minus_sign:                                                                                | The list of file uuids to process                                                                 |