# AppListResponse

## Example Usage

```typescript
import { AppListResponse } from "hatz-ai/models/components";

let value: AppListResponse = {
  data: [
    {
      name: "<value>",
      files: [
        {
          size: 143353,
          module: "<value>",
          fileKey: "<value>",
          fileType: "application",
          objectId: "<id>",
          description:
            "plagiarise past interestingly reassuringly amongst wedge colorfully",
          displayName: "Elena6",
          variableName: "<value>",
          variableType: "<value>",
        },
      ],
      userInputs: [
        {
          position: 566602,
          required: false,
          objectId: "<id>",
          description: "ceramic yuck supposing friendly serpentine",
          displayName: "Jewell_Nolan-Kassulke1",
          variableName: "<value>",
          variableType: "<value>",
        },
      ],
      promptSections: [
        {
          body: "<value>",
          position: 660174,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `data`                                                             | [components.AppResponse](../../models/components/appresponse.md)[] | :heavy_check_mark:                                                 | The list of apps                                                   |