# CompletionsStreamingResponse

## Example Usage

```typescript
import { CompletionsStreamingResponse } from "hatz-ai/models/components";

let value: CompletionsStreamingResponse = {
  type: "<value>",
  message: "<value>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `type`                                 | *string*                               | :heavy_check_mark:                     | The type of response (e.g. completion) |
| `message`                              | *string*                               | :heavy_check_mark:                     | The message to be streamed             |