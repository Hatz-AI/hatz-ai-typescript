# QueryAppV1AppAppIdQueryPostRequest

## Example Usage

```typescript
import { QueryAppV1AppAppIdQueryPostRequest } from "hatz-ai/models/operations";

let value: QueryAppV1AppAppIdQueryPostRequest = {
  appId: "62a7f1c4-3a3a-4868-84b6-5de035dffe4f",
  appQueryRequest: {
    inputs: {},
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `appId`                                                                  | *string*                                                                 | :heavy_check_mark:                                                       | The unique identifier of the app to query                                |
| `appQueryRequest`                                                        | [components.AppQueryRequest](../../models/components/appqueryrequest.md) | :heavy_check_mark:                                                       | N/A                                                                      |