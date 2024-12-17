<!-- Start SDK Example Usage [usage] -->
```typescript
import { HatzAI } from "hatz-ai";

const hatzAI = new HatzAI({
  apiKeyHeader: process.env["HATZAI_API_KEY_HEADER"] ?? "",
});

async function run() {
  const result = await hatzAI.models.list();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->