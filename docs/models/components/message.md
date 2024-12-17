# Message

## Example Usage

```typescript
import { Message } from "hatz-ai/models/components";

let value: Message = {
  role: "user",
  content: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `role`                                             | [components.Role](../../models/components/role.md) | :heavy_check_mark:                                 | The role of the message sender                     |
| `content`                                          | *string*                                           | :heavy_check_mark:                                 | The content of the message                         |