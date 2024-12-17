# CompletionResponseMessage

## Example Usage

```typescript
import { CompletionResponseMessage } from "hatz-ai/models/components";

let value: CompletionResponseMessage = {
  content: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `content`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | The content of the response message                                                                  |
| `role`                                                                                               | [components.CompletionResponseMessageRole](../../models/components/completionresponsemessagerole.md) | :heavy_check_mark:                                                                                   | The role of the message sender                                                                       |