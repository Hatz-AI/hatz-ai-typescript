# AppFileResponse

## Example Usage

```typescript
import { AppFileResponse } from "hatz-ai/models/components";

let value: AppFileResponse = {
  size: 420539,
  module: "<value>",
  fileKey: "<value>",
  fileType: "image",
  objectId: "<id>",
  description: "iterate and first inside nearly creaking impish exalted late",
  displayName: "Vance_Schuster81",
  variableName: "<value>",
  variableType: "<value>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `size`                                      | *number*                                    | :heavy_check_mark:                          | The size of the file in bytes               |
| `module`                                    | *string*                                    | :heavy_check_mark:                          | The module this file belongs to             |
| `fileId`                                    | *string*                                    | :heavy_minus_sign:                          | The unique identifier for this file         |
| `typeId`                                    | *string*                                    | :heavy_minus_sign:                          | The type identifier for this file           |
| `fileKey`                                   | *string*                                    | :heavy_check_mark:                          | The key/name of the file                    |
| `fileType`                                  | *string*                                    | :heavy_check_mark:                          | The type of file (e.g. PDF)                 |
| `objectId`                                  | *string*                                    | :heavy_check_mark:                          | The object identifier for this file         |
| `description`                               | *string*                                    | :heavy_check_mark:                          | A description of the file                   |
| `displayName`                               | *string*                                    | :heavy_check_mark:                          | The display name of the file                |
| `variableName`                              | *string*                                    | :heavy_check_mark:                          | The variable name associated with this file |
| `variableType`                              | *string*                                    | :heavy_check_mark:                          | The type of variable this file represents   |