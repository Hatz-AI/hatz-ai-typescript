# Usage

## Example Usage

```typescript
import { Usage } from "hatz-ai/models/components";

let value: Usage = {
  inputTokens: 778157,
  outputTokens: 870013,
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `inputTokens`                | *number*                     | :heavy_check_mark:           | Number of input tokens used  |
| `outputTokens`               | *number*                     | :heavy_check_mark:           | Number of output tokens used |