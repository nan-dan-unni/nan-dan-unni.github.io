import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// No ISR/on-demand revalidation on this site (every page is fully static),
// so no incremental-cache override or R2 bucket is needed.
export default defineCloudflareConfig();
