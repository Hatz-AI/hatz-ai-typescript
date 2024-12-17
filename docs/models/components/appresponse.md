# AppResponse

## Example Usage

```typescript
import { AppResponse } from "hatz-ai/models/components";

let value: AppResponse = {
  name: "<value>",
  files: [
    {
      size: 290077,
      module: "<value>",
      fileKey: "<value>",
      fileType: "text",
      objectId: "<id>",
      description: "purse salty even as advanced afterwards",
      displayName: "Peggie_Hegmann70",
      variableName: "<value>",
      variableType: "<value>",
    },
  ],
  userInputs: [
    {
      position: 164694,
      required: false,
      objectId: "<id>",
      description:
        "shallow meh instead technician inasmuch sympathetically disappointment",
      displayName: "Creola.Balistreri",
      variableName: "<value>",
      variableType: "<value>",
    },
  ],
  promptSections: [
    {
      body: "<value>",
      position: 463575,
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | The name of the app                                                                  |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | The description of the app                                                           |
| `defaultModel`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | The default AI model to use                                                          |
| `files`                                                                              | [components.AppFileResponse](../../models/components/appfileresponse.md)[]           | :heavy_check_mark:                                                                   | The files associated with this app                                                   |
| `constants`                                                                          | [components.AppConstant](../../models/components/appconstant.md)[]                   | :heavy_minus_sign:                                                                   | The constants associated with this app                                               |
| `userInputs`                                                                         | [components.AppUserInputResponse](../../models/components/appuserinputresponse.md)[] | :heavy_check_mark:                                                                   | The user inputs associated with this app                                             |
| `promptSections`                                                                     | [components.PromptSection](../../models/components/promptsection.md)[]               | :heavy_check_mark:                                                                   | The prompt sections associated with this app                                         |