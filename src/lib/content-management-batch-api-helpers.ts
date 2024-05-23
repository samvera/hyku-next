import { getContentfulManagement } from "@/lib/get-contentful";

async function batchHelper() {
  // Connect to the Contentful Management API
  const client = getContentfulManagement();

  // Get entries from the Contentful space
  const entries = await client.entry.getMany({
    query: {
      content_type: "",
    },
  });
  console.log("entries", entries);

  // To batch delete, you must first "unpublish" the entries
  // Then "delete" the entries
  await Promise.all(
    entries.items.map((entry) =>
      client.entry.unpublish({
        entryId: entry.sys.id,
      })
    )
  );
}
