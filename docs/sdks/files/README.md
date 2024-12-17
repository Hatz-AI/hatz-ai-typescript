# Files
(*files*)

## Overview

### Available Operations

* [upload](#upload) - Upload File
* [list](#list) - Get Files

## upload

Upload File

### Example Usage

```typescript
import { HatzAI } from "hatz-ai";
import { openAsBlob } from "node:fs";

const hatzAI = new HatzAI({
  apiKeyHeader: process.env["HATZAI_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await hatzAI.files.upload({
    file: await openAsBlob("example.file"),
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HatzAICore } from "hatz-ai/core.js";
import { filesUpload } from "hatz-ai/funcs/filesUpload.js";
import { openAsBlob } from "node:fs";

// Use `HatzAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hatzAI = new HatzAICore({
  apiKeyHeader: process.env["HATZAI_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await filesUpload(hatzAI, {
    file: await openAsBlob("example.file"),
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.BodyUploadFileV1FilesUploadPost](../../models/components/bodyuploadfilev1filesuploadpost.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## list

Get Files

### Example Usage

```typescript
import { HatzAI } from "hatz-ai";

const hatzAI = new HatzAI({
  apiKeyHeader: process.env["HATZAI_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await hatzAI.files.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HatzAICore } from "hatz-ai/core.js";
import { filesList } from "hatz-ai/funcs/filesList.js";

// Use `HatzAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hatzAI = new HatzAICore({
  apiKeyHeader: process.env["HATZAI_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await filesList(hatzAI);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |