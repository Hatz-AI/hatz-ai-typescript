# ValidationError

## Example Usage

```typescript
import { ValidationError } from "hatz-ai/models/components";

let value: ValidationError = {
  loc: [
    461479,
  ],
  msg: "<value>",
  type: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `loc`              | *components.Loc*[] | :heavy_check_mark: | N/A                |
| `msg`              | *string*           | :heavy_check_mark: | N/A                |
| `type`             | *string*           | :heavy_check_mark: | N/A                |