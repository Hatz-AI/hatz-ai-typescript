# Apps
(*apps*)

## Overview

### Available Operations

* [list](#list) - List All Apps
* [getById](#getbyid) - Get App By Id
* [query](#query) - Query App

## list

List All Apps

### Example Usage

```typescript
import { HatzAI } from "hatz-ai";

const hatzAI = new HatzAI({
  apiKeyHeader: process.env["HATZAI_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await hatzAI.apps.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HatzAICore } from "hatz-ai/core.js";
import { appsList } from "hatz-ai/funcs/appsList.js";

// Use `HatzAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hatzAI = new HatzAICore({
  apiKeyHeader: process.env["HATZAI_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await appsList(hatzAI);

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

**Promise\<[components.AppListResponse](../../models/components/applistresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getById

Get an app's data by its id.

### Example Usage

```typescript
import { HatzAI } from "hatz-ai";

const hatzAI = new HatzAI({
  apiKeyHeader: process.env["HATZAI_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await hatzAI.apps.getById({
    appId: "47adbf4e-b0d6-44fd-a643-30949eaf1b55",
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
import { appsGetById } from "hatz-ai/funcs/appsGetById.js";

// Use `HatzAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hatzAI = new HatzAICore({
  apiKeyHeader: process.env["HATZAI_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await appsGetById(hatzAI, {
    appId: "47adbf4e-b0d6-44fd-a643-30949eaf1b55",
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
| `request`                                                                                                                                                                      | [operations.GetAppByIdV1AppAppIdGetRequest](../../models/operations/getappbyidv1appappidgetrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AppResponse](../../models/components/appresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## query

Post a completion request to the ai model given an app id and set of inputs.

Inputs are usually in the form of JSON object like:

`{'<variable_name>': '<value>'}` 

Example: `{'name': 'John', 'age': 25}`


The variable name should be the same as the variable name in the app.

Returns:

    - StreamingResponse when request.stream=True

    - CompletionResponse when request.stream=False

### Example Usage

```typescript
import { HatzAI } from "hatz-ai";

const hatzAI = new HatzAI({
  apiKeyHeader: process.env["HATZAI_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await hatzAI.apps.query({
    appId: "da7fa77e-f572-45dc-a417-baf2faf1fe5d",
    appQueryRequest: {
      inputs: {},
    },
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
import { appsQuery } from "hatz-ai/funcs/appsQuery.js";

// Use `HatzAICore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hatzAI = new HatzAICore({
  apiKeyHeader: process.env["HATZAI_API_KEY_HEADER"] ?? "",
});

async function run() {
  const res = await appsQuery(hatzAI, {
    appId: "da7fa77e-f572-45dc-a417-baf2faf1fe5d",
    appQueryRequest: {
      inputs: {},
    },
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
| `request`                                                                                                                                                                      | [operations.QueryAppV1AppAppIdQueryPostRequest](../../models/operations/queryappv1appappidquerypostrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.QueryAppV1AppAppIdQueryPostResponseQueryAppV1AppAppIdQueryPost](../../models/operations/queryappv1appappidquerypostresponsequeryappv1appappidquerypost.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |